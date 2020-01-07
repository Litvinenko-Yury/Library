/*=============================*/
/*script  img-compare.js*/
/*=============================*/
'use strict'

function initComparisons() {
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
