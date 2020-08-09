/*=============================*/
/*script  slider-carousel.js*/
/*author  https://github.com/Litvinenko-Yury*/
/*=============================*/

'use strict';

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
