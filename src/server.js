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

// app.listen(PORT, handleListen)
const httpServer = http.createServer(app)
const websocketServer = new WebSocketServer({ server })
// "ws": "^8.2.3" 버전부터는 Websocket.Server 가 아니라 WebSocketServer 입니다
server.listen(PORT, handleListen)
