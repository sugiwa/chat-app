package domain

import (
	"fmt"
	"log"
	"time"

	"github.com/gorilla/websocket"
)

type Client struct {
	ws     *websocket.Conn
	sendCh chan []byte
}

func NewClient(ws *websocket.Conn) *Client {
	return &Client{
		ws:     ws,
		sendCh: make(chan []byte),
	}
}

func (c *Client) ReadLoop(broadCast chan<- []byte, unregister chan<- *Client) {
	defer func() {
		c.disconnect(unregister)
	}()

	for {
		_, jsonMsg, err := c.ws.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Printf("unexpected close error: %v", err)
			}
			break

		}
		fmt.Println("READ jsonMsg", jsonMsg)

		broadCast <- jsonMsg
	}
}

func (c *Client) WriteLoop() {
	defer func() {
		c.ws.Close()
	}()

	for {
		message := <-c.sendCh
		fmt.Println("WRITE jsonMsg", message)

		w, err := c.ws.NextWriter(websocket.TextMessage)
		if err != nil {
			return
		}

		for i := 0; i < len(c.sendCh); i++ {
			w.Write(<-c.sendCh)
		}

		w.Write(message)

		if err := w.Close(); err != nil {
			return
		}
		time.Sleep(20 * time.Millisecond)
	}
}

func (c *Client) disconnect(unregister chan<- *Client) {
	unregister <- c
	c.ws.Close()
}
