var tab00 = document.querySelector("[href='#tab00']");
console.log("нашел ссылку с #tab00");
console.log(tab00);

var tab01 = document.querySelector("[href='#tab01']");
console.log("нашел ссылку с #tab01");
console.log(tab01);

var tab02 = document.querySelector("[href='#tab02']");
console.log("нашел ссылку с #tab02");
console.log(tab02);

var tab03 = document.querySelector("[href='#tab03']");
console.log("нашел ссылку с #tab03");
console.log(tab03);

/*======*/

var tab00Content = document.querySelector("#tab00");
console.log("нашел блок с  #tab00");
console.log(tab00Content);

var tab01Content = document.querySelector("#tab01");
console.log("нашел блок с  #tab01");
console.log(tab01Content);

var tab02Content = document.querySelector("#tab02");
console.log("нашел блок с  #tab02");
console.log(tab02Content);

var tab03Content = document.querySelector("#tab03");
console.log("нашел блок с  #tab03");
console.log(tab03Content);

/*======*/

var tabsLinkWrap = document.querySelectorAll(".tabs__link-wrap");
console.log("нашел ссылку с .tabs__link-wrap");
console.log(tabsLinkWrap);

var tabsContentItem = document.querySelectorAll(".tabs__content-item");
console.log("нашел блок .tabs__content-item");
console.log(tabsContentItem);


/*=========================*/
/*события по клику на вкладку*/
tab00.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("клик на #tab00");

  /*меняем класс на закладке*/
  for (var i = 0; i < tabsLinkWrap.length; i++) {
    tabsLinkWrap[i].classList.remove("tabs__link-wrap--active");
    console.log("цикл по перебору tabsLinkWrap, удаление .tabs__link-wrap--active");
  };
  tabsLinkWrap[0].classList.add("tabs__link-wrap--active");
  console.log("добавил tabsLinkWrap[0] .tabs__link-wrap--active");

  /*меняем класс на содержимом закладки*/
  for (var i = 0; i < tabsContentItem.length; i++) {
    tabsContentItem[i].classList.remove("tabs__content-item--active");
    console.log("цикл по перебору tabsContentItem, удаляем .tabs__content-item--active");
  };
  tab00Content.classList.add("tabs__content-item--active");
  console.log("tab00Content добавил .tabs__content-item--active");
});

/*=========================*/
/*события по клику на вкладку*/
tab01.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("клик на #tab01");

  /*меняем класс на закладке*/
  for (var i = 0; i < tabsLinkWrap.length; i++) {
    tabsLinkWrap[i].classList.remove("tabs__link-wrap--active");
    console.log("цикл по перебору tabsLinkWrap, удаление .tabs__link-wrap--active");
  };
  tabsLinkWrap[1].classList.add("tabs__link-wrap--active");
  console.log("добавил tabsLinkWrap[1] .tabs__link-wrap--active");

  /*меняем класс на содержимом закладки*/
  for (var i = 0; i < tabsContentItem.length; i++) {
    tabsContentItem[i].classList.remove("tabs__content-item--active");
    console.log("цикл по перебору tabsContentItem");
  };
  tabsContentItem[1].classList.add("tabs__content-item--active");
  console.log(" tabsContentItem[1] .tabs__content-item--active");
});

/*=========================*/
/*события по клику на вкладку*/
tab02.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("клик на #tab02");

  /*меняем класс на закладке*/
  for (var i = 0; i < tabsLinkWrap.length; i++) {
    tabsLinkWrap[i].classList.remove("tabs__link-wrap--active");
    console.log("цикл по перебору tabsLinkWrap");
  };
  tabsLinkWrap[2].classList.add("tabs__link-wrap--active");
  console.log("добавил tabsLinkWrap[2] .tabs__link-wrap--active");

  /*меняем класс на содержимом закладки*/
  for (var i = 0; i < tabsContentItem.length; i++) {
    tabsContentItem[i].classList.remove("tabs__content-item--active");
    console.log("цикл по перебору tabsContentItem");
  };
  tabsContentItem[2].classList.add("tabs__content-item--active");
  console.log(" tabsContentItem[2] .tabs__content-item--active");
});

/*=========================*/
/*события по клику на вкладку*/
tab03.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("клик на #tab03");

  /*меняем класс на закладке*/
  for (var i = 0; i < tabsLinkWrap.length; i++) {
    tabsLinkWrap[i].classList.remove("tabs__link-wrap--active");
    console.log("цикл по перебору tabsLinkWrap");
  };
  tabsLinkWrap[3].classList.add("tabs__link-wrap--active");
  console.log("добавил tabsLinkWrap[3] .tabs__link-wrap--active");

  /*меняем класс на содержимом закладки*/
  for (var i = 0; i < tabsContentItem.length; i++) {
    tabsContentItem[i].classList.remove("tabs__content-item--active");
    console.log("цикл по перебору tabsContentItem");
  };
  tabsContentItem[3].classList.add("tabs__content-item--active");
  console.log(" tabsContentItem[3] .tabs__content-item--active");
});


