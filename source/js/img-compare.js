function initComparisons() {
  var x, i;
  /*найти все элементы с классом "overlay"*/
  x = document.getElementsByClassName("img-comp-overlay");

  for (i = 0; i < x.length; i++) {
    /*один раз для каждого "overlay"-элемента:
    передать элемент "overlay" в качестве параметра при выполнении функции compareImages:
    */
    compareImages(x[i]);
  }

  function compareImages(img) {
    var slider, img, clicked = 0, w, h;

    /*получить width и height элемента img:*/
    w = img.offsetWidth;
    h = img.offsetHeight;

    /*установить width для img = 50%*/
    img.style.width = (w / 2) + "px";

    /*создание ползунка:*/
    /*ползунок добавляется JS-ом, т.к. если нет JS, то и не будет показан ползунок :-)*/
    slider = document.createElement("div");
    slider.setAttribute("class", "img-comp-slider");

    /*вставка slider*/
    img.parentElement.insertBefore(slider, img);

    /*помещаем ползунок посередине:*/
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";

    /*выполнение функции при нажатии кнопки мыши:*/
    slider.addEventListener("mousedown", slideReady);

    /*выполнение функции при отпускании кнопки мыши:*/
    window.addEventListener("mouseup", slideFinish);

    /*выполнение функции при касании (для touch screens):*/
    slider.addEventListener("touchstart", slideReady);

    /*выполнение функции при "отпускании" (для touch screens):*/
    window.addEventListener("touchstop", slideFinish);

    function slideReady(e) {
      /*отменить стандарные действия, которые могут возникнуть при перемещении по изображению:*/
      e.preventDefault();

      /*ползунок сейчас щелкнут и готов к перемещению:*/
      clicked = 1;

      /*выполнение функции при перемещении ползунка:*/
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }

    function slideFinish() {
      /*ползунок больше не нажат:*/
      clicked = 0;
    }

    function slideMove(e) {
      var pos;

      /*если ползунок больше не нажимается, выйти из этой функции:*/
      if (clicked == 0) return false;

      /*получить позицию курсора Х:*/
      pos = getCursorPos(e)

      /*предотвратить расположение слайдера за пределами изображения:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;

      /*выполнить функцию, которая изменит размер наложенного изображения в соответствии с курсором:*/
      slide(pos);
    }

    function getCursorPos(e) {
      var a, x = 0;
      e = e || window.event;

      /*получить Х-позиции изображения:*/
      a = img.getBoundingClientRect();

      /*рассчитать координату курсора ротносительно изображения:*/
      x = e.pageX - a.left;

      /*учесть любую прокрутку страницы:*/
      x = x - window.pageXOffset;
      return x;
    }

    function slide(x) {
      /*изменить размер изображения:*/
      img.style.width = x + "px";

      /*установить ползунок:*/
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}
