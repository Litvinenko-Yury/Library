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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/entry2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/entry2.js":
/*!*****************************!*\
  !*** ./source/js/entry2.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules2_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules2/burger */ "./source/js/modules2/burger.js");
/* harmony import */ var _modules2_custom_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules2/custom-range */ "./source/js/modules2/custom-range.js");
/* harmony import */ var _modules2_img_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules2/img-compare */ "./source/js/modules2/img-compare.js");
/* harmony import */ var _modules2_main_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules2/main-nav */ "./source/js/modules2/main-nav.js");
/* harmony import */ var _modules2_modal_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules2/modal-2 */ "./source/js/modules2/modal-2.js");
/* harmony import */ var _modules2_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules2/modal */ "./source/js/modules2/modal.js");
/* harmony import */ var _modules2_select_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules2/select-radio */ "./source/js/modules2/select-radio.js");
/* harmony import */ var _modules2_slider_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules2/slider-carousel */ "./source/js/modules2/slider-carousel.js");
/* harmony import */ var _modules2_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules2/slider */ "./source/js/modules2/slider.js");
/* harmony import */ var _modules2_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules2/tabs */ "./source/js/modules2/tabs.js");
/* harmony import */ var _modules2_timer_reverse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules2/timer-reverse */ "./source/js/modules2/timer-reverse.js");
/* harmony import */ var _modules2_typewriter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules2/typewriter */ "./source/js/modules2/typewriter.js");
/* harmony import */ var _modules_burger_some__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/burger-some */ "./source/js/modules/burger-some.js");
/* harmony import */ var _modules_scroll_anchor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/scroll-anchor */ "./source/js/modules/scroll-anchor.js");
/* harmony import */ var _modules_to_top__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/to-top */ "./source/js/modules/to-top.js");
/**Entry points for scripts for page2.html */


















window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  Object(_modules2_custom_range__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules2_modal__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_modules2_modal_2__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules2_tabs__WEBPACK_IMPORTED_MODULE_9__["default"])();
  Object(_modules2_burger__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_burger_some__WEBPACK_IMPORTED_MODULE_12__["default"])();
  Object(_modules2_main_nav__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_scroll_anchor__WEBPACK_IMPORTED_MODULE_13__["default"])();
  Object(_modules_to_top__WEBPACK_IMPORTED_MODULE_14__["default"])();

  Object(_modules2_timer_reverse__WEBPACK_IMPORTED_MODULE_10__["default"])();
  Object(_modules2_typewriter__WEBPACK_IMPORTED_MODULE_11__["default"])();
  Object(_modules2_select_radio__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_modules2_slider__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_modules2_slider_carousel__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_modules2_img_compare__WEBPACK_IMPORTED_MODULE_2__["default"])(); // запускающая функция для скрипта сравнения изображения, должна быть ниже всех
});


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


/***/ }),

/***/ "./source/js/modules2/burger.js":
/*!**************************************!*\
  !*** ./source/js/modules2/burger.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*script  burger.js*/
/*author  https://github.com/Litvinenko-Yury*/

/*Скрипт анимации значка бургер:
исходное состояние - бургер;
по клику - анимированное превращение в крестик.*/

function burger() {
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", function (event) {
    event.preventDefault();

    //*добавляем модификатор на burger, бургер анимируется в крестик
    burger.classList.toggle("burger--close");
  });
}

/* harmony default export */ __webpack_exports__["default"] = (burger);


/***/ }),

/***/ "./source/js/modules2/custom-range.js":
/*!********************************************!*\
  !*** ./source/js/modules2/custom-range.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*custom-range.js*/
/*created by Yuri Litvinenko  https://litvinenko-yury.pro/*/
/*checking for IE Yuri Volkovsky  https://github.com/YuraVolk*/

function customRange() {
  const range = document.querySelector('#range');

  /*добавляем разметку для визуализации трека и ползунка*/
  range.insertAdjacentHTML('beforeend', '<div class="range__wrapper"><div class="range__wrap-inner"><div class="range__track"></div><div class="range__progress"></div></div><div class="range__handle"></div></div>');
  /*добавляем разметку отображения значения value*/
  range.insertAdjacentHTML('beforeend', '<div class="range__value">');

  /*================*/
  const rangeInput = document.querySelector(".range__input"),
    rangeInputMin = rangeInput.min,
    rangeInputMax = rangeInput.max,
    rangeMinMax = rangeInputMax - rangeInputMin; // это значение нужно, что бы корректно вычислять ширину progress и положение handle при input min отличном от 0.


  const rangeProgress = document.querySelector(".range__progress"),
    rangeHandle = document.querySelector(".range__handle"),
    output = document.querySelector('.range__value');
  output.innerHTML = rangeInput.value; //вывоим начальное значение value

  const widthRange = document.querySelector('.range__wrap-inner').offsetWidth; //узнать ширину range
  //console.log('widthRange = ' + widthRange);
  const widthHandle = document.querySelector('.range__handle').offsetWidth; // узнать ширину .range__handle

  rangeInput.style.opacity = '0'; // задать стандартному input "opacity: 0;"

  rangeProgress.style.width = ((rangeInput.value - rangeInputMin) / rangeMinMax) * widthRange + 'px'; // установить начальную ширину progress
  //console.log(((rangeInput.value - rangeInputMin) / rangeMinMax) * widthRange + 'px');

  rangeHandle.style.left = (widthRange - (((rangeInput.value - rangeInputMin) / rangeMinMax) * widthRange) - (widthHandle / 2)) + 'px'; // установить начальную точку handle
  //console.log((((rangeInput.value - rangeInputMin) / rangeMinMax) * widthRange - (widthHandle / 2)) + 'px');

  // Изменить ширину .range__progress и координату handle (каждый раз когда двигаетм ползунок)  oninput/onchange
  let ua = window.navigator.userAgent,
    isIE = /MSIE|Trident/.test(ua);

  if (isIE) {
    rangeInput.onchange = function () {
      output.innerHTML = rangeInput.value;
      rangeProgress.style.width = ((1 - ((rangeInput.value - rangeInputMin) / rangeMinMax)) * widthRange) + 'px';
      rangeHandle.style.left = (((rangeInput.value - rangeInputMin) / rangeMinMax) * widthRange - (widthHandle / 2)) + 'px';
    };

  } else {
    rangeInput.oninput = function () {
      output.innerHTML = this.value;
      rangeProgress.style.width = (1 - ((this.value - rangeInputMin) / rangeMinMax)) * widthRange + 'px';
      rangeHandle.style.left = (((this.value - rangeInputMin) / rangeMinMax) * widthRange - (widthHandle / 2)) + 'px';
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (customRange);


/***/ }),

/***/ "./source/js/modules2/img-compare.js":
/*!*******************************************!*\
  !*** ./source/js/modules2/img-compare.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*script  img-compare.js*/

function imgCompare() {
  let x, i;
  /*найти все элементы с классом "overlay"*/
  x = document.getElementsByClassName("img-comp-overlay");

  for (i = 0; i < x.length; i++) {
    /*один раз для каждого "overlay"-элемента:
    передать элемент "overlay" в качестве параметра при выполнении функции compareImages:
    */
    compareImages(x[i]);
  }

  function compareImages(imgCompare) {
    var sliderCompare, imgCompare, clickedCompare = 0, wCompare, hCompare;

    /*получить width и height элемента img:*/
    wCompare = imgCompare.offsetWidth;
    hCompare = imgCompare.offsetHeight;

    /*установить width для imgCompare = 50%*/
    imgCompare.style.width = (wCompare / 2) + "px";

    /*создание ползунка:*/
    /*ползунок добавляется JS-ом, т.к. если нет JS, то и не будет показан ползунок :-)*/
    sliderCompare = document.createElement("div");
    sliderCompare.setAttribute("class", "img-comp-slider");

    /*вставка sliderCompare*/
    imgCompare.parentElement.insertBefore(sliderCompare, imgCompare);

    /*помещаем ползунок посередине:*/
    sliderCompare.style.top = (hCompare / 2) - (sliderCompare.offsetHeight / 2) + "px";
    sliderCompare.style.left = (wCompare / 2) - (sliderCompare.offsetWidth / 2) + "px";

    /*выполнение функции при нажатии кнопки мыши:*/
    sliderCompare.addEventListener("mousedown", slideReady);

    /*выполнение функции при отпускании кнопки мыши:*/
    window.addEventListener("mouseup", slideFinish);

    /*выполнение функции при касании (для touch screens):*/
    sliderCompare.addEventListener("touchstart", slideReady);

    /*выполнение функции при "отпускании" (для touch screens):*/
    window.addEventListener("touchstop", slideFinish);

    function slideReady(e) {
      /*отменить стандарные действия, которые могут возникнуть при перемещении по изображению:*/
      e.preventDefault();

      /*ползунок сейчас щелкнут и готов к перемещению:*/
      clickedCompare = 1;

      /*выполнение функции при перемещении ползунка:*/
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }

    function slideFinish() {
      /*ползунок больше не нажат:*/
      clickedCompare = 0;
    }

    function slideMove(e) {
      let pos;

      /*если ползунок больше не нажимается, выйти из этой функции:*/
      if (clickedCompare == 0) return false;

      /*получить позицию курсора Х:*/
      pos = getCursorPos(e)

      /*предотвратить расположение слайдера за пределами изображения:*/
      if (pos < 0) pos = 0;
      if (pos > wCompare) pos = wCompare;

      /*выполнить функцию, которая изменит размер наложенного изображения в соответствии с курсором:*/
      slide(pos);
    }

    function getCursorPos(e) {
      let a, x = 0;
      e = e || window.event;

      /*получить Х-позиции изображения:*/
      a = imgCompare.getBoundingClientRect();

      /*рассчитать координату курсора относительно изображения:*/
      x = e.pageX - a.left;

      /*учесть любую прокрутку страницы:*/
      x = x - window.pageXOffset;
      return x;
    }

    function slide(x) {
      /*изменить размер изображения:*/
      imgCompare.style.width = x + "px";

      /*установить ползунок:*/
      sliderCompare.style.left = imgCompare.offsetWidth - (sliderCompare.offsetWidth / 2) + "px";
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (imgCompare);


/***/ }),

/***/ "./source/js/modules2/main-nav.js":
/*!****************************************!*\
  !*** ./source/js/modules2/main-nav.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*script  main-nav.js*/
/*author  https://github.com/Litvinenko-Yury*/

/*Скрипт для открытия-закрытия меню.*/

function mainNav() {
  const burgerMainNav = document.querySelector('.main-nav .burger'),
    mainNavList = document.querySelector('.main-nav .main-nav__list');

  /*=========================*/
  /*если JS включен:
  1. показываем бургер*/
  burgerMainNav.classList.remove('burger--no-js');
  /*2. скрываем пункты меню*/
  mainNavList.classList.add('main-nav__list--js');

  /*=========================*/
  /*события по клику на .burger в .main-nav*/
  burgerMainNav.addEventListener('click', function (event) {
    event.preventDefault();

    /*показать .main-nav*/
    mainNavList.classList.toggle('main-nav__list--show');

    /*модифицировать .burger*/
    burgerMainNav.classList.toggle('burger--close');
  });
}

/* harmony default export */ __webpack_exports__["default"] = (mainNav);


/***/ }),

/***/ "./source/js/modules2/modal-2.js":
/*!***************************************!*\
  !*** ./source/js/modules2/modal-2.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (modal2);


/***/ }),

/***/ "./source/js/modules2/modal.js":
/*!*************************************!*\
  !*** ./source/js/modules2/modal.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=============================*/
/*script  modal.js*/
/*author  https://github.com/Litvinenko-Yury*/
/*=============================*/
// При необходимости раскомментировать два блока функционала.
/*=============================*/

function modal() {
  const modalTrigger = document.querySelectorAll('[data-modal-open]'),
    modalOverlay = document.querySelector('.modal__overlay'),
    modalContetnt = document.querySelector('.modal__content'),
    modalCloseBtn = document.querySelector('[data-modal-close]');

  function openModal() {
    //event.preventDefault();
    modalOverlay.classList.add("modal__overlay--show");
    modalContetnt.classList.add("modal__content--show");
    document.body.style.overflow = 'hidden';
  }

  function openModalByScroll() {
    //открыть модал если страница доскроллена до конца.
    if ((window.scrollY + document.documentElement.clientHeight) >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', openModalByScroll);//удалить обработчик.
      //Т.е. пользователь один раз долистал до конца, ему показан модал, и второго показа не будет.

      //clearInterval(modalTimerId); // остановить таймер. Т.е. если пользователь нажал на открытие модала, таймер обнулится.
    }
  }

  function closeModal() {
    //event.preventDefault();
    modalOverlay.classList.remove("modal__overlay--show");
    modalContetnt.classList.remove("modal__content--show");
    document.body.style.overflow = ''; // браузер сам подставит дефолтное значение
  }

  //ОТКРЫТЬ модал способ-1: клик на кнопку с data-modal-open. Передаем функцию.
  modalTrigger.forEach((item) => {
    item.addEventListener('click', openModal);
  });

  //ОТКРЫТЬ модал способ-2: если страница доскроллена до конца.
  //window.addEventListener('scroll', openModalByScroll);

  //ОТКРЫТЬ модал способ-3: по таймеру.
  //const modalTimerId = setTimeout(openModal, 3000);

  //ЗАКРЫТЬ модал, способ-1: по кнопке с data-modal-close. Передаю функцию.
  modalCloseBtn.addEventListener('click', closeModal);

  //ЗАКРЫТЬ модал, способ-2:  по клику на темный фон
  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });

  //ЗАКРЫТЬ, способ-3:  модал по ESC
  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modalOverlay.classList.contains('modal__overlay--show')) {
      closeModal();
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (modal);


/***/ }),

/***/ "./source/js/modules2/select-radio.js":
/*!********************************************!*\
  !*** ./source/js/modules2/select-radio.js ***!
  \********************************************/
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

/***/ "./source/js/modules2/slider-carousel.js":
/*!***********************************************!*\
  !*** ./source/js/modules2/slider-carousel.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./source/js/modules2/slider.js");
/*script  slider-carousel.js*/
/*author  https://github.com/Litvinenko-Yury*/



function sliderCarousel() {
  const slider = document.querySelector('.slider-carousel'),
    slides = document.querySelectorAll('.slider-carousel__list-item'),
    sliderBtnLeft = document.querySelector('#slider-carousel-prev'),
    sliderBtnRight = document.querySelector('#slider-carousel-next'),
    countCurrent = document.querySelector('#slider-carousel-current'),
    countTotal = document.querySelector('#slider-carousel-total'),
    slidesWrapper = document.querySelector('.slider-carousel__list'),
    slidesField = document.querySelector('.slider-carousel__list-inner'),
    width = window.getComputedStyle(slidesWrapper).width;//ширина "окошка", через который будем смотреть на слайд.

  let sliderIndex = 1,
    offset = 0; //счетчик отступа слайдов

  //ф-я установки значения countCurrent
  function setCountCurrent() {
    if (slides.length < 9) {
      countCurrent.textContent = `0${sliderIndex}`;
    } else {
      countCurrent.textContent = `${sliderIndex}`;
    }
  }

  //ф-я установки стидей для точек-индикаторов
  function setStyleDot() {
    dots.forEach(dot => {
      dot.classList.remove('slider-carousel__dot--active');
      dots[sliderIndex - 1].classList.add('slider-carousel__dot--active');
    });
  }


  //инициализация счетчика слайдов
  if (slides.length < 10) {
    countTotal.textContent = `0${slides.length}`;
    countCurrent.textContent = `0${sliderIndex}`;
  } else {
    countTotal.textContent = `${sliderIndex}`;
    countCurrent.textContent = `${sliderIndex}`;
  }

  //установка начальных параметров
  slidesField.style.width = 100 * slides.length + '%'; //задать ширину контейнера для слайдов
  slides.forEach(slide => {
    slide.style.width = width; // задать всем слайдам одинаковую ширину
  });
  slidesField.style.display = 'flex'; //стили, но правильнее в CSS
  slidesField.style.transition = '0.5s all'; //стили, но правильнее в CSS
  slidesWrapper.style.overflow = 'hidden'; //стили, но правильнее в CSS

  /**обработчик вправо*/
  sliderBtnRight.addEventListener('click', () => {
    //в width строка, '500рх', поэтому превращаем строку в число и отсекаем последние два символа

    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`; //смещение на величину offset

    //изменяем счетчик текущего слайда
    if (sliderIndex === slides.length) {
      sliderIndex = 1;
    } else {
      sliderIndex++;
    }

    setCountCurrent();  //изменить значение countCurrent
    setStyleDot(); //изменить значение countCurrent
  });


  /**обработчик влево*/
  sliderBtnLeft.addEventListener('click', () => {
    //в width строка, '500рх', поэтому превращаем строку в число и отсекаем последние два символа

    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`; //смещение на величину offset

    //изменяем счетчик текущего слайда
    if (sliderIndex === 1) {
      sliderIndex = slides.length;
    } else {
      sliderIndex--;
    }

    setCountCurrent(); //изменить значение countCurrent
    setStyleDot(); //изменить значение countCurrent
  });


  /**========*/
  /**навигация для слайдов  -  точки-индикаторы*/
  slider.style.position = 'relative';

  const indicatorsWrap = document.createElement('ol'), // создание элемента
    dots = []; // массив для dot-индикаторов
  indicatorsWrap.classList.add('slider-carousel__indicators');
  slider.append(indicatorsWrap);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li'); // создание элемента
    dot.classList.add('slider-carousel__dot');
    dot.setAttribute('data-slide-to', i + 1);
    indicatorsWrap.append(dot);
    dots.push(dot); //записываем в массив каждую точку-индикатор. Получаем массив точек.
  }
  dots[sliderIndex - 1].classList.add('slider-carousel__dot--active'); // назначение стиля для точки активного слайда

  /**========*/
  /**добавление навигации для слайдов по точкам-индикаторам*/
  dots.forEach(dot => {
    dot.addEventListener('click', (event) => {
      const slideTo = event.target.getAttribute('data-slide-to');
      sliderIndex = slideTo; // изменяем sliderIndex в соответствии с нажатым dot
      offset = +width.slice(0, width.length - 2) * (slideTo - 1); // изменить offset
      slidesField.style.transform = `translateX(-${offset}px)`; // задать смещение слайдов

      dots.forEach(dot => {
        //стили для точек-индикаторов
        dot.classList.remove('slider-carousel__dot--active');
        dots[sliderIndex - 1].classList.add('slider-carousel__dot--active');
      });

      //изменить значение countCurrent
      setCountCurrent();
    });
  });

  window.localStorage;
}

/* harmony default export */ __webpack_exports__["default"] = (sliderCarousel);


/***/ }),

/***/ "./source/js/modules2/slider.js":
/*!**************************************!*\
  !*** ./source/js/modules2/slider.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*script  slider.js*/
/*author  https://github.com/Litvinenko-Yury*/

function slider() {
  const slides1 = document.querySelectorAll('.slider__list-item'),
    sliderBtnLeft1 = document.querySelector('#slider-prev'),
    sliderBtnRight1 = document.querySelector('#slider-next'),
    countCurrent1 = document.querySelector('#slider-current'),
    countTotal1 = document.querySelector('#slider-total');

  let sliderIndex1 = 0;

  function showSlides(index, mass) {
    /*рассчет index на первом и последнем слайде */
    if (index < 0) {
      sliderIndex1 = (mass.length - 1);
    }
    if (index > (mass.length - 1)) {
      sliderIndex1 = 0;
    }

    mass.forEach((item) => { // скрыть все слайды
      item.classList.remove('slider__list-item--active');
    });

    mass[sliderIndex1].classList.add('slider__list-item--active');  // показать нужный слайд
    setCountCurrent1(sliderIndex1);
  }

  function setCountCurrent1(index) {
    if (index < 10) {
      countCurrent1.textContent = `0${index + 1}`;
    } else {
      countCurrent1.textContent = `${index + 1}`;
    }
  }

  function setCountTotal(mass) {
    if (mass.length < 9) {
      countTotal1.textContent = `0${mass.length}`;
    } else {
      countTotal1.textContent = `${mass.length}`;
    }
  }

  showSlides(sliderIndex1, slides1);
  setCountTotal(slides1);
  setCountCurrent1(sliderIndex1);

  sliderBtnLeft1.addEventListener('click', () => {
    sliderIndex1--;
    showSlides(sliderIndex1, slides1);
  });

  sliderBtnRight1.addEventListener('click', () => {
    sliderIndex1++;
    showSlides(sliderIndex1, slides1);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (slider);


/***/ }),

/***/ "./source/js/modules2/tabs.js":
/*!************************************!*\
  !*** ./source/js/modules2/tabs.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*script  tabs.js*/
/*author  https://github.com/Litvinenko-Yury*/

function tabs() {
  const tabsParent = document.querySelector('.tabs__links'), //контейнер с закладками
    tabs = tabsParent.querySelectorAll('.tabs__link'), //коллекция закладок.
    tabsWrap = tabsParent.querySelectorAll('.tabs__link-wrap'), //коллекция оберток закладок.
    tabsContent = document.querySelectorAll('.tabs__content-item'); //коллекция блоков с контентом.

  /*1. - функция установки стилей [i]-закладки*/
  function showTabs(a = 0) {
    tabsWrap.forEach((item) => {
      item.classList.remove('tabs__link-wrap--active');
    });
    tabsWrap[a].classList.add('tabs__link-wrap--active');
  }
  showTabs(); //запускаем функцию с параметром по умолчанию

  /*2. - функция показа-скрытия [i]-блока с контентом*/
  function showTabsContent(a = 0) {
    tabsContent.forEach((item) => {
      item.classList.remove('tabs__content-item--show');
      item.classList.add('tabs__content-item--hide');
    });
    tabsContent[a].classList.add('tabs__content-item--show');
  }
  showTabsContent(); //запускаем функцию с параметром по умолчанию

  //3. - по клику на определенную вкладку, меняем стили на закладках и блоках контента
  tabsParent.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target; //где был клик

    if (target && target.classList.contains('tabs__link')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          showTabs(i); //изменить стили на вкладках
          showTabsContent(i); // изменить стили на блоках контента
        }
      });

      //или можно сделать так:
      // for (let i = 0; i < tabs.length; i++) {
      //     if (target == tabs[i]) {
      //        showTabs(i); //изменить стили на вкладках
      //        showTabsContent(i); // изменить стили на блоках контента
      //        break; //остановить цикл
      //     }
      // }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);





/***/ }),

/***/ "./source/js/modules2/timer-reverse.js":
/*!*********************************************!*\
  !*** ./source/js/modules2/timer-reverse.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*script timer-reverse-v2*/
/*author  https://github.com/Litvinenko-Yury*/

/*Таймер обратного отсчета v2*/

function timerReverse() {
  const deadline = '2020-12-31'; // конечная дата
  //это строка; можем её получить, например от сервера, или от пользователя

  /*эта функция вычисляет разницу между deadlineV2 и текущим временем*/
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date()),
      totalSeconds = Math.floor((total / 1000) % 60), // кол-во целых секунд
      totalMinutes = Math.floor((total / (1000 * 60)) % 60), // кол-во целых минут
      totalHours = Math.floor((total / (1000 * 60 * 60) % 24)), // кол-во целых часов
      totalDays = Math.floor(total / (1000 * 60 * 60 * 24));// кол-во целых дней

    /*Но! Экспортировать несколько переменных из функции просто так не получится, поэтому мы можем экспортировать объект.*/
    return {
      'total': total,
      'days': totalDays,
      'hours': totalHours,
      'minutes': totalMinutes,
      'seconds': totalSeconds
    };
  }

  /*эта функция, добавит 0 к значению, если значение <10*/
  function addZero(num) {
    //Если число в заданных пределах, функция добавит 0 перед цифрой.
    //Это для красоты вывода цифр в таймере.
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  /*эта функция устанавливает таймер на страницу*/
  function setClock(selector, endtime) {
    //находим на странице нужные элементы
    const timer = document.querySelector(selector), // сюда записать найденный блок с нужным таймером
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000); // запись метода setInterval() в переменную, что-бы таймер можно было остановить в дальнейшем.

    updateClock(); // однократный запуск, чтобы не было явления, описанного ниже.
    // Первое обновление таймера setInterval будет через 1сек.
    // Поэтому на странице будет видно сначала цифры таймера из верстки, а через 1сек - правильное значение. Это не хорошо.


    function updateClock() {
      const t = getTimeRemaining(endtime); // в эту переменную записать результат работы функции  getTimeRemaining();

      days.innerHTML = addZero(t.days);
      hours.innerHTML = addZero(t.hours);
      minutes.innerHTML = addZero(t.minutes);
      seconds.innerHTML = addZero(t.seconds);

      if (t.total <= 0) {
        // контроль времени остановки таймера
        clearInterval(timeInterval); // остановить таймер
        days.innerHTML = '00'; //показать 00, вместо отрицательных значений
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
      }
    }
  }

  setClock('#timer-reverse', deadline);
  //вызов функции, которой передаются в качестве аргументов: id блока таймером и переменная deadlineV2 конечной датой
}

/* harmony default export */ __webpack_exports__["default"] = (timerReverse);


/***/ }),

/***/ "./source/js/modules2/typewriter.js":
/*!******************************************!*\
  !*** ./source/js/modules2/typewriter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*script  typewriter.js*/
/*author  https://github.com/Litvinenko-Yury*/

function typewriter() {
  const text = document.querySelector('.typewriter-js__text'),
    textContent = text.textContent,
    sourceTextMass = textContent.split(''); // запись в массив посимвольно
  text.textContent = ''; // удалить текствое содержимое элемента*/
  const newTextMass = []; // создал пустой массив


  /*Функция addContent() вставляет новое содержимое в элемент*/
  let ii = 0; // глобальная переменная
  function addContent() {
    newTextMass.push(sourceTextMass[ii]);//записываю в новый массив элемент из старого массива
    text.textContent = newTextMass.join(''); //преобразование нового массива в строку

    // счётчик и условие исполнения цикла
    ii++;
    if (ii < sourceTextMass.length) {
      setTimeout(() => {
        addContent();
      }, 100);
    }
  }


  /*Функция delContent() удаляет содержимое из элемента*/
  let uu = sourceTextMass.length; // глобальная переменная
  function delContent() {
    newTextMass.pop(); //удалить последний элемент из массива
    text.textContent = newTextMass.join(''); //преобразование нового массива в строку

    // счётчик и условие исполнения цикла
    uu--;
    if (uu >= 0) {
      setTimeout(() => {
        delContent();
      }, 100);
    }
  }

  /*вызов функций addContent() и delContent() в цикле*/
  // при необходимости можно сделать бесконечный цикл
  let сс = 0; // глобальная переменная
  function callFunction() {
    ii = 0; // вернуть значение ii в первоначальное состояние
    addContent();
    setTimeout(() => {
      uu = sourceTextMass.length;  // вернуть значение uu в первоначальное состояние
      delContent();
    }, 4000);

    // счётчик и условие исполнения цикла
    сс++;
    if (сс < 10) {
      setTimeout(() => {
        callFunction();
      }, 8000);
    }
  }

  callFunction(); // одноразовый запуск, далее всё происходит в цикле
}

/* harmony default export */ __webpack_exports__["default"] = (typewriter);


/***/ })

/******/ });
//# sourceMappingURL=bundle2.js.map