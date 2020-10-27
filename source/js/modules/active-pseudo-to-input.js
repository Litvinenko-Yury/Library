/*script  active-pseudo-to-input.js*/
/*author  https://github.com/Litvinenko-Yury*/

//Скрипт для input - добавляет/убирает символ "*" в поле input

function activePseudoToInput() {
  const fieldTextInputWrap1 = document.querySelector('.field-text__input-wrap--1'),
    fieldTextInputWrap2 = document.querySelector('.field-text__input-wrap--2'),
    fieldTextInputWrap3 = document.querySelector('.field-text__input-wrap--3');

  /*добавить символ "*" в поле input, перед placeholder*/
  fieldTextInputWrap1.classList.add("field-text__input-wrap-pseudo--1");
  fieldTextInputWrap2.classList.add("field-text__input-wrap-pseudo--1");
  fieldTextInputWrap3.classList.add("field-text__input-wrap-pseudo--1");


  /*функция, навешивающая focus/blur на  .field-text__input-wrap--1/--2 и т.д.*/
  function checkInputEmtpiness(inputClass, inputWrapClass, pseudoClass) {
    let input = document.querySelector("." + inputClass),
      inputWrap = document.querySelector("." + inputWrapClass);

    input.onfocus = function () {
      inputWrap.classList.remove(pseudoClass);
    };

    input.onblur = function () {
      if (input.value.length === 0) {
        inputWrap.classList.add(pseudoClass);
      }
    };
  }

  checkInputEmtpiness("field-text__input--text-ape", "field-text__input-wrap--1", "field-text__input-wrap-pseudo--1");

  checkInputEmtpiness("field-text__input--tel-ape", "field-text__input-wrap--2", "field-text__input-wrap-pseudo--1");

  checkInputEmtpiness("field-text__input--email-ape", "field-text__input-wrap--3", "field-text__input-wrap-pseudo--1");
  /*-ape - это аббревиатура для active pseudo element;
  .field-text__input--text-ape,
  .field-text__input--tel-ape,
  .field-text__input--email-ape - нужны для отлова focus/blur на соответствующих input
  */
}

export default activePseudoToInput;
