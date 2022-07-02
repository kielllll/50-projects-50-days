const projects = [
  {
    name: 'Expanding Cards',
    description: 'Responsive cards that can be toggled to expand.',
    sourceCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/expanding-cards',
    path: './projects/expanding-cards/index.html',
  },
  {
    name: 'Progress Steps',
    description: 'Smooth animation for steppers. Can be used in forms!',
    sourceCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/progress-steps',
    path: './projects/progress-steps/index.html',
  },
  {
    name: 'Rotating Navigation',
    description: 'Awesome activity on creating content with navigation.',
    sourceCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/rotating-nav-animation',
    path: './projects/rotating-nav-animation/index.html',
  },
  {
    name: 'Hidden Search Widget',
    description:
      'Smoothly displays the search input when clicked. Awesome for additional UX on pages with search function.',
    sourceCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/hidden-search-widget',
    path: './projects/hidden-search-widget/index.html',
  },
  {
    name: 'Blurry Loading',
    description:
      'Awesome transition on a blurry-effect background upon accessing a website.',
    sourceCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/blurry-loading',
    path: './projects/blurry-loading/index.html',
  },
  {
    name: 'Scroll Animation',
    description: 'Great UX on scrolling as sections enters the page smoothly.',
    soureCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/scroll-animation',
    path: './projects/scroll-animation/index.html',
  },
  {
    name: 'Split Landing Page',
    description: 'Cool animation for multiple products on a landing page.',
    sourceCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/split-landing-page',
    path: './projects/split-landing-page/index.html',
  },
  {
    name: 'Form Wave Animation',
    description: 'Basic form with animation on input labels.',
    sourceCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/form-wave-animation',
    path: './projects/form-wave-animation/index.html',
  },
  {
    name: 'Sound Board',
    description: 'Very fun activity on working with audio snippet.',
    sourceCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/sound-board',
    path: './projects/sound-board/index.html',
  },
  {
    name: 'Dad Jokes',
    description: 'Chill activity with API handling for dad jokes API.',
    sourceCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/projects/dad-jokes',
    path: './projects/dad-jokes/index.html',
  },
  {
    name: 'Event KeyCodes',
    description: 'Really helpful for understanding events with javascript.',
    sourceCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/projects/event-key-codes',
    path: './projects/event-key-codes/index.html',
  },
  {
    name: 'FAQ Collapse',
    description:
      'One of the suave activites I have worked. Awesome for FAQs sections UX!',
    sourceCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/projects/faq-collapse',
    path: './projects/faq-collapse/index.html',
  },
  {
    name: 'Random Choice Picker',
    description: 'Nice activity for handling random data.',
    sourceCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/projects/random-choice-picker',
    path: './projects/random-choice-picker/index.html',
  },
  {
    name: 'Animated Navigation',
    description: 'Fancy transitions on nav bar.',
    sourceCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/projects/animated-navigation',
    path: './projects/animated-navigation/index.html',
  },
  {
    name: 'Incrementing Counter',
    description:
      'Helpful activity. I now understand how developers put fancy numbers like visitors on their webpage!',
    sourceCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/projects/incrementing-counter',
    path: './projects/incrementing-counter/index.html',
  },
  {
    name: 'Drink Water',
    description:
      'Challenging activity. Heavy coding on javascript DOM with a sprinkle of transitions.',
    sourceCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/projects/drink-water',
    path: './projects/drink-water/index.html',
  },
  {
    name: 'Movie App',
    description:
      'Fun acitivty! Creating a Netflix-like project where you also have API calls challenges.',
    sourceCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/projects/movie-app',
    path: './projects/movie-app/index.html',
  },
  {
    name: 'Background Slider',
    description: 'Cool activity! I have learned how carousels work.',
    sourceCode:
      'https://github.com/kielllll/50-projects-50-days/tree/main/projects/background-slider',
    path: './projects/background-slider/index.html',
  },
]

{
  /* <a
      href="#"
      id="floating-button"
      class="floating-button active"
      ><i class="fa-solid fa-arrow-up"></i
    ></a> */
}

const projectsContainer = document.getElementById('projects-container')
const floatingButton = document.createElement('a')
floatingButton.setAttribute('href', '#')
floatingButton.classList.add('floating-button')
floatingButton.innerHTML = '<i class="fa-solid fa-arrow-up">'

// Map each projects and insert to projects section
projects.forEach(({ name, description, sourceCode, path }) => {
  projectsContainer.innerHTML += `
    <div class="card">
      <div class="card-header"><h2>${name}</h2></div>
      <div class="card-content">
        ${description}
      </div>
      <div class="card-actions">
        <a href="${sourceCode}" target="_blank" class="icon-button" id="source-code">
          <i class="fas fa-code"></i>
        </a>
        <a href="${path}" target="_blank" class="icon-button" id="new-tab">
          <i class="fa-solid fa-up-right-from-square"></i>
        </a>
      </div>
    </div>
  `
})

// For floating button display only when scrolling down
window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    document.body.appendChild(floatingButton)
    return
  }

  document.body.removeChild(floatingButton)
})
