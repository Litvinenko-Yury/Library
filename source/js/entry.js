/**Entry points for scripts for page1.html */
import activePseudoToInput from './modules/active-pseudo-to-input';
import animista from './modules/animista';
import burgerSome from './modules/burger-some';
import formValid from './modules/form-validation';
import scrollAnchor from './modules/scroll-anchor';
import selectRadio from './modules/select-radio';
import toTop from './modules/to-top';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  activePseudoToInput();
  animista();
  burgerSome();
  formValid();
  scrollAnchor();
  selectRadio();
  toTop();
});
