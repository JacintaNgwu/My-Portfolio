const openIcon = document.querySelector('.bars');
const closeIcon = document.querySelector('.mark');
const page = document.querySelectorAll('.desktop-menu').length;

function menuList() {
  openIcon.style.display = 'none';
  closeIcon.style.display = 'block';
  document.querySelector('.main-content').style.visibility = 'hidden';
  document.querySelector('.logo').style.visibility = 'hidden';
  document.querySelector('#menu-list').style.display = 'block';
}
document.querySelector('.fa-bars').addEventListener('click', menuList);

function toggleMenu() {
  openIcon.style.display = 'block';
  closeIcon.style.display = 'none';
  document.querySelector('.main-content').style.visibility = 'visible';
  document.querySelector('.logo').style.visibility = 'visible';
  document.querySelector('#menu-list').style.display = 'none';
}
document.querySelector('.mark').addEventListener('click', toggleMenu);

for (let a = 0; a < page; a += 1) {
  document.querySelectorAll('.desktop-menu')[a].addEventListener('click', () => {
    document.querySelector('.main-content').style.visibility = 'visible';
    document.querySelector('.logo').style.visibility = 'visible';
    document.querySelector('#menu-list').style.display = 'none';
    openIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  });
}
