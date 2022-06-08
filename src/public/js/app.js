const messageList = document.querySelector('ul')
const messageForm = document.querySelector('form')

function handleSubmit(e) {
  e.preventDefault()
  const input = messageForm.querySelector('input')
  socket.send(input.value)
  input.value = ''
}

messageForm.addEventListener('submit', handleSubmit)

const socket = new WebSocket(`ws://${location.host}`)

socket.addEventListener('open', () => {
  console.log('Connected to Server ✅')
})

socket.addEventListener('message', (message) => {
  console.log(message)
})

socket.addEventListener('close', () => {
  console.log('Disconnected to Server ❗️')
})
