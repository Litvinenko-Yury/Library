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

export default slider;
