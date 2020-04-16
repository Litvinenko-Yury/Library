/*=============================*/
/*script  modal.js*/
/*author  https://github.com/Litvinenko-Yury*/
/*=============================*/
'use strict'


let btnModal = document.querySelector(".btn-modal-open"),
  popup = document.querySelector(".modal__content"),
  modalOverlay = document.querySelector(".modal__overlay"),
  btnModalClose = document.querySelector(".btn-modal-close");

/*события по кнопке "открыть модальное окно"*/
btnModal.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal__content--show");
  modalOverlay.classList.add("modal__overlay--show");
});

/*1-Закрыть модальное окно:*/
/*события по кнопке "закрыть модальное окно"*/
btnModalClose.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal__content--show");
  modalOverlay.classList.remove("modal__overlay--show");
});

/*2-Закрыть модальное окно:*/
/*события по клику на затененный фон*/
modalOverlay.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal__content--show");
  modalOverlay.classList.remove("modal__overlay--show");
});

/*3-Закрыть модальное окно:*/
/*события по нажатию ESC*/
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal__content--show")) {
      popup.classList.remove("modal__content--show");
      modalOverlay.classList.remove("modal__overlay--show");
    }
  }
});
