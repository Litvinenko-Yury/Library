/*=============================*/
/*script  tabs.js*/
/*author  https://github.com/Litvinenko-Yury*/

/*Закладки - табы - tabs*/
/*=============================*/

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let tabsLinks = document.querySelector('.tabs__links'), //контейнер блока с закладками (это ul). На него будем навешивать обратчик события 'click'
    tabsLinkWrap = document.querySelectorAll('.tabs__link-wrap'), // коллекция отдельных вкладок, .tabs__link-wrap (это li)
    tabLink = document.querySelectorAll('.tabs__link'), // коллекция отдельных ссылок, .tabs__link (это ссылки a)
    tabsContentItem = document.querySelectorAll('.tabs__content-item'); // коллекция отдельныx блоков с контентом

  /*ВКЛАДКА=============*/
  /*функция установки стилей ативной вкладки*/
  function setTabsLinkWrap(c) {
    /*c - технический параметр*/
    for (let i = 0; i < tabsLinkWrap.length; i++) {
      /*у всех вкладок .tabs__link-wrap удалить модификатор --active*/
      tabsLinkWrap[i].classList.remove('tabs__link-wrap--active');
    }
    tabsLinkWrap[c].classList.add('tabs__link-wrap--active');
  }
  setTabsLinkWrap(0); //запускаем функцию с параметром [0], т.е. для на .tabs__link-wrap[0] установить --active.

  /*КОНТЕНТ=============*/
  /*функция скрытия контента при запуске скрипта*/
  function hideTabsContent(a) {
    /*a - технический параметр*/
    for (let i = a; i < tabsContentItem.length; i++) {
      tabsContentItem[i].classList.remove('tabs__content-item--show');
      tabsContentItem[i].classList.add('tabs__content-item--hide');
    }
  }
  hideTabsContent(1); //запускаем функцию с параметром 1, т.о. цикл внутри функции начнется не с 0, а с 1, и будут скрыты все .tabs__content-item, кроме .tabs__content-item[0].

  /*КОНТЕНТ=============*/
  /*функция показа определенного контента*/
  function showTabContent(b) {
    /*b - технический параметр. Нужен, чтобы показать тот контент, который необходим*/
    if (tabsContentItem[b].classList.contains('tabs__content-item--hide')) {
      tabsContentItem[b].classList.remove('tabs__content-item--hide');
      tabsContentItem[b].classList.add('tabs__content-item--show');
    }
  }

  /*=============*/
  //по клику на определенную вкладку, меняем стили на вкладках
  //и скрываем/показываем нужные табы
  tabsLinks.addEventListener('click', function (event) {// ловим клики внутри .tabs__links (делегирование событий)
    let target = event.target; //где был клик
    /*например, клик на tab[1]*/

    if (target && target.classList.contains('tabs__link')) { // tab[1] содержит .tabs__link? Если "Да"? тогда:
    event.preventDefault(); //
      for (let i = 0; i < tabLink.length; i++) {
        /*на итерации цикла с i=1...*/
        if (target == tabLink[i]) { /*i=1, условие выполнено...*/
          hideTabsContent(0); //скрываем все табы
          showTabContent(i); //показываем определенный таб; тот, на который был клик
          setTabsLinkWrap(i); //изменить стили на вкладках
          break; //остановить цикл
        }
      }
    }
  });
});
