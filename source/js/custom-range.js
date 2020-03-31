/**================== */
/*created by Yuri Litvinenko  https://litvinenko-yury.pro/*/
/*checking for IE Yuri Volkovsky  https://github.com/YuraVolk*/
/**================== */

var range = document.querySelector(".range");

/*добавляем разметку для визуализации трека и ползунка*/
range.insertAdjacentHTML('beforeend', '<div class="range__wrapper"><div class="range__wrap-inner"><div class="range__track"></div><div class="range__progress"></div></div><div class="range__handle"></div></div>');

/*================*/
var rangeInput = document.querySelector(".range__input");
var rangeInputMin = rangeInput['min'];
var rangeInputMax = rangeInput['max'];
var rangeMinMax = rangeInputMax - rangeInputMin; // это значение нужно, что бы корректно вычислять ширину progress и положение handle при input min отличном от 0.

var rangeProgress = document.querySelector(".range__progress");
var rangeHandle = document.querySelector(".range__handle");

var widthRange = document.querySelector('.range__wrap-inner').offsetWidth; //узнать ширину range
console.log('widthRange = ' + widthRange);
var widthHandle = document.querySelector('.range__handle').offsetWidth; // узнать ширину .range__handle

rangeInput.style.opacity = '0'; // задать стандартному input "opacity: 0;"

rangeProgress.style.width = ((rangeInput.value - rangeInputMin) / rangeMinMax) * widthRange + 'px'; // установить начальную ширину progress/
console.log(((rangeInput.value - rangeInputMin) / rangeMinMax) * widthRange + 'px');

rangeHandle.style.left = (widthRange - (((rangeInput.value - rangeInputMin) / rangeMinMax) * widthRange)    - (widthHandle / 2)) + 'px'; // установить начальную точку handle
console.log((((rangeInput.value - rangeInputMin) / rangeMinMax) * widthRange - (widthHandle / 2)) + 'px');

// Изменить ширину .range__progress и координату handle (каждый раз когда двигаетм ползунок)  oninput/onchange
var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident/.test(ua);

if (isIE) {
  rangeInput.onchange = function () {
    /*output.innerHTML = rangeInput.value;*/
    rangeProgress.style.width = ((1 - ((rangeInput.value - rangeInputMin) / rangeMinMax)) * widthRange) + 'px';
    rangeHandle.style.left = (((rangeInput.value - rangeInputMin) / rangeMinMax) * widthRange - (widthHandle / 2)) + 'px';
  }

} else {
  rangeInput.oninput = function () {
    /*output.innerHTML = this.value;*/

    rangeProgress.style.width = (1 - ((this.value - rangeInputMin) / rangeMinMax)) * widthRange + 'px';
    rangeHandle.style.left = (((this.value - rangeInputMin) / rangeMinMax) * widthRange - (widthHandle / 2)) + 'px';
  }
}
