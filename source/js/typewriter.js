/*=============================*/
/*script  typewriter.js*/
/*author  https://github.com/Litvinenko-Yury*/

'use strict';

const text = document.querySelector('.typewriter-js__text'),
  textContent = text.textContent,
  sourceTextMass = textContent.split(''); // запись в массив посимвольно
text.textContent = ''; // удалить текствое содержимое элемента*/
const newTextMass = []; // создал пустой массив


/*Функция addContent() вставляет новое содержимое в элемент*/
let ii = 0; // глобальная переменная
function addContent() {
  newTextMass.push(sourceTextMass[ii]);//записываю в новый массив элемент из старого массива
  text.textContent = newTextMass.join(''); //преобразование нового массива в строку

  // счётчик и условие исполнения цикла
  ii++;
  if (ii < sourceTextMass.length) {
    setTimeout(() => {
      addContent();
    }, 100);
  }
}


/*Функция delContent() удаляет содержимое из элемента*/
let uu = sourceTextMass.length; // глобальная переменная
function delContent() {
  newTextMass.pop(); //удалить последний элемент из массива
  text.textContent = newTextMass.join(''); //преобразование нового массива в строку

  // счётчик и условие исполнения цикла
  uu--;
  if (uu >= 0) {
    setTimeout(() => {
      delContent();
    }, 100);
  }
}

/*вызов функций addContent() и delContent() в цикле*/
// при необходимости можно сделать бесконечный цикл
let сс = 0; // глобальная переменная
function callFunction() {
  ii = 0; // вернуть значение ii в первоначальное состояние
  addContent();
  setTimeout(() => {
    uu = sourceTextMass.length;  // вернуть значение uu в первоначальное состояние
    delContent();
  }, 4000);

  // счётчик и условие исполнения цикла
  сс++;
  if (сс < 10) {
    setTimeout(() => {
      callFunction();
    }, 8000);
  }
}

callFunction(); // одноразовый запуск, далее всё происходит в цикле
