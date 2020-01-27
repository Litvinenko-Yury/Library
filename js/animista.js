'use strict';

let btnAnim = document.querySelector(".animista");

btnAnim.addEventListener("mouseover", function (event) {
  event.preventDefault();
  btnAnim.classList.add("animista--rotate-in-center");
});

btnAnim.addEventListener("mouseout", function (event) {
  event.preventDefault();
  btnAnim.classList.remove("animista--rotate-in-center");
});
