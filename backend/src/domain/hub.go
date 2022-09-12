package domain

import (
	"backend/src/services"
	"encoding/json"
	"fmt"
)

type Hub struct {
	Clients      map[*Client]bool
	RegisterCh   chan *Client
	UnRegisterCh chan *Client
	BroadcastCh  chan []byte
}

type Json struct {
	Message string `json:"message"`
	UserId  int    `json:"userId"`
}

func NewHub() *Hub {
	return &Hub{
		Clients:      make(map[*Client]bool),
		RegisterCh:   make(chan *Client),
		UnRegisterCh: make(chan *Client),
		BroadcastCh:  make(chan []byte),
	}
}

func (h *Hub) RunLoop() {
	for {
		select {
		case client := <-h.RegisterCh:
			h.register(client)
			h.RestoreMessage(client)
		case client := <-h.UnRegisterCh:
			h.unregister(client)
		case msg := <-h.BroadcastCh:
			var jsonBody Json
			b := []byte(msg)
			if err := json.Unmarshal(b, &jsonBody); err != nil {
				fmt.Println(err)
			}

			message := jsonBody.Message

			h.broadCastToAllClient(msg)
			services.SaveMessage(message)
		}
	}
}

func (h *Hub) register(c *Client) {
	h.Clients[c] = true
}

func (h *Hub) unregister(c *Client) {
	delete(h.Clients, c)
}

func (h *Hub) broadCastToAllClient(msg []byte) {
	for c := range h.Clients {
		c.sendCh <- msg
	}
}

func (h *Hub) UniCast(msg []byte, c *Client) {
	c.sendCh <- msg
}

func (h *Hub) RestoreMessage(c *Client) {
	messages := services.FetchMessages()
	for _, msg := range messages {
		val := Json{Message: msg.Text, UserId: 1}
		json, _ := json.Marshal(val)
		h.UniCast(json, c)
	}
}
