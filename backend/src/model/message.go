package model

type Message struct {
	Id     int    `json:"id"`
	UserId int    `json:"user_id"`
	Text   string `json:"text"`
}
