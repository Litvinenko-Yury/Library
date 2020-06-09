/*======================*/
/*script timer-reverse*/
/*author  https://github.com/Litvinenko-Yury*/

/*Таймер обратного отсчета*/
/*=============================*/

const deadline = '2020-12-31'; // конечная дата
//это строка; можем её получить, например от сервера, или от пользователя

//эта функция вычисляет разницу между deadline и текущим временем
function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t / 1000) % 60), // кол-во целых секунд
    minutes = Math.floor((t / 1000 / 60) % 60), // кол-во целых минут
    hours = Math.floor((t / (1000 * 60 * 60))); //кол-во целых часов

  /*Но! Экспортировать несколько переменных из функции просто так не получится, поэтому мы можем экспортировать объект.*/
  return {
    /*это данные, которые нужны в таймере*/
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

/*эта функция устанавливает таймер на страницу*/
function setClock(id, endTime) {
  const timer = document.getElementById(id), // сюда записать найденный блок с нужным таймером
    hours = timer.querySelector('.timer__hours'),
    minutes = timer.querySelector('.timer__minutes'),
    seconds = timer.querySelector('.timer__seconds'),
    timeInterval = setInterval(updateClock, 1000); // запись метода setInterval() в переменную, что-бы таймер можно было остановить в дальнейшем.


  /*эта функция выводит готовые значения часов-минут-и т.д. на страницу*/
  function updateClock() {
    const t = getTimeRemaining(endTime); // в эту переменную записать результат работы функции  getTimeRemaining();
    /*каждый раз, когда функция updateClock будет запускаться, она будет создавать внутри себя переменную t*/

    function addZero(num) {
      /*функция, добавляющая 0 к значению, если значение <=9*/
      if (num <= 9) {
        return '0' + num;
      } else {
        return num;
      }
    }

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

setClock('timer-reverse', deadline); //вызов функции, которой передаются в качестве аргументов: id блока и переменная deadline
