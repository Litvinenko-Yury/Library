"use strict";
/*Добавление класса при скроле*/

var header = document.querySelector(".page-header");

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
  var posY = window.scrollY;

  if (posY > 20) {
    addСlassScroll();
  }
  else {
    delСlassScroll();
  }
});
