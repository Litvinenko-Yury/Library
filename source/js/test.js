'use strict';

let btn = document.querySelector(".test");
console.log("нашел элемент: " + btn);

btn.addEventListener("mouseover", function (event) {
  event.preventDefault();

  //добавляем класс
  btn.classList.toggle("rotate-in-center");
});

btn.addEventListener("mouseout", function (event) {
  event.preventDefault();

  //удаляем класс
  btn.classList.remove("rotate-in-center");
});
