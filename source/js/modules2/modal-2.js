/*script  modal-2.js*/
/*author  https://github.com/Litvinenko-Yury*/

function modal2() {
  const btnModal = document.querySelector(".btn-modal-2-open"),
    popup = document.querySelector(".modal-2__content"),
    modalOverlay = document.querySelector(".modal-2__overlay"),
    formModal = document.querySelector(".form--modal-2"),
    login = popup.querySelector("[name=login]"),  /*находим input c name="login" внутри переменной popup_2 (это .modal-2__content, т.е. модальное окно, и записываем в переменную.) */
    password = popup.querySelector("[name=password]"),  /*находим input c name="password" внутри переменной popup_2 (это .modal-2__content, т.е. модальное окно, и записываем в переменную.) */
    storage = localStorage.getItem("login");  /*взять значение из localStorage по ключу login и записать в переменную storage*/


  /*===события по кнопке "открыть модальное окно"===*/
  btnModal.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-2__content--show");
    modalOverlay.classList.add("modal-2__overlay--show");
    login.focus();  /*установить фокус в найденное поле c name="login"*/

    if (storage) { /*если значение внутри storage - есть*/
      login.value = storage; /*присвоить значение storage полю login*/
      password.focus();
    } else { /* иначе, если в поле login ничего нет, установить фокус в поле login */
      login.focus();
    }
  });

  /*===1-Закрыть модальное окно:===*/
  /*события по клику на затененный фон*/
  modalOverlay.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-2__content--show");
    modalOverlay.classList.remove("modal-2__overlay--show");
    popup.classList.remove("modal-2--error");
  });

  /*===1-Закрыть модальное окно:===*/
  /*события по нажатию ESC*/
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-2__content--show")) {
        popup.classList.remove("modal-2__content--show");
        modalOverlay.classList.remove("modal-2__overlay--show");
        popup.classList.remove("modal-2--error");
      }
    }
  });

  /*===Отловить событие отправки формы submit===*/
  formModal.addEventListener("submit", function (event) {
    //event.preventDefault();
    popup.classList.remove("modal-2--error");
    popup.offsetWidth = popup_2.offsetWidth; /*костыль*/

    if (!login.value || !password.value) {
      event.preventDefault();
      popup.classList.add("modal-2--error");

    } else {
      localStorage.setItem("login", login.value);
    }
  });
}

export default modal2;
