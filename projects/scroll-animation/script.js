const boxes = document.querySelectorAll('.box')

const checkBoxes = () => {
  const trigger = window.innerHeight * 0.8

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < trigger) {
      box.classList.add('show')
    } else box.classList.remove('show')
  })
}

window.addEventListener('scroll', checkBoxes)

// Initialize the content that are visible on load
checkBoxes()
