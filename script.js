const projects = [
  {
    name: 'Expanding Cards',
    description: 'Responsive cards that can be toggled to expand.',
    projectName: 'expanding-cards',
  },
  {
    name: 'Progress Steps',
    description: 'Smooth animation for steppers. Can be used in forms!',
    projectName: 'progress-steps',
  },
  {
    name: 'Rotating Navigation',
    description: 'Awesome activity on creating content with navigation.',
    projectName: 'rotating-nav-animation',
  },
  {
    name: 'Hidden Search Widget',
    description:
      'Smoothly displays the search input when clicked. Awesome for additional UX on pages with search function.',
    projectName: 'hidden-search-widget',
  },
  {
    name: 'Blurry Loading',
    description:
      'Awesome transition on a blurry-effect background upon accessing a website.',
    projectName: 'blurry-loading',
  },
  {
    name: 'Scroll Animation',
    description: 'Great UX on scrolling as sections enters the page smoothly.',
    projectName: 'scroll-animation',
  },
  {
    name: 'Split Landing Page',
    description: 'Cool animation for multiple products on a landing page.',
    projectName: 'split-landing-page',
  },
  {
    name: 'Form Wave Animation',
    description: 'Basic form with animation on input labels.',
    projectName: 'form-wave-animation',
  },
  {
    name: 'Sound Board',
    description: 'Very fun activity on working with audio snippet.',
    projectName: 'sound-board',
  },
  {
    name: 'Dad Jokes',
    description: 'Chill activity with API handling for dad jokes API.',
    projectName: 'dad-jokes',
  },
  {
    name: 'Event KeyCodes',
    description: 'Really helpful for understanding events with javascript.',
    projectName: 'event-key-codes',
  },
  {
    name: 'FAQ Collapse',
    description:
      'One of the suave activites I have worked. Awesome for FAQs sections UX!',
    projectName: 'faq-collapse',
  },
  {
    name: 'Random Choice Picker',
    description: 'Nice activity for handling random data.',
    projectName: 'random-choice-picker',
  },
  {
    name: 'Animated Navigation',
    description: 'Fancy transitions on nav bar.',
    projectName: 'animated-navigation',
  },
  {
    name: 'Incrementing Counter',
    description:
      'Helpful activity. I now understand how developers put fancy numbers like visitors on their webpage!',
    projectName: 'incrementing-counter',
  },
  {
    name: 'Drink Water',
    description:
      'Challenging activity. Heavy coding on javascript DOM with a sprinkle of transitions.',
    projectName: 'drink-water',
  },
  {
    name: 'Movie App',
    description:
      'Fun acitivty! Creating a Netflix-like project where you also have API calls challenges.',
    projectName: 'movie-app',
  },
  {
    name: 'Background Slider',
    description: 'Cool activity! I have learned how carousels work.',
    projectName: 'background-slider',
  },
  {
    name: 'Theme Clock',
    description:
      'Awesome activity on creating a clock with smooth animation! Also learned how to implement dark mode and light mode.',
    projectName: 'theme-clock',
  },
  {
    name: 'Button Ripple Effect',
    description:
      'Adding animation when the button is clicked. Nice to have for an additional UX.',
    projectName: 'button-ripple-effect',
  },
  {
    name: 'Drag N Drop',
    description:
      'One of the useful activites. I have learned how to implement a drag and drop flow of an application.',
    projectName: 'drag-n-drop',
  },
  {
    name: 'Drawing App',
    description:
      'Fun activity. I now have an idea how to make a fun game with guess the drawing 😉.',
    projectName: 'drawing-pad',
  },
  {
    name: 'Kinetic CSS Loader',
    description:
      'First time to work with keyframes. Nice for creating pre-loader icons!',
    projectName: 'kinetic-css-loader',
  },
  {
    name: 'Content Placeholder',
    description:
      'Useful activity. I have created an app based on this design. Cool to have for UX as well!',
    projectName: 'content-placeholder',
  },
  {
    name: 'Sticky Navbar',
    description:
      'Implementing a sticky nav when scrolling down with some animations.',
    projectName: 'sticky-navbar',
  },
]

const projectsContainer = document.getElementById('projects-container')
const floatingButton = document.getElementById('floating-button')

// Map each projects and insert to projects section
projects.forEach(({ name, description, projectName }) => {
  projectsContainer.innerHTML += `
    <div class="card">
      <div class="card-header"><h2>${name}</h2></div>
      <div class="card-content">
        ${description}
      </div>
      <div class="card-actions">
        <a href="https://github.com/kielllll/50-projects-50-days/tree/main/projects/${projectName}" target="_blank" class="icon-button" id="source-code">
          <i class="fas fa-code"></i>
        </a>
        <a href="./projects/${projectName}/index.html" target="_blank" class="icon-button" id="new-tab">
          <i class="fa-solid fa-up-right-from-square"></i>
        </a>
      </div>
    </div>
  `
})

// For floating button display only when scrolling down
window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    floatingButton.style = ''
    return
  }

  floatingButton.style = 'visibility: hidden;'
})
