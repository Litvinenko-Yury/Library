/*=============================*/
/*script  modal.js*/
/*author  https://github.com/Litvinenko-Yury*/
/*=============================*/
'use strict'

const modalTrigger = document.querySelectorAll('[data-modal-open]'),
  modalOverlay = document.querySelector('.modal__overlay'),
  modalContetnt = document.querySelector('.modal__content'),
  modalCloseBtn = document.querySelector('[data-modal-close]');

function modalOpen() {
  event.preventDefault();
  modalOverlay.classList.add("modal__overlay--show");
  modalContetnt.classList.add("modal__content--show");
  document.body.style.overflow = 'hidden';
}

function modalClose() {
  event.preventDefault();
  modalOverlay.classList.remove("modal__overlay--show");
  modalContetnt.classList.remove("modal__content--show");
  document.body.style.overflow = ''; // браузер сам подставит дефолтное значение
}

//открыть модал по кнопке с data-modal-open. Передаем функцию.
modalTrigger.forEach((item) => {
  item.addEventListener('click', modalOpen);
});

//закрыть модал, способ-1: по кнопке с data-modal-close. Передаю функцию.
modalCloseBtn.addEventListener('click', modalClose);

//закрыть модал, способ-2:  по клику на темный фон
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    modalClose();
  }
});

//закрыть, способ-3:  модал по ESC
window.addEventListener('keydown', (event) => {
  if (event.code === 'Escape' && modalOverlay.classList.contains('modal__overlay--show')) {
    modalClose();
  }
});
