var burger = document.querySelector(".burger");

/*=========================*/
/*события по клику на burger*/
burger.addEventListener("click", function (event) {
  event.preventDefault();

  /*добавляем модификатор на burger
      бургер анимируется в крестик
  */
  burger.classList.toggle("burger--close");
});
