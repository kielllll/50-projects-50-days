const button = document.getElementById('button')
const toastContainer = document.getElementById('toasts')

const messages = [
  {
    message: 'Success',
    type: 'success',
  },
  {
    message: 'Error',
    type: 'error',
  },
  {
    message: 'Info',
    type: 'info',
  },
  {
    message: 'Warning',
    type: 'warning',
  },
]

button.addEventListener('click', () => {
  const { message, type } = messages[(messages.length * Math.random()) | 0]
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type)
  notif.innerText = message

  toastContainer.appendChild(notif)
  setTimeout(() => notif.remove(), 3000)
})
