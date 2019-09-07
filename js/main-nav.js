var burgerNoJS = nav.querySelector(".burger--no-js");
var mainNavList = nav.querySelector(".main-nav__list");
//console.log('нашел внутри nav:');
//console.log(burgerNoJS);

/*=========================*/
/*если JS включен, показыыаем бургер*/
burgerNoJS.classList.remove("burger--no-js");

/*если JS включен, скрываем пункты меню*/
mainNavList.classList.add("main-nav__list--js");
