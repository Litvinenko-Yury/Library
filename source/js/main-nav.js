/*=============================*/
/*script  main-nav.js*/
/*author  https://github.com/Litvinenko-Yury*/
/*=============================*/
'use strict'

let burgerNoJS = nav.querySelector(".burger--no-js");
let mainNavList = nav.querySelector(".main-nav__list");

/*=========================*/
/*если JS включен:
1. показываем бургер*/
burgerNoJS.classList.remove("burger--no-js");

/*2. скрываем пункты меню*/
mainNavList.classList.add("main-nav__list--js");

/*
Если бургеров несколько, то остальное делает скрипт burgers-some.js с помощью:
a)  data-target-class-toggle у <button class="burger";
b)  ul class="main-nav__list" id="main-nav__list" у <ul class="main-nav__list">
*/
/*=========================*/


/*=========================*/
/*если бургер один:
- из разметки можно(и нужно) удалить
a)  data-target-class-toggle у <button class="burger";
b)  ul class="main-nav__list" id="main-nav__list" у <ul class="main-nav__list">

- примерный код для окрытия/закрытия меню такой: */

//найти .main-nav__list--js
//let navMainUL = document.querySelector('.main-nav__list--js');

//у найденного элемента переключить класс .main-nav__list--show
//navMainUL.classList.toggle("main-nav__list--show");
