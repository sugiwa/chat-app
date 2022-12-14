package services

import (
	"backend/src/db"
	"backend/src/model"
	"database/sql"
	"fmt"
)

var DB *sql.DB

func init() {
	DB = db.GetDB()
}

func SaveMessage(msg model.MessageJson) {
	fmt.Println("message", msg)

	_, err := DB.Exec(`INSERT INTO messages (text, user_id) VALUES ($1, $2)`, msg.Message, msg.UserId)
	if err != nil {
		fmt.Println(err)
	}
}

func FetchMessages() []model.Message {
	fmt.Println("fetch messages")

	rows, err := DB.Query(`SELECT * FROM messages`)
	if err != nil {
		fmt.Println(err)
	}
	defer rows.Close()

	var messages []model.Message
	for rows.Next() {
		var message model.Message
		rows.Scan(&message.Id, &message.UserId, &message.Text)
		messages = append(messages, message)
	}

	fmt.Println(messages)
	return messages
}
