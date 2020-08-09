/*=============================*/
/*script  slider-carousel.js*/
/*author  https://github.com/Litvinenko-Yury*/
/*=============================*/

'use strict';

const sliderCrsl = document.querySelector('.slider-carousel'),
  slidesCrsl = document.querySelectorAll('.slider-carousel__list-item'),
  sliderBtnLeftCrsl = document.querySelector('#slider-carousel-prev'),
  sliderBtnRightCrsl = document.querySelector('#slider-carousel-next'),
  countCurrentCrsl = document.querySelector('#slider-carousel-current'),
  countTotalCrsl = document.querySelector('#slider-carousel-total'),
  slidesWrapperCrsl = document.querySelector('.slider-carousel__list'),
  slidesFieldCrsl = document.querySelector('.slider-carousel__list-inner'),
  widthCrsl = window.getComputedStyle(slidesWrapperCrsl).width;//ширина "окошка", через который будем смотреть на слайд.

console.log(widthCrsl);
console.log(slidesCrsl.length);


let sliderIndexCrsl = 1,
  offsetCrsl = 0; //счетчик отступа слайдов

//ф-я установки значения countCurrent
function setCountCurrentCrsl() {
  if (slidesCrsl.length < 9) {
    countCurrentCrsl.textContent = `0${sliderIndexCrsl}`;
  } else {
    countCurrentCrsl.textContent = `${sliderIndexCrsl}`;
  }
}

//ф-я установки стидей для точек-индикаторов
function setStyleDot() {
  dots.forEach(dot => {
    dot.classList.remove('slider-carousel__dot--active');
    dots[sliderIndexCrsl - 1].classList.add('slider-carousel__dot--active');
  });
}


//инициализация счетчика слайдов
if (slidesCrsl.length < 10) {
  countTotalCrsl.textContent = `0${slidesCrsl.length}`;
  countCurrentCrsl.textContent = `0${sliderIndexCrsl}`;
} else {
  countTotalCrsl.textContent = `${sliderIndexCrsl}`;
  countCurrentCrsl.textContent = `${sliderIndexCrsl}`;
}

//установка начальных параметров
slidesFieldCrsl.style.width = 100 * slidesCrsl.length + '%'; //задать ширину контейнера для слайдов
slidesCrsl.forEach(slide => {
  slide.style.width = widthCrsl; // задать всем слайдам одинаковую ширину
});
slidesFieldCrsl.style.display = 'flex'; //стили, но правильнее в CSS
slidesFieldCrsl.style.transition = '0.5s all'; //стили, но правильнее в CSS
slidesWrapperCrsl.style.overflow = 'hidden'; //стили, но правильнее в CSS

/**обработчик вправо*/
sliderBtnRightCrsl.addEventListener('click', () => {
  //в widthCrsl строка, '500рх', поэтому превращаем строку в число и отсекаем последние два символа

  if (offsetCrsl == +widthCrsl.slice(0, widthCrsl.length - 2) * (slidesCrsl.length - 1)) {
    offsetCrsl = 0;
  } else {
    offsetCrsl += +widthCrsl.slice(0, widthCrsl.length - 2);
  }
  slidesFieldCrsl.style.transform = `translateX(-${offsetCrsl}px)`; //смещение на величину offsetCrsl

  //изменяем счетчик текущего слайда
  if (sliderIndexCrsl === slidesCrsl.length) {
    sliderIndexCrsl = 1;
  } else {
    sliderIndexCrsl++;
  }

  setCountCurrentCrsl();  //изменить значение countCurrent
  setStyleDot(); //изменить значение countCurrent
});


/**обработчик влево*/
sliderBtnLeftCrsl.addEventListener('click', () => {
  //в widthCrsl строка, '500рх', поэтому превращаем строку в число и отсекаем последние два символа

  if (offsetCrsl == 0) {
    offsetCrsl = +widthCrsl.slice(0, widthCrsl.length - 2) * (slidesCrsl.length - 1);
  } else {
    offsetCrsl -= +widthCrsl.slice(0, widthCrsl.length - 2);
  }
  slidesFieldCrsl.style.transform = `translateX(-${offsetCrsl}px)`; //смещение на величину offsetCrsl

  //изменяем счетчик текущего слайда
  if (sliderIndexCrsl === 1) {
    sliderIndexCrsl = slidesCrsl.length;
  } else {
    sliderIndexCrsl--;
  }

  setCountCurrentCrsl(); //изменить значение countCurrent
  setStyleDot(); //изменить значение countCurrent
});


/**========*/
/**навигация для слайдов  -  точки-индикаторы*/
sliderCrsl.style.position = 'relative';

const indicatorsWrap = document.createElement('ol'), // создание элемента
  dots = []; // массив для dot-индикаторов
indicatorsWrap.classList.add('slider-carousel__indicators');
sliderCrsl.append(indicatorsWrap);

for (let i = 0; i < slidesCrsl.length; i++) {
  const dot = document.createElement('li'); // создание элемента
  dot.classList.add('slider-carousel__dot');
  dot.setAttribute('data-slide-to', i + 1);
  indicatorsWrap.append(dot);
  dots.push(dot); //записываем в массив каждую точку-индикатор. Получаем массив точек.
}
dots[sliderIndexCrsl - 1].classList.add('slider-carousel__dot--active'); // назначение стиля для точки активного слайда

/**========*/
/**добавление навигации для слайдов по точкам-индикаторам*/
dots.forEach(dot => {
  dot.addEventListener('click', (event) => {
    const slideTo = event.target.getAttribute('data-slide-to');
    sliderIndexCrsl = slideTo; // изменяем sliderIndex в соответствии с нажатым dot
    offsetCrsl = +widthCrsl.slice(0, widthCrsl.length - 2) * (slideTo - 1); // изменить offset
    slidesFieldCrsl.style.transform = `translateX(-${offsetCrsl}px)`; // задать смещение слайдов

    dots.forEach(dot => {
      //стили для точек-индикаторов
      dot.classList.remove('slider-carousel__dot--active');
      dots[sliderIndexCrsl - 1].classList.add('slider-carousel__dot--active');
    });

    //изменить значение countCurrent
    setCountCurrentCrsl();
  });
});
