/**Entry points for scripts for page1.html */
import burgerSome from './modules/burger-some';
import formValid from './modules/form-validation';
import animista from './modules/animista';
import activePseudoToInput from './modules/active-pseudo-to-input';
import toTop from './modules/to-top';
import scrollAnchor from './modules/scroll-anchor';


window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  burgerSome();
  formValid();
  animista();
  activePseudoToInput();
  toTop();
  scrollAnchor();
});
