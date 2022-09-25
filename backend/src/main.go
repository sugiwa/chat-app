package main

import (
	"backend/src/domain"
	"backend/src/handlers"
	"fmt"
	"log"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("test")
	handlers.Test(w)
}

func main() {
	hub := domain.NewHub()
	go hub.RunLoop()

	http.HandleFunc("/test", handler)
	http.HandleFunc("/login", handlers.Login)
	http.HandleFunc("/ws", handlers.NewWebsocketHandler(hub).Handle)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
