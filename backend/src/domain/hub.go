package domain

import (
	"backend/src/model"
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
			var jsonBody model.MessageJson
			b := []byte(msg)
			if err := json.Unmarshal(b, &jsonBody); err != nil {
				fmt.Println(err)
			}

			h.broadCastToAllClient(msg)
			services.SaveMessage(jsonBody)
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
		val := model.MessageJson{Message: msg.Text, UserId: msg.UserId}
		json, _ := json.Marshal(val)
		h.UniCast(json, c)
	}
}
