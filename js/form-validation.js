"use strict";

/*=============================*/
/*===Валидация полей формы===*/
var validForm = document.querySelector(".form--validation");
var validFieldName = validForm.querySelector(".field-text__input--name");
var validFieldTel = validForm.querySelector(".field-text__input--tel");
var validFieldText1 = validForm.querySelector(".field-text__input-wrap1");
var validFieldText2 = validForm.querySelector(".field-text__input-wrap2");

//console.log(formValidation);
console.log(validFieldName);
console.log(validFieldTel);
// console.log(fieldText1);
// console.log(fieldText2);

validForm.addEventListener("submit", function (event) {
  //Проверка поля "name" - каждый раз, когда пользователь пытается отправить данные, проверяем правильность заполнения этого поля.
  console.log("отловил submit");

  if (!validFieldName.validity.valid) {
    // Если поле "name" не-валидно, добавляемм класс ошибки:
    console.log("зашел в if");

    validFieldName.classList.add("field-text__input--notvalid");
    //добавляем псевдоэлемент с надписью "заполните поле":
    validFieldText1.classList.add("field-text__input-wrap1--after");

    console.log("отловил submit");

    // И отменяем отправку формы
    event.preventDefault();
  }

  //Проверка поля "tel" - каждый раз, когда пользователь пытается отправить данные, проверяем правильность заполнения этого поля.
  if (!validFieldTel.validity.valid) {
    // Если поле "tel" не-валидно, добавляемм класс ошибки:
    validFieldTel.classList.add("field-text__input--notvalid");
    //добавляем псевдоэлемент с надписью "заполните поле":
    validFieldText2.classList.add("field-text__input-wrap2--after");

    // И отменяем отправку формы
    event.preventDefault();
  }
}, false);

/*==Если поле ввода "name"в фокусе==*/
validFieldName.onfocus = function () {
  if (this.classList.contains("field-text__input--notvalid")) {
    //удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove("field-text__input-notvalid");
    //удаляем псевдоэлемент с "Заполните поле", т.к. пользователь хочет ввести данные заново
    validFieldText1.classList.remove("field-text__input-wrap1--after");
  }
};

/*==Если поле ввода "tel"в фокусе==*/
validFieldTel.onfocus = function () {
  if (this.classList.contains("field-text__input--notvalid")) {
    //удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove("field-text__input--notvalid");
    //удаляем псевдоэлемент с "Заполните поле", т.к. пользователь хочет ввести данные заново
    validFieldText2.classList.remove("field-text__input-wrap2--after");
  }
};
