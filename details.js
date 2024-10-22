const myProject = [
  {
    link: 'https://deploy--fabulous-horse-dfd6cb.netlify.app/',
    source: 'https://github.com/JacintaNgwu/HandyMate-Frontend.git',
    image: './Images/Handymate.png',
    title: 'HandyMate',
    language: ['React', 'Rails', 'PostgreSQL','CSS', 'Bootstrap'],
    button: 'See project',
    description: "HandyMate is a website where users can book a service, cancel a booking. The user can also see the details of a service, ratings of the service.",

  },
  {
    link: 'https://jacintangwu.github.io/JavaScript-Capstone-Project/dist/',
    source: 'https://github.com/JacintaNgwu/JavaScript-Capstone-Project.git',
    image: './Images/TvShow.png',
    title: 'Tv Show Website',
    language: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    button: 'See project',
    description: "This project is a Tv show website where users can view popular Tv shows based on the list categories, and interact by liking and commenting.",

  },
  {
    link: 'https://jacintangwu.github.io/Jaccy-Shopping-Website/',
    source: 'https://github.com/JacintaNgwu/Jaccy-Shopping-Website.git',
    image: './Images/Jaccywebsite.png',
    title: 'Shopping Website',
    language: [ 'HTML', 'CSS', 'JavaScript'],
    techstacks: ['Kanban', 'GitHub', 'BootStrap', 'Terminal', 'Git'],
    button: 'See project',
    description: "This project is a demo website for shopping all kinds of wears inspired by a design by Cindy Shin. It has the home and about pages with various sections and a responsive layout. It is mainly built with HTML, CSS and Vanilla JS.",

  },
  {
    link: 'https://metrics-webapp-vyns.onrender.com/',
    source: 'https://github.com/JacintaNgwu/Metrics-webapp.git',
    image: './Images/Africacountries.png',
    title: 'Metrics Webapp',
    language: ['React', 'Redux', 'CSS', 'JavaScript'],
    button: 'See project',
    description: "This project is a mobile web application used to check a list of metrics (numeric values). It checks the country in Africa and counties details. It consist of home page and details page.",

  },
  {
    link: 'https://jacintangwu.github.io/Leaderboard/dist/',
    source: 'https://github.com/JacintaNgwu/Leaderboard.git',
    image: './Images/leaderboard.png',
    title: 'Leaderboard',
    language: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    button: 'See project',
    description: "This project is a leaderboard website where users can view scores of players and interact by adding their scores. It also has a form for adding new players and preserving the data in the local storage.",

  },
  {
    link: 'https://jacintangwu.github.io/Awesome-Books-ES6/',
    source: 'https://github.com/JacintaNgwu/Awesome-Books-ES6.git',
    image: './Images/book.png',
    title: 'Awesome Books',
    language: ['HTML', 'CSS', 'JavaScript', 'ES6', 'Webpack'],
    button: 'See project',
    description: "This project is an Awesome books website that displays a list of books and allows the addition and removal of books from the list.",
  },
];

//= == Generating cards in project section dynamically===//
const workSection = document.getElementById('work-section');
workSection.innerHTML += myProject.map((project) => `
<div class="Work margin-section">     
<img  class="project-image" src='${project.image}'>

<div class="Text">
<h2 class="project-title">${project.title}</h2>
<ul class="Program">
    ${project.language.map((technology) => `
        <li class="language">${technology}</li>
    `).join('')}
</ul>
<button class="project-button see-project" type="button">${project.button}</button>
</div>
</div>
`).join('');

// = ==Modal===//
const modalDiv = document.querySelector('.modal');
const seeProjectButton = document.querySelectorAll('.see-project');
const cardModal = myProject.map((modal) => `
            <div class="project-card-bg">
            <div class="project-card">
            <button type="button" class="close-project">
            <i class="fa-solid fa-xmark">
            </i>
            </button>
            <div class="modal-image">
            <img src="${modal.image}" alt="">
            </div>
            <div class="project-info">
            <div class="heading-infos">
            <h2 class="project-card-heading">
            ${modal.title}
            </h2>
            <ul class="flex-list">
            ${modal.language.map((technology) => `
            <li class="language">${technology}</li>
            `).join('')}
            </ul>
            </div>
            <div class="project-buttons">
            <a class="button project-button" href="${modal.link}" target="_blank">See Live
            <img src="./Images/Icon-SeeLive.svg/Icon.svg">
            </a>
            <a class="button project-button" href="${modal.source}" target="_blank">See Source
            <img src="./Images/Icon -GitHub.svg">
            </a>
            </div>
            </div>
            <p class="project-description">
            ${modal.description}
            </p>
            </div>
`);
function closeProject() {
  const closeBtn = document.querySelector('.close-project');
  const modalContainer = document.querySelector('.project-card-bg');
  closeBtn.addEventListener('click', () => {
    modalContainer.remove();
  });
}

seeProjectButton.forEach((button, index) => button.addEventListener('click', () => {
  modalDiv.innerHTML += cardModal[index];
  closeProject();
}));

// ===contact form validation ===//
const form = document.querySelector('.form');
const email = document.querySelector('.email');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (event) => {
  const strInput = email.value;
  if (/[A-Z]/.test(strInput)) {
    errorMessage.innerHTML = 'Kindly check if the email is in lowercase';
    errorMessage.classList.add('invalid');
    event.preventDefault();
  }
});

// === Local data storage ===//
form.addEventListener('input', () => {
  const dataStorage = {
    name: document.querySelector('.name').value,
    email: document.querySelector('.email').value,
    message: document.querySelector('.message').value,
  };
  localStorage.setItem('formStorage', JSON.stringify(dataStorage));
});
const getData = JSON.parse(localStorage.getItem('formStorage'));
document.querySelector('.name').value = getData.name;
document.querySelector('.email').value = getData.email;
document.querySelector('.message').value = getData.message;
