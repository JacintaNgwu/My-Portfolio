const myProject = [
  {
    image: './Images/green-snapshot.svg',
    title: 'Keeping track of hundreds of components',
    language: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    button: 'See project',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",

  },
  {
    image: './Images/Snapshot.svg',
    title: 'Multi-Post Stories',
    language: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    button: 'See project',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",

  },
  {
    image: './Images/Snapshot.svg',
    title: 'Keeping track of hundreds of components',
    language: ['GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    button: 'See project',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",

  },
  {
    image: './Images/green-snapshot.svg',
    title: 'Multi-Post Stories',
    language: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    button: 'See project',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",

  },
  {
    image: './Images/Snapshot.svg',
    title: 'Multi-Post Stories',
    language: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    button: 'See project',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",

  },
  {
    image: './Images/green-snapshot.svg',
    title: 'Multi-Post Stories',
    language: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    button: 'See project',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },

];

//= == Generating cards in project section dynamically===//
const workSection = document.getElementById('work-section');
workSection.innerHTML += myProject.map((project) => `
<div class="Work margin-section">     
<img  class="project-image" src='${project.image}'>

<div class="Text">
<h2 class="project-title">
  ${project.title} <br />
  Gain+Glory
</h2>
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
            <a class="button project-button" href="">See Live
            <img src="./Images/Icon-SeeLive.svg/Icon.svg">
            </a>
            <a class="button project-button" href="">See Source
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