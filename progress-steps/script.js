const progress = document.querySelector('#progress')
const previous = document.querySelector('#previous')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')

let currentActive = 0

const update = () => {
  circles.forEach((circle, index) => {
    if(index <= currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')
  progress.style.width = `${((actives.length - 1) / (circles.length - 1)) * 100}%`

  if (currentActive === circles.length -1) {
    next.disabled = true
    return
  }

  if (currentActive === 0) {
    previous.disabled = true
    return
  }

  previous.disabled = false
  next.disabled = false
}

next.addEventListener('click', () => {
  currentActive++

  if(currentActive >= circles.length) {
    currentActive = circles.length - 1
    return
  }
  update()
})

previous.addEventListener('click', () => {
  currentActive--

  if(currentActive < 0) {
    currentActive = 0
    return
  }
  update()
})