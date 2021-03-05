/*dropdown1.js*/
/*created by Yuri Litvinenko  https://litvinenko-yury.pro/*/


function dropdown1() {
  const dropdown1All = document.querySelectorAll('.dropdown1');

  dropdown1All.forEach((item) => {
    const btn = item.querySelector('.dropdown1__btn'),
      list = item.querySelector('.dropdown1__list'),
      links = list.querySelectorAll('.dropdown1__link');

    /*действия по клику на кнопку*/
    btn.addEventListener('click', () => {
      list.classList.toggle('dropdown1__list--show'); //открыть/закрыть список
    });

    links.forEach((element) => {
      element.addEventListener('click', (event) => {
        btn.textContent = event.target.textContent; // записать содержимое в кнопку
        list.classList.toggle('dropdown1__list--show'); //закрыть список
      });
    });
  });
}

export  default dropdown1;
