var navMain = document.querySelector('.main-nav');
var serviceMain = document.querySelector('.service-nav')
var navToggle = document.querySelector('.menu-toggle');

navMain.classList.remove('main-nav--no-js');
serviceMain.classList.remove('service-nav--no-js');
navToggle.classList.remove('menu-toggle--no-js');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('menu-toggle--closed')) {

    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    serviceMain.classList.remove('service-nav--closed');
    serviceMain.classList.add('service-nav--opened');
    navToggle.classList.remove('menu-toggle--closed');
    navToggle.classList.add('menu-toggle--opened');

  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    serviceMain.classList.remove('service-nav--opened');
    serviceMain.classList.add('service-nav--closed');
    navToggle.classList.remove('menu-toggle--opened');
    navToggle.classList.add('menu-toggle--closed');
  }
});
