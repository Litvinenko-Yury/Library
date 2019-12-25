"use strict";
/*Ссылка "вверх"*/

var toTop = document.querySelector(".to-top");

/*объявление функции с добавлением класса .to-top--visible*/
function addСlassNoVisible() {
  toTop.classList.add("to-top--no-visible");
}

/*объявление функции с удалением класса .to-top--visible*/
function delСlassNoVisible() {
  toTop.classList.remove("to-top--no-visible");
}

/*добавить класс .to-top--visible*/
toTop.classList.add("to-top--no-visible");

window.addEventListener("scroll", function () {
  /*в переменную posYVisible записываем число пикселей, на которое документ пролистали в данный момент по вертикали*/
  var posYVisible = window.scrollY;

  if (posYVisible > 500) {
    delСlassNoVisible();
  }
  else {
    addСlassNoVisible();
  }
});
