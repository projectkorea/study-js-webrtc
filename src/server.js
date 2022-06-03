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
const webSocketServer = new WebSocketServer({ httpServer })
// const websocketServer = new WebSocketServer() 한 포트에서 웹 소켓 서버만 실행할 경우
// "ws": "^8.2.3" 버전부터는 Websocket.Server 가 아니라 WebSocketServer 이다.

httpServer.listen(PORT, handleListen)
