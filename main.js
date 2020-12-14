const button = document.querySelector('#hamburger');
let menu = document.querySelector('#overlay');
let body = document.querySelector('body');
let menuLink = document.querySelector('.menu__list');


let toggleMenu = function (e) {
  button.classList.toggle('hamburger--active');
  menu.classList.toggle('menu-overlay');
  body.classList.toggle('body-active-menu');
}

button.addEventListener('click', toggleMenu);
menuLink.addEventListener('click', function (e) {
  let target = e.target;
  target.addEventListener('click', function (a) {
    body.classList.toggle('body-active-menu');
  })
  console.log(target);
});