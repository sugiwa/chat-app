package handlers

import (
	"backend/src/db"
	"backend/src/model"
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

func Test(w http.ResponseWriter) {
	DB := db.GetDB()
	rows, err := DB.Query("SELECT id, name, email, password FROM users")

	if err != nil {
		fmt.Println("ERROR", err)
	}
	defer rows.Close()

	var users []model.User
	for rows.Next() {
		var user model.User
		rows.Scan(&user.Id, &user.Name, &user.Email, &user.Password)
		users = append(users, user)
	}

	fmt.Println(users)

	var buf bytes.Buffer
	enc := json.NewEncoder(&buf)
	if err := enc.Encode(users); err != nil {
		log.Fatal(err)
	}

	_, err = fmt.Fprint(w, buf.String())
	if err != nil {
		return
	}

	fmt.Fprint(w, "test ok")
}