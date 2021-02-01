/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/entry.js":
/*!****************************!*\
  !*** ./source/js/entry.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_active_pseudo_to_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/active-pseudo-to-input */ "./source/js/modules/active-pseudo-to-input.js");
/* harmony import */ var _modules_animista__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animista */ "./source/js/modules/animista.js");
/* harmony import */ var _modules_burger_some__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/burger-some */ "./source/js/modules/burger-some.js");
/* harmony import */ var _modules_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form-validation */ "./source/js/modules/form-validation.js");
/* harmony import */ var _modules_scroll_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll-anchor */ "./source/js/modules/scroll-anchor.js");
/* harmony import */ var _modules_select_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/select-radio */ "./source/js/modules/select-radio.js");
/* harmony import */ var _modules_to_top__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/to-top */ "./source/js/modules/to-top.js");
/**Entry points for scripts for page1.html */








window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  Object(_modules_active_pseudo_to_input__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_animista__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_burger_some__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_form_validation__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_scroll_anchor__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_select_radio__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_modules_to_top__WEBPACK_IMPORTED_MODULE_6__["default"])();
});


/***/ }),

/***/ "./source/js/modules/active-pseudo-to-input.js":
/*!*****************************************************!*\
  !*** ./source/js/modules/active-pseudo-to-input.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (activePseudoToInput);


/***/ }),

/***/ "./source/js/modules/animista.js":
/*!***************************************!*\
  !*** ./source/js/modules/animista.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*скрипт для добавления анимаций различных к элементам*/

function animista() {
  const btnAnim = document.querySelector(".animista");

  btnAnim.addEventListener("mouseover", function (event) {
    event.preventDefault();
    btnAnim.classList.add("animista--rotate-in-center");
  });

  btnAnim.addEventListener("mouseout", function (event) {
    event.preventDefault();
    btnAnim.classList.remove("animista--rotate-in-center");
  });
}

/* harmony default export */ __webpack_exports__["default"] = (animista);


/***/ }),

/***/ "./source/js/modules/burger-some.js":
/*!******************************************!*\
  !*** ./source/js/modules/burger-some.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*script  burger-some.js*/
/*author  https://github.com/Litvinenko-Yury*/

/*
1. определяет, на каком бургере был клик;
2. анимирует значек бургера - в "крестик";
3.переключает класс элементу с нужным ID
    */

function burgerSome() {
  document.addEventListener('click', function (event) { /*1. вешаем единый обработчик на элемент document*/
    /*это нужно для того, что-бы много burger-ов можно было ставить в любом месте*/
    let target = event.target; /*2. где был клик?*/
    //console.log(target);

    while (target != document) {
      if (target.classList.contains("burger" || false)) { /* 3. на .burger? то, что надо!*/
        //console.log("клик на бургер");
        target.classList.toggle("burger--close");

        let burgerDataID = target.getAttribute("data-target-id"); /*7. из переменной target читаем значение атрибута data-target-id*/
        //console.log("нашел data-target-id = " + burgerDataID);

        let burgerDataClassToggle = target.getAttribute("data-target-class-toggle"); /*8. из переменной target читаем значение атрибута data-target-class-toggle*/
        //console.log("нашел data-target-class-toggle = " + burgerDataClassToggle);

        let elementClassToggle = document.getElementById(burgerDataID); /* 9. находим элемент с нужным ID*/
        //console.log("нашел элемент с нужным ID = " + elementClassToggle);

        elementClassToggle.classList.toggle(burgerDataClassToggle);/* 10. Элементу с нужным ID меняем класс на переданный в data-target-class-toggle*/

        break;
      } else {/* 4. не на .burger? нет, не подходит... */
        //console.log("промазал");
        target = target.parentNode; /*5. поднимаем target на уровень вверх по иерархии родителей от event.target и выше*/
        //console.log("вывожу target на уровень выше");
        //console.log(target);
      }
    }
    //console.log("вышел из цикла");
  });

  /* 6. Если клик был мимо burger, цикл дойдет вверх до document, и обработчик закончит работу*/
}

/* harmony default export */ __webpack_exports__["default"] = (burgerSome);


/***/ }),

/***/ "./source/js/modules/form-validation.js":
/*!**********************************************!*\
  !*** ./source/js/modules/form-validation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*script  form-validation.js*/
/*author  https://github.com/Litvinenko-Yury*/

/**=Валидация полей формы=*/

function formValid() {
  const validForm = document.querySelector(".form--validation"),
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
  }

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
    }

    /*===Проверка поля TEL===*/
    let validFieldTelValue = validForm.querySelector(".field-text__input--tel").value;
    if (validFieldTelValue.length == 0) {
      // Проверка поля на заполненность.
      // Если поле пустое, отображается пользовательское сообщение о незаполненном поле.
      validMessageTel.innerHTML = "Заполните это поле."; //текст сообщения об ошибке
      validMessageTel.classList.add("field-text__help-text--error"); // стилизация сообщения об ошибке
      event.preventDefault();// И предотвращаем отправку формы путем отмены события
    }

    let validFieldTel = validForm.querySelector(".field-text__input--tel");
    if (!validFieldTel.validity.valid) {
      // Если поле невалидно, отображается пользовательское
      // сообщение об ошибке.
      validMessageTel.innerHTML = "Укажите корректный tel"; //текст сообщения об ошибке
      validMessageTel.classList.add("field-text__help-text--error"); // стилизация сообщения об ошибке
      event.preventDefault();// И предотвращаем отправку формы путем отмены события
    }

    /*===Проверка поля E-MAIL===*/
    let validFieldMailValue = validForm.querySelector(".field-text__input--email").value;
    if (validFieldMailValue.length == 0) {
      // Проверка поля на заполненность.
      // Если поле пустое, отображается пользовательское сообщение о незаполненном поле.
      validMessageMail.innerHTML = "Заполните это поле."; //текст сообщения об ошибке
      validMessageMail.classList.add("field-text__help-text--error"); // стилизация сообщения об ошибке
      event.preventDefault();// И предотвращаем отправку формы путем отмены события
    }

    let validFieldMail = validForm.querySelector(".field-text__input--email");
    if (!validFieldMail.validity.valid) {
      // Если поле невалидно, отображается пользовательское
      // сообщение об ошибке.
      validMessageMail.innerHTML = "Укажите корректный E-MAIL"; //текст сообщения об ошибке
      validMessageMail.classList.add("field-text__help-text--error"); // стилизация сообщения об ошибке
      event.preventDefault();// И предотвращаем отправку формы путем отмены события
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (formValid);


/***/ }),

/***/ "./source/js/modules/scroll-anchor.js":
/*!********************************************!*\
  !*** ./source/js/modules/scroll-anchor.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*author: https://github.com/YuraVolk*/

/*Скрипт плавный скрол к якорю*/

function scrollAnchor() {
  let isScrolling = false;

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
      position = position || 0;
      return this.indexOf(searchString, position) === position;
    };
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  function smoothScrollTo(element, to, duration) {
    isScrolling = true;
    let start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 5;

    let animateScroll = function animateScroll() {
      currentTime += increment;
      let val = easeInOutQuad(currentTime, start, change, duration);
      window.pageYOffset = val;
      // document.documentElement.scrollTop = val;
      window.scroll(0, val);
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
      if (currentTime === duration) {
        isScrolling = false;
      }
    };

    animateScroll();
  }

  function scrollAnimate(el) {
    smoothScrollTo(document.documentElement, el.offsetTop, 400);
  }

  let links = document.getElementsByTagName('a');

  for (let i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("href")) {
      if (links[i].getAttribute("href").startsWith("#")) {

        links[i].addEventListener("click", function (e) {

          let elem = event.target;
          e.preventDefault();

          let el = document.getElementById(elem.getAttribute("href").substring(1));

          if (el != null) {
            scrollAnimate(el);
          }
        });
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (scrollAnchor);


/***/ }),

/***/ "./source/js/modules/select-radio.js":
/*!*******************************************!*\
  !*** ./source/js/modules/select-radio.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*select-radio.js*/
/*created by Yuri Litvinenko  https://litvinenko-yury.pro/*/

function selectRadio() {
  const formRadio = document.querySelector('#select-radio');
  const selectAll = formRadio.querySelectorAll('.field-select');

  /*===ФУНКЦИИ===*/
  /* функция, расставляет data-attr для <label> в селекте*/
  function setDataAttr(select) {
    // передаю сюда отдельный select
    //в этом select найти все input
    let inputs = select.querySelectorAll('.field-select__input'); // найти  коллекцию inputs в селекте

    inputs.forEach((elem) => {
      if (elem.checked) {
        elem.parentElement.lastElementChild.setAttribute('data-state', 'checked'); // находит родителя elem (т.е <li>), далее надит последнего ребенка родителя (т.е <label>), и этому <label> li,добавляет data-attr
      }
      if (elem.disabled) {
        elem.parentElement.lastElementChild.setAttribute('data-state', 'disabled'); // нахоит родителя elem (т.е <li>), далее надит последнего ребенка родителя (т.е <label>), и этому <label> lj,добавляет data-attr
      }
    });
  }

  /* функция для шапки, записать textContent в шапку*/
  function setTextContent(select) {
    // передаю сюда отдельный select
    //в этом select найти все label
    //пройтись циклом по label, и найти тот, который data-state = 'checked';
    //далее записать text.content этого label в text.content шапки

    let labels = select.querySelectorAll('.field-select__label'),
      title = select.querySelector('.field-select__title');

    for (let i = 0; i < labels.length; i++) {
      if (labels[i].dataset.state == 'checked') {
        title.textContent = labels[i].textContent;
        break;
      }
    }
  }

  /* функция для шапки, показать шапку, т.к. шапки изначальнео скрыты*/
  function showTitle(select) {
    // передаю сюда отдельный select
    let title = select.querySelector('.field-select__title');
    title.classList.remove('field-select__title--hide');
  }

  /* функция для контента, показать-скрыть блок контента */
  function contentShowHide(select) {
    // передаю сюда отдельный select
    select.querySelector('.field-select__content').classList.toggle('field-select__content--hide');
  }

  /* функция для конкретной шапки, перекючить стрелку вверx-вниз */
  function titleToggle(target) {
    target.classList.toggle('field-select__title--open'); // вращение псевдоэлемента
  }
  /*===END ФУНКЦИИ===*/

  /*==================*/
  /*==================*/
  selectAll.forEach((item) => {
    /*начальные действия*/
    setDataAttr(item); // расставить data-attr
    setTextContent(item); // textContent от label записать в шапку
    showTitle(item); // шапку показать
    contentShowHide(item); // контент скрыть

    /*действия по клику на шапку*/
    let title = item.querySelector('.field-select__title');
    title.addEventListener('click', (event) => {
      titleToggle(event.target); //шапка - перекючить стрелку вверx-вниз
      contentShowHide(item); // контент скрыть / показать
    });

    /*действия по клику на option*/
    let labels = item.querySelectorAll('.field-select__label');
    labels.forEach((elem) => {
      elem.addEventListener('click', (event) => {
        if (event.target.dataset.state !== 'disabled') {
          title.textContent = event.target.textContent; //записать в шапку textContent от label
          contentShowHide(item); // контент скрыть / показать
        }
      });
    });
  });

  /*Reset шапки*/
  const reset = document.querySelector('.reset');
  reset.addEventListener('click', () => {
    selectAll.forEach((item) => {
      setTextContent(item); //  записать textContent в шапку
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (selectRadio);


/***/ }),

/***/ "./source/js/modules/to-top.js":
/*!*************************************!*\
  !*** ./source/js/modules/to-top.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*script  to-top.js*/
/*author  https://github.com/Litvinenko-Yury*/

/*Ссылка «вверх» в нижнем правом углу страницы.*/

function toTop() {
  const toTop = document.querySelector(".to-top");

  /*При старте скрипта добавить класс .to-top--visible*/
  toTop.classList.add("to-top--no-visible");

  /*объявление функции с добавлением класса .to-top--visible*/
  function addСlassNoVisible() {
    toTop.classList.add("to-top--no-visible");
  }

  /*объявление функции с удалением класса .to-top--visible*/
  function delСlassNoVisible() {
    toTop.classList.remove("to-top--no-visible");
  }

  window.addEventListener("scroll", function () {
    /*в переменную posYVisible записываем число пикселей, на которое документ пролистали в данный момент по вертикали*/
    let posYVisible = window.scrollY;

    if (posYVisible > 500) {
      delСlassNoVisible();
    }
    else {
      addСlassNoVisible();
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (toTop);


/***/ })

/******/ });
//# sourceMappingURL=bundle1.js.map