'use strict';

/*======================*/
/*script timer-reverse-v2*/
/*author  https://github.com/Litvinenko-Yury*/

/*Таймер обратного отсчета v2*/
/*=============================*/

document.addEventListener('DOMContentLoaded', () => {
  const deadline = '2020-12-31'; // конечная дата
  //это строка; можем её получить, например от сервера, или от пользователя

  /*эта функция вычисляет разницу между deadlineV2 и текущим временем*/
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date()),
      totalSeconds = Math.floor((total / 1000) % 60), // кол-во целых секунд
      totalMinutes = Math.floor((total / (1000 * 60)) % 60), // кол-во целых минут
      totalHours = Math.floor((total / (1000 * 60 * 60) % 24)), // кол-во целых часов
      totalDays = Math.floor(total / (1000 * 60 * 60 * 24));// кол-во целых дней

    /*Но! Экспортировать несколько переменных из функции просто так не получится, поэтому мы можем экспортировать объект.*/
    return {
      'total': total,
      'days': totalDays,
      'hours': totalHours,
      'minutes': totalMinutes,
      'seconds': totalSeconds
    };
  }

  /*эта функция, добавит 0 к значению, если значение <10*/
  function addZero(num) {
    //Если число в заданных пределах, функция добавит 0 перед цифрой.
    //Это для красоты вывода цифр в таймере.
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  /*эта функция устанавливает таймер на страницу*/
  function setClock(selector, endtime) {
    //находим на странице нужные элементы
    const timer = document.querySelector(selector), // сюда записать найденный блок с нужным таймером
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000); // запись метода setInterval() в переменную, что-бы таймер можно было остановить в дальнейшем.

    updateClock(); // однократный запуск, чтобы не было явления, описанного ниже.
    // Первое обновление таймера setInterval будет через 1сек.
    // Поэтому на странице будет видно сначала цифры таймера из верстки, а через 1сек - правильное значение. Это не хорошо.


    function updateClock() {
      const t = getTimeRemaining(endtime); // в эту переменную записать результат работы функции  getTimeRemaining();

      days.innerHTML = addZero(t.days);
      hours.innerHTML = addZero(t.hours);
      minutes.innerHTML = addZero(t.minutes);
      seconds.innerHTML = addZero(t.seconds);

      if (t.total <= 0) {
        // контроль времени остановки таймера
        clearInterval(timeInterval); // остановить таймер
        days.innerHTML = '00'; //показать 00, вместо отрицательных значений
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
      }
    }
  }

  setClock('#timer-reverse', deadline);
  //вызов функции, которой передаются в качестве аргументов: id блока таймером и переменная deadlineV2 конечной датой
});
