const background = document.querySelector('.background')
const loadingText = document.querySelector('.loading-text')

let load = 0
const blurring = () => {
  load++
  if (load > 99) clearInterval(interval)

  loadingText.innerText = `${load}%`
  loadingText.style.opacity = scale(load, 0, 100, 1, 0)
  background.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`
}

/**
 * Returns the scale value of a give range of numbers
 * 
 * @param {number} num 
 * @param {number} inMin 
 * @param {number} inMax 
 * @param {number} outMin 
 * @param {number} outMax 
 * @returns {number} scaleValue
 */
const scale = (num, inMin, inMax, outMin, outMax) => ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin

const interval = setInterval(blurring, 30)