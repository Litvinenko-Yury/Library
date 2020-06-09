/*======================*/
/*script timer-reverse*/
/*author  https://github.com/Litvinenko-Yury*/

/*Таймер обратного отсчета*/
/*=============================*/

const deadline = '2020-12-31'; /*это строка; можем её получить, например от сервера, или от пользователя*/

function getTimeRemaining(endtime) {
  /*эта функция вычисляет остаток времени до deadline*/

  const t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t / 1000) % 60), /*получаем кол-во секунд из миллисекунд. Но нам нужно не полное количество секунд, о не более 59сек. Т.е. нужен остаток от деления на 60. Это символ "%" */
    minutes = Math.floor((t / 1000 / 60) % 60), /*получаем кол-во минут*/
    hours = Math.floor((t / (1000 * 60 * 60))); /*получаем кол-во часов*/

  /*Но! Экспортировать несколько переменных из функции просто так не получится, поэтому мы можем экспортировать объект.*/

  return {
    /*это данные, которые нужны в таймере*/
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function setClock(id, endTime) {
  let timer = document.getElementById(id), /*сюда передаем переменную id. Это тот аргумент, который придет из 'timer' при вызове функции. Т.е. сюда попадет блок с id='timer'*/
    hours = timer.querySelector('.timer__hours'),
    minutes = timer.querySelector('.timer__minutes'),
    seconds = timer.querySelector('.timer__seconds'),
    timeInterval = setInterval(updateClock, 1000); /*запускаем функцию updateClock() каждые 1000мс*/

  function updateClock() { /*эта функция обновляет часы каждую секунду*/
    let t = getTimeRemaining(endTime); /*сюда передаем deadline. Он приходит в виде аргумента endTime*/
    /*каждый раз, когда функция updateClock будет запускаться, она будет создавать внутри себя переменную t*/

    function addZero(num) { /*функция, добавляющая 0 к значению, если значение <=9*/
      if (num <= 9) {
        return '0' + num;
      } else return num;
    };

    hours.textContent = addZero(t.hours); /*в функцию addZero() передаем значение из объекта переменной t.hours*/
    minutes.textContent = addZero(t.minutes);
    seconds.textContent = addZero(t.seconds);

    if (t.total <= 0) {
      clearInterval(timeInterval); /*останавить таймер*/
      hours.textContent = '00'; /*показать 00, вместо отрицательных значений*/
      minutes.textContent = '00';
      seconds.textContent = '00';
    }
  }
}

setClock('timer-reverse', deadline);/*вызов функции, которой передаются в качестве аргументов: id блока и переменная deadline*/
