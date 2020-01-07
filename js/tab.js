/*=============================*/
/*script  tab.js*/
/*author  https://github.com/Litvinenko-Yury*/

/*Закладки - табы - tabs*/
/*=============================*/

'use strict'

let tab00 = document.querySelector("[href='#tab00']");
let tab01 = document.querySelector("[href='#tab01']");
let tab02 = document.querySelector("[href='#tab02']");
let tab03 = document.querySelector("[href='#tab03']");

/*======*/
let tab00Content = document.querySelector("#tab00");
let tab01Content = document.querySelector("#tab01");
let tab02Content = document.querySelector("#tab02");
let tab03Content = document.querySelector("#tab03");

/*======*/
let tabsLinkWrap = document.querySelectorAll(".tabs__link-wrap");
let tabsContentItem = document.querySelectorAll(".tabs__content-item");

/*=========================*/
/*события по клику на вкладку*/
tab00.addEventListener("click", function (event) {
  event.preventDefault();

  /*меняем класс на закладке*/
  for (let i = 0; i < tabsLinkWrap.length; i++) {
    tabsLinkWrap[i].classList.remove("tabs__link-wrap--active");
  };
  tabsLinkWrap[0].classList.add("tabs__link-wrap--active");

  /*меняем класс на содержимом закладки*/
  for (let i = 0; i < tabsContentItem.length; i++) {
    tabsContentItem[i].classList.remove("tabs__content-item--active");
  };
  tab00Content.classList.add("tabs__content-item--active");
});

/*=========================*/
/*события по клику на вкладку*/
tab01.addEventListener("click", function (event) {
  event.preventDefault();

  /*меняем класс на закладке*/
  for (let i = 0; i < tabsLinkWrap.length; i++) {
    tabsLinkWrap[i].classList.remove("tabs__link-wrap--active");
  };
  tabsLinkWrap[1].classList.add("tabs__link-wrap--active");

  /*меняем класс на содержимом закладки*/
  for (let i = 0; i < tabsContentItem.length; i++) {
    tabsContentItem[i].classList.remove("tabs__content-item--active");
  };
  tabsContentItem[1].classList.add("tabs__content-item--active");
});

/*=========================*/
/*события по клику на вкладку*/
tab02.addEventListener("click", function (event) {
  event.preventDefault();

  /*меняем класс на закладке*/
  for (let i = 0; i < tabsLinkWrap.length; i++) {
    tabsLinkWrap[i].classList.remove("tabs__link-wrap--active");
  };
  tabsLinkWrap[2].classList.add("tabs__link-wrap--active");

  /*меняем класс на содержимом закладки*/
  for (let i = 0; i < tabsContentItem.length; i++) {
    tabsContentItem[i].classList.remove("tabs__content-item--active");
  };
  tabsContentItem[2].classList.add("tabs__content-item--active");
});

/*=========================*/
/*события по клику на вкладку*/
tab03.addEventListener("click", function (event) {
  event.preventDefault();

  /*меняем класс на закладке*/
  for (let i = 0; i < tabsLinkWrap.length; i++) {
    tabsLinkWrap[i].classList.remove("tabs__link-wrap--active");
  };
  tabsLinkWrap[3].classList.add("tabs__link-wrap--active");

  /*меняем класс на содержимом закладки*/
  for (let i = 0; i < tabsContentItem.length; i++) {
    tabsContentItem[i].classList.remove("tabs__content-item--active");
  };
  tabsContentItem[3].classList.add("tabs__content-item--active");
});


