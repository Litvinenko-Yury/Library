var tab00 = document.querySelector("[href='#tab00']");
var tab01 = document.querySelector("[href='#tab01']");
var tab02 = document.querySelector("[href='#tab02']");
var tab03 = document.querySelector("[href='#tab03']");

/*======*/
var tab00Content = document.querySelector("#tab00");
var tab01Content = document.querySelector("#tab01");
var tab02Content = document.querySelector("#tab02");
var tab03Content = document.querySelector("#tab03");

/*======*/
var tabsLinkWrap = document.querySelectorAll(".tabs__link-wrap");

/*=========================*/
/*события по клику на вкладку*/
tab00.addEventListener("click", function (event) {
  event.preventDefault();

  /*меняем класс на закладке*/
  for (var i = 0; i < tabsLinkWrap.length; i++) {
    tabsLinkWrap[i].classList.remove("tabs__link-wrap--active");
  };
  tabsLinkWrap[0].classList.add("tabs__link-wrap--active");

  /*меняем класс на содержимом закладки*/
  for (var i = 0; i < tabsContentItem.length; i++) {
    tabsContentItem[i].classList.remove("tabs__content-item--active");
  };
  tab00Content.classList.add("tabs__content-item--active");
});

/*=========================*/
/*события по клику на вкладку*/
tab01.addEventListener("click", function (event) {
  event.preventDefault();

  /*меняем класс на закладке*/
  for (var i = 0; i < tabsLinkWrap.length; i++) {
    tabsLinkWrap[i].classList.remove("tabs__link-wrap--active");
  };
  tabsLinkWrap[1].classList.add("tabs__link-wrap--active");

  /*меняем класс на содержимом закладки*/
  for (var i = 0; i < tabsContentItem.length; i++) {
    tabsContentItem[i].classList.remove("tabs__content-item--active");
  };
  tabsContentItem[1].classList.add("tabs__content-item--active");
});

/*=========================*/
/*события по клику на вкладку*/
tab02.addEventListener("click", function (event) {
  event.preventDefault();

  /*меняем класс на закладке*/
  for (var i = 0; i < tabsLinkWrap.length; i++) {
    tabsLinkWrap[i].classList.remove("tabs__link-wrap--active");
  };
  tabsLinkWrap[2].classList.add("tabs__link-wrap--active");

  /*меняем класс на содержимом закладки*/
  for (var i = 0; i < tabsContentItem.length; i++) {
    tabsContentItem[i].classList.remove("tabs__content-item--active");
  };
  tabsContentItem[2].classList.add("tabs__content-item--active");
});

/*=========================*/
/*события по клику на вкладку*/
tab03.addEventListener("click", function (event) {
  event.preventDefault();

  /*меняем класс на закладке*/
  for (var i = 0; i < tabsLinkWrap.length; i++) {
    tabsLinkWrap[i].classList.remove("tabs__link-wrap--active");
  };
  tabsLinkWrap[3].classList.add("tabs__link-wrap--active");

  /*меняем класс на содержимом закладки*/
  for (var i = 0; i < tabsContentItem.length; i++) {
    tabsContentItem[i].classList.remove("tabs__content-item--active");
  };
  tabsContentItem[3].classList.add("tabs__content-item--active");
});


