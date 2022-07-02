const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

/**
 * Resets the audio
 */
const stopSongs = () => {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound)
    song.pause()
    song.currentTime = 0
  })
}

sounds.forEach((sound) => {
  const button = document.createElement('button')
  button.classList.add('button')
  button.innerText = sound

  button.addEventListener('click', () => {
    stopSongs()

    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(button)
})