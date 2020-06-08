'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tabsParent = document.querySelector('.tabs__links'), //контейнер с закладками
    tabs = tabsParent.querySelectorAll('.tabs__link'), //коллекция закладок.
    tabsWrap = tabsParent.querySelectorAll('.tabs__link-wrap'), //коллекция оберток закладок.
    tabsContent = document.querySelectorAll('.tabs__content-item'); //коллекция блоков с контентом.

  /*1. - функция установки стилей [i]-закладки*/
  function showTabs(a = 0) {
    tabsWrap.forEach((item) => {
      item.classList.remove('tabs__link-wrap--active');
    });
    tabsWrap[a].classList.add('tabs__link-wrap--active');
  }
  showTabs(); //запускаем функцию с параметром по умолчанию

  /*2. - функция показа-скрытия [i]-блока с контентом*/
  function showTabsContent(a = 0) {
    tabsContent.forEach((item) => {
      item.classList.remove('tabs__content-item--show');
      item.classList.add('tabs__content-item--hide');
    });
    tabsContent[a].classList.add('tabs__content-item--show');
  }
  showTabsContent(); //запускаем функцию с параметром по умолчанию

  //3. - по клику на определенную вкладку, меняем стили на закладках и блоках контента
  tabsParent.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target; //где был клик

    if (target && target.classList.contains('tabs__link')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          showTabs(i); //изменить стили на вкладках
          showTabsContent(i); // изменить стили на блоках контента
        }
      });

      //или можно сделать так:
      // for (let i = 0; i < tabs.length; i++) {
      //     if (target == tabs[i]) {
      //        showTabs(i); //изменить стили на вкладках
      //        showTabsContent(i); // изменить стили на блоках контента
      //        break; //остановить цикл
      //     }
      // }
    }
  });
});
