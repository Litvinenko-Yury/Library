var btnModal_2 = document.querySelector(".btn-modal-2-open");
console.log("нашел кнопку открыть мо-2");
var popup_2 = document.querySelector(".modal-2__content");
var modalOverlay_2 = document.querySelector(".modal-2__overlay");
var formModal_2 =  document.querySelector(".form--modal-2");
// console.log(formModal_2);
var login = popup_2.querySelector("[name=login]");  /*находим input c name="login" внутри переменной popup_2 (это .modal-2__content, т.е. модальное окно, и записываем в переменную.) */
var password = popup_2.querySelector("[name=password]");  /*находим input c name="password" внутри переменной popup_2 (это .modal-2__content, т.е. модальное окно, и записываем в переменную.) */
var storage = localStorage.getItem("login");  /*взять значение из localStorage по ключу login и записать в переменную storage*/


/*===события по кнопке "открыть модальное окно"===*/
btnModal_2.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("клик на кнопке открыть мо-2");
  popup_2.classList.add("modal-2__content--show");
  modalOverlay_2.classList.add("modal-2__overlay--show");
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
modalOverlay_2.addEventListener("click", function(event) {
  event.preventDefault();
  popup_2.classList.remove("modal-2__content--show");
  modalOverlay_2.classList.remove("modal-2__overlay--show");
  popup_2.classList.remove("modal-2--error");
});

/*===1-Закрыть модальное окно:===*/
/*события по нажатию ESC*/
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup_2.classList.contains("modal-2__content--show")) {
      popup_2.classList.remove("modal-2__content--show");
      modalOverlay_2.classList.remove("modal-2__overlay--show");
      popup_2.classList.remove("modal-2--error");
    }
  }
});

/*===Отловить событие отправки формы submit===*/
formModal_2.addEventListener("submit", function(event) {
  //event.preventDefault();
  popup_2.classList.remove("modal-2--error");
  console.log("удалил .modal-2--error");
  popup_2.offsetWidth = popup_2.offsetWidth; /*костыль*/

  if (!login.value || !password.value) {
    event.preventDefault();
    popup_2.classList.add("modal-2--error");
    console.log("добавил .modal-2--error");

  }  else {
    localStorage.setItem("login", login.value);
  }
});
