/*=============================*/
/*script  form-validation.js*/
/*author  https://github.com/Litvinenko-Yury*/
/*=============================*/

'use strict';

/*=============================*/
/*===Валидация полей формы===*/
let validForm = document.querySelector(".form--validation"),
  validFieldName = validForm.querySelector(".field-text__input--name"),
  validFieldTel = validForm.querySelector(".field-text__input--tel"),
  validFieldMail = validForm.querySelector(".field-text__input--email"),
  validMessageName = validForm.querySelector(".field-text__help-text--name"),
  validMessageTel = validForm.querySelector(".field-text__help-text--tel"),
  validMessageMail = validForm.querySelector(".field-text__help-text--email");

/*=================*/
/*для <form> добавляем атрибут novalidate для отключения автоматической валидации браузера, что позволяет скрипту контролировать валидацию. */
/*Однако это не отключает поддержку API ограничений валидации или применения псевдоклассов CSS :valid, :invalid, :in-range и :out-of-range.*/
if (!validForm.hasAttribute("novalidate")) {
  validForm.noValidate = true;
};

/*проверить validFieldName на наличие атрибута required, если он есть, удалить*/
/*т.е. отменяем встроенную проверку формы, что-бы далее делать проверку на JS*/
if (validFieldName.hasAttribute("required")) {
  validFieldName.removeAttribute("required");
}

/*проверить validFieldTel на наличие атрибута required, если он есть, удалить*/
/*т.е. отменяем встроенную проверку формы, что-бы далее делать проверку на JS*/
if (validFieldTel.hasAttribute("required")) {
  validFieldTel.removeAttribute("required");
}

/*проверить validFieldMail на наличие атрибута required, если он есть, удалить*/
/*т.е. отменяем встроенную проверку формы, что-бы далее делать проверку на JS*/
if (validFieldMail.hasAttribute("required")) {
  validFieldMail.removeAttribute("required");
}

/*==============================*/
/*==============================*/
validFieldName.addEventListener("focus", function () {
  // При получении фокуса на элемент формы name удаляем сообщение об ошибке, т.к. пользователь хочет ввести данные заново
  validMessageName.classList.remove("field-text__help-text--error");
  validMessageName.innerHTML = "* - Подсказка под полем - ИМЯ";
});

validFieldTel.addEventListener("focus", function () {
  // При получении фокуса на элемент формы tel удаляем сообщение об ошибке, т.к. пользователь хочет ввести данные заново
  validMessageTel.classList.remove("field-text__help-text--error");
  validMessageTel.innerHTML = "* - Подсказка под полем - TEL в любом формате";
});

validFieldMail.addEventListener("focus", function () {
  // При получении фокуса на элемент формы mail удаляем сообщение об ошибке, т.к. пользователь хочет ввести данные заново
  validMessageMail.classList.remove("field-text__help-text--error");
  validMessageMail.innerHTML = "* - Подсказка под полем - E-MAIL";
});

/*=======================*/
validForm.addEventListener("submit", function (event) {
  /*===Проверка поля NAME===*/
  // Каждый раз, когда пользователь пытается отправить данные, мы проверяем валидность поля name.
  let validFieldNameValue = validForm.querySelector(".field-text__input--name").value;

  if (validFieldNameValue.length == 0) {
    // Проверка поля на заполненность.
    // Если поле пустое, отображается пользовательское сообщение о незаполненном поле.
    validMessageName.innerHTML = "Заполните это поле."; //текст сообщения об ошибке
    validMessageName.classList.add("field-text__help-text--error"); // стилизация сообщения об ошибке
    event.preventDefault(); // И предотвращаем отправку формы путем отмены события
  };

  /*===Проверка поля TEL===*/
  let validFieldTelValue = validForm.querySelector(".field-text__input--tel").value;
  if (validFieldTelValue.length == 0) {
    // Проверка поля на заполненность.
    // Если поле пустое, отображается пользовательское сообщение о незаполненном поле.
    validMessageTel.innerHTML = "Заполните это поле."; //текст сообщения об ошибке
    validMessageTel.classList.add("field-text__help-text--error"); // стилизация сообщения об ошибке
    event.preventDefault();// И предотвращаем отправку формы путем отмены события
  };

  let validFieldTel = validForm.querySelector(".field-text__input--tel");
  if (!validFieldTel.validity.valid) {
    // Если поле невалидно, отображается пользовательское
    // сообщение об ошибке.
    validMessageTel.innerHTML = "Укажите корректный tel"; //текст сообщения об ошибке
    validMessageTel.classList.add("field-text__help-text--error"); // стилизация сообщения об ошибке
    event.preventDefault();// И предотвращаем отправку формы путем отмены события
  };

  /*===Проверка поля E-MAIL===*/
  let validFieldMailValue = validForm.querySelector(".field-text__input--email").value;
  if (validFieldMailValue.length == 0) {
    // Проверка поля на заполненность.
    // Если поле пустое, отображается пользовательское сообщение о незаполненном поле.
    validMessageMail.innerHTML = "Заполните это поле."; //текст сообщения об ошибке
    validMessageMail.classList.add("field-text__help-text--error"); // стилизация сообщения об ошибке
    event.preventDefault();// И предотвращаем отправку формы путем отмены события
  };

  let validFieldMail = validForm.querySelector(".field-text__input--email");
  if (!validFieldMail.validity.valid) {
    // Если поле невалидно, отображается пользовательское
    // сообщение об ошибке.
    validMessageMail.innerHTML = "Укажите корректный E-MAIL"; //текст сообщения об ошибке
    validMessageMail.classList.add("field-text__help-text--error"); // стилизация сообщения об ошибке
    event.preventDefault();// И предотвращаем отправку формы путем отмены события
  };

});
