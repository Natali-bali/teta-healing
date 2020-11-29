let myFunction = function() {
    document.querySelector('.menu-icon__lines').classList.toggle('menu-icon__cross');
    document.querySelector('#navbar').classList.toggle('mobile-menu__active');
}
let menuIcon = document.querySelector('#menu-icon');
  menuIcon.onclick =  myFunction;