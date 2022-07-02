const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgTexts = document.querySelectorAll('.animated-bg-text')

const getData = () => {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xhc3NpYyUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="flower" />'
  title.innerHTML = 'Lorem ipsum dolor sit amet.'
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, qui.'
  profileImg.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/41.jpg" alt="random user" />'
  name.innerHTML = 'John Doe'
  date.innerHTML = 'June 02, 2020'

  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animatedBgTexts.forEach((bgText) =>
    bgText.classList.remove('animated-bg-text')
  )
}

setTimeout(getData, 2000)
