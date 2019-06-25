var burger = document.querySelector(".burger");

/*из переменной burger читаем значение атрибута data-target-id*/
var burgerID = burger.getAttribute("data-target-id");
console.log("нашел data-target-id = " + burgerID);

/*из переменной burger читаем значение атрибута data-target-class-toggle*/
var burgerClassToggle = burger.getAttribute("data-target-class-toggle");
console.log("нашел data-target-class-toggle = " + burgerClassToggle);

/*в документе ищем элемент с нужным id="burger-code"*/
var element = document.getElementById("burger-code");
console.log("нашел элемент с id=burger-code = " + element);

/*=========================*/
/*события по клику на burger*/
burger.addEventListener("click", function (event) {
  event.preventDefault();

  /*добавляем модификатор на burger
      бургер анимируется в крестик
  */
  burger.classList.toggle("burger--close");

  /*для элемента с id="burger-code" добавляем класс .blocks-library__code--shown
      в данном случае реализовано открытие и закрытие элемента с id="burger-code"
  */
  element.classList.toggle(burgerClassToggle);
});
