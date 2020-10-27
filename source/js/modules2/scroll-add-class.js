/*=============================*/
/*script  scroll-add-class.js*/
/*author  https://github.com/Litvinenko-Yury*/

/*Добавление класса при скроле*/
/*=============================*/

"use strict";

const header = document.querySelector(".page-header");

/*объявление функции с добавлением класса .shadow*/
function addСlassScroll() {
  header.classList.add("shadow");
}

/*объявление функции с удалением класса .shadow*/
function delСlassScroll() {
  header.classList.remove("shadow");
}

window.addEventListener("scroll", function () {
  /*в переменную posY записываем число пикселей, на которое документ пролистали в данный момент по вертикали*/
  let posY = window.scrollY;

  if (posY > 20) {
    addСlassScroll();
  }
  else {
    delСlassScroll();
  }
});
