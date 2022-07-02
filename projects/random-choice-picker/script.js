const tagsEl = document.getElementById('tags')
const textAreaEl = document.getElementById('textarea')

/**
 * Creates tags and appends to the tags container
 *
 * @param {string} input
 */
const createTags = (input) => {
  const tags = input
    .split(',')
    .filter((tag) => !!tag.trim())
    .map((tag) => tag.trim())

  tagsEl.innerHTML = ''

  tags.forEach((tag) => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

/**
 * Randomly selects tag
 *
 * @returns HTMLElement
 */
const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

/**
 * Adds the highlight class to a given tag element
 * 
 * @param {HTMLElement} tag 
 */
const highlightTag = (tag) => {
  tag.classList.add('highlight')
}

/**
 * Removes the highlight class to a given tag element
 * 
 * @param {HTMLElement} tag 
 */
const unHighligthTag = (tag) => {
  tag.classList.remove('highlight')
}

/**
 * Highlights chips to be selected
 */
const randomSelect = () => {
  const times = 10

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    highlightTag(randomTag)
    setTimeout(() => {
      unHighligthTag(randomTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()
      
      highlightTag(randomTag)
    }, 100)
  }, times * 100)
}

// Focus on the text area field upon page load
textAreaEl.focus()

textAreaEl.addEventListener('keyup', (event) => {
  createTags(event.target.value)

  if (event.key === 'Enter') {
    setTimeout(() => (event.target.value = ''), 10)
    randomSelect()
  }
})
