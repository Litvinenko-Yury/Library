/*=============================*/
/*script  slider.js*/
/*author  https://github.com/Litvinenko-Yury*/
/*=============================*/

'use strict';

const slides = document.querySelectorAll('.slider__list-item'),
  sliderBtnLeft = document.querySelector('#slider-prev'),
  sliderBtnRight = document.querySelector('#slider-next'),
  countCurrent = document.querySelector('#slider-current'),
  countTotal = document.querySelector('#slider-total');

let sliderIndex = 0;

function showSlides(index, mass) {
  /*рассчет index на первом и последнем слайде */
  if (index < 0) {
    sliderIndex = (mass.length - 1);
  }
  if (index > (mass.length - 1)) {
    sliderIndex = 0;
  }

  mass.forEach((item) => { // скрыть все слайды
    item.classList.remove('slider__list-item--active');
  });

  mass[sliderIndex].classList.add('slider__list-item--active');  // показать нужный слайд
  setCountCurrent(sliderIndex);
}

function setCountCurrent(index) {
  if (index < 10) {
    countCurrent.textContent = `0${index + 1}`;
  } else {
    countCurrent.textContent = `${index + 1}`;
  }
}

function setCountTotal(mass) {
  if (mass.length < 9) {
    countTotal.textContent = `0${mass.length}`;
  } else {
    countTotal.textContent = `${mass.length}`;
  }
}

showSlides(sliderIndex, slides);
setCountTotal(slides);
setCountCurrent(sliderIndex);

sliderBtnLeft.addEventListener('click', () => {
  sliderIndex--;
  showSlides(sliderIndex, slides);
});

sliderBtnRight.addEventListener('click', () => {
  sliderIndex++;
  showSlides(sliderIndex, slides);
});
