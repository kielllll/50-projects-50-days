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
]

const projectsContainer = document.getElementById('projects-container')

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
