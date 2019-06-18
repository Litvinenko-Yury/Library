var btnModal = document.querySelector(".btn-modal-open");
var popup = document.querySelector(".modal__content");
var modalBg = document.querySelector(".modal__bg");
var btnModalClose = document.querySelector(".btn-modal-close");

/*события по кнопке "открыть модальное окно"*/
btnModal.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("клик по .btn-modal-open");
  popup.classList.add("modal__content--show");
  modalBg.classList.add("modal__bg--show");
});

/*1-Закрыть модальное окно:*/
/*события по кнопке "закрыть модальное окно"*/
btnModalClose.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("клик по .btn-modal-close");
  popup.classList.remove("modal__content--show");
  modalBg.classList.remove("modal__bg--show");
});

/*2-Закрыть модальное окно:*/
/*события по клику на затененный фон*/
modalBg.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("клик по .modal__bg");
  popup.classList.remove("modal__content--show");
  modalBg.classList.remove("modal__bg--show");
});

/*3-Закрыть модальное окно:*/
/*события по нажатию ESC*/
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal__content--show")) {
      popup.classList.remove("modal__content--show");
      modalBg.classList.remove("modal__bg--show");
    }
  }
});
