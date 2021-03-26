/**Entry points for scripts for page2.html */
import burger from './modules2/burger';
import customRange from './modules2/custom-range';
import imgCompare from './modules2/img-compare';
import mainNav from './modules2/main-nav';
import modal2 from './modules2/modal-2';
import modal from './modules2/modal';

import sliderCarousel from './modules2/slider-carousel';
import slider from './modules2/slider';
import sliderCarouselV3 from './modules2/slider-carousel-v3';

import tabs from './modules2/tabs';
import timerReverse from './modules2/timer-reverse';
import typewriter from './modules2/typewriter';
import videoPlayerCustom from './modules2/video-player-custom';
import dropdown1 from './modules2/dropdown1';
import dropdown2 from './modules2/dropdown2';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  burger();
  imgCompare(); // запускающая функция для скрипта сравнения изображения, должна быть ниже всех
  customRange();
  mainNav();
  modal2();
  modal();
  sliderCarousel();
  slider();
  sliderCarouselV3();
  tabs();
  timerReverse();
  typewriter();
  videoPlayerCustom();
  dropdown1();
  dropdown2();
});
