const jokeContainer = document.getElementById('joke')
const button = document.getElementById('jokeButton')

/**
 * Pulls a dad joke from the API of icanhazdadjoke
 */
const generateJoke = async () => {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })

  const data = await res.json()
  jokeContainer.innerHTML = data.joke
}

button.addEventListener('click', generateJoke)
