/*=============================*/
/*script  modal.js*/
/*author  https://github.com/Litvinenko-Yury*/
/*=============================*/
// При необходимости раскомментировать два блока функционала.
/*=============================*/

function modal() {
  const modalTrigger = document.querySelectorAll('[data-modal-open]'),
    modalOverlay = document.querySelector('.modal__overlay'),
    modalContetnt = document.querySelector('.modal__content'),
    modalCloseBtn = document.querySelector('[data-modal-close]');

  function openModal() {
    //event.preventDefault();
    modalOverlay.classList.add("modal__overlay--show");
    modalContetnt.classList.add("modal__content--show");
    document.body.style.overflow = 'hidden';
  }

  function openModalByScroll() {
    //открыть модал если страница доскроллена до конца.
    if ((window.scrollY + document.documentElement.clientHeight) >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', openModalByScroll);//удалить обработчик.
      //Т.е. пользователь один раз долистал до конца, ему показан модал, и второго показа не будет.

      //clearInterval(modalTimerId); // остановить таймер. Т.е. если пользователь нажал на открытие модала, таймер обнулится.
    }
  }

  function closeModal() {
    //event.preventDefault();
    modalOverlay.classList.remove("modal__overlay--show");
    modalContetnt.classList.remove("modal__content--show");
    document.body.style.overflow = ''; // браузер сам подставит дефолтное значение
  }

  //ОТКРЫТЬ модал способ-1: клик на кнопку с data-modal-open. Передаем функцию.
  modalTrigger.forEach((item) => {
    item.addEventListener('click', openModal);
  });

  //ОТКРЫТЬ модал способ-2: если страница доскроллена до конца.
  //window.addEventListener('scroll', openModalByScroll);

  //ОТКРЫТЬ модал способ-3: по таймеру.
  //const modalTimerId = setTimeout(openModal, 3000);

  //ЗАКРЫТЬ модал, способ-1: по кнопке с data-modal-close. Передаю функцию.
  modalCloseBtn.addEventListener('click', closeModal);

  //ЗАКРЫТЬ модал, способ-2:  по клику на темный фон
  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });

  //ЗАКРЫТЬ, способ-3:  модал по ESC
  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modalOverlay.classList.contains('modal__overlay--show')) {
      closeModal();
    }
  });
}

export default modal;
