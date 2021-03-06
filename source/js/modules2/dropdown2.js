/*dropdown2.js*/
/*created by Yuri Litvinenko  https://litvinenko-yury.pro/*/


function dropdown2() {
  const mainItems = document.querySelectorAll('.dropdown2__item');

  mainItems.forEach(element => {
    const mainLink = element.querySelector('.dropdown2__link'),
      subList = element.querySelector('.dropdown2__list-submenu'),
      subLinks = subList.querySelectorAll('.dropdown2__link-submenu');

    mainLink.addEventListener('click', (event) => {
      event.preventDefault(); // отменить стандартное поведение
      subList.classList.toggle('dropdown2__list-submenu--show'); // открыть/закрыть список
      mainLink.classList.toggle('dropdown2__link--show'); //изменить border-radius
      mainLink.classList.toggle('dropdown2__link--rotate-pseudo'); //по клику вращать псевдоэлемент
    });

    //по клику на subLink закрыть основное меню.
    subLinks.forEach(element => {
      element.addEventListener('click', () => {
        // что сделать по клику на внутр ссылку
        subList.classList.toggle('dropdown2__list-submenu--show'); // открыть/закрыть список
        mainLink.classList.toggle('dropdown2__link--show'); //изменить border-radius
        mainLink.classList.toggle('dropdown2__link--rotate-pseudo'); //по клику вращать
      });
    });

    function setZindex() {
      let i = mainItems.length;

      mainItems.forEach(item => {
        item.style.zIndex = i;
        i--;
      });
    }

    setZindex();
  });
}

export default dropdown2;
