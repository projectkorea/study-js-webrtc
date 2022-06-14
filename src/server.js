import http from 'http'
import WebSocket, { WebSocketServer } from 'ws'
import express from 'express'

const app = express()
const PORT = 3000
const handleListen = () => console.log(`Listening on http://localhost:${PORT}`)

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')
app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => res.render('home'))
app.get('/*', (req, res) => res.redirect('/'))

const httpServer = http.createServer(app)
const webSocketServer = new WebSocketServer({ server: httpServer })
// co3nst websocketServer = new WebSocketServer() 한 포트에서 웹 소켓 서버만 실행할 경우
// "ws": "^8.2.3" 버전부터는 Websocket.Server 가 아니라 WebSocketServer 이다.

const sockets = []

webSocketServer.on('connection', (socket) => {
  console.log('Connected to Browser ✅')

  sockets.push(socket)

  socket.on('message', (message) => {
    sockets.forEach((aBrowserSocket) =>
      aBrowserSocket.send(message.toString('utf8'))
    )
  })

  socket.on('close', () => console.log('Disconnected from the Browser ❗️'))

  socket.on('error', (err) => console.log(err))
  socket.send("I'm the data 🌝")
})

httpServer.listen(PORT, handleListen)
