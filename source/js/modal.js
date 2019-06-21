var btnModal = document.querySelector(".btn-modal-open");
var popup = document.querySelector(".modal__content");
var modalOverlay = document.querySelector(".modal__overlay");
var btnModalClose = document.querySelector(".btn-modal-close");

/*события по кнопке "открыть модальное окно"*/
btnModal.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("клик по .btn-modal-open");
  popup.classList.add("modal__content--show");
  modalOverlay.classList.add("modal__overlay--show");
});

/*1-Закрыть модальное окно:*/
/*события по кнопке "закрыть модальное окно"*/
btnModalClose.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("клик по .btn-modal-close");
  popup.classList.remove("modal__content--show");
  modalOverlay.classList.remove("modal__overlay--show");
});

/*2-Закрыть модальное окно:*/
/*события по клику на затененный фон*/
modalOverlay.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("клик по .modal__overlay");
  popup.classList.remove("modal__content--show");
  modalOverlay.classList.remove("modal__overlay--show");
});

/*3-Закрыть модальное окно:*/
/*события по нажатию ESC*/
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal__content--show")) {
      popup.classList.remove("modal__content--show");
      modalOverlay.classList.remove("modal__overlay--show");
    }
  }
});
