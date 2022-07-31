FROM golang:1.18-alpine
RUN apk add --update && apk add git

WORKDIR /app

RUN go install github.com/cosmtrek/air@latest
COPY go.mod go.sum .air.toml ./
RUN go mod download

CMD ["air", "-c", ".air.toml"]

EXPOSE 8080