/*скрипт для добавления анимаций различных к элементам*/

'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const btnAnim = document.querySelector(".animista");

  btnAnim.addEventListener("mouseover", function (event) {
    event.preventDefault();
    btnAnim.classList.add("animista--rotate-in-center");
  });

  btnAnim.addEventListener("mouseout", function (event) {
    event.preventDefault();
    btnAnim.classList.remove("animista--rotate-in-center");
  });
});
