/*=============================*/
/*script  burger.js*/
/*author  https://github.com/Litvinenko-Yury*/

/*Скрипт анимации значка бургер:
исходное состояние - бургер;
по клику - анимированное превращение в крестик.*/
/*=============================*/

'use strict';

let burger = document.querySelector(".burger");

/*=========================*/
/*события по клику на burger*/
burger.addEventListener("click", function (event) {
  event.preventDefault();

  /*добавляем модификатор на burger
      бургер анимируется в крестик
  */
  burger.classList.toggle("burger--close");
});
