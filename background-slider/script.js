const body = document.body
const slides = document.querySelectorAll('.slide')
const leftButton = document.getElementById('left')
const rightButton = document.getElementById('right')

let activeSlide = 0

const getIndex = (index) => {
  if (index > slides.length - 1) {
    activeSlide = 0
    return 0
  }
  if (index < 0) {
    activeSlide = slides.length - 1
    return slides.length - 1
  }
  return index
}

const setBgToBody = () => {
  const index = getIndex(activeSlide)
  body.style.backgroundImage = slides[index].style.backgroundImage
}

const setActiveSlide = () => {
  const index = getIndex(activeSlide)
  slides.forEach((slide) => slide.classList.remove('active'))
  slides[index].classList.add('active')
  setBgToBody()
}

leftButton.addEventListener('click', () => {
  activeSlide--
  setActiveSlide()
})

rightButton.addEventListener('click', () => {
  activeSlide++
  setActiveSlide()
})

setBgToBody()
