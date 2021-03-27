/*check-browser.js*/
/*created by Yuri Litvinenko  https://litvinenko-yury.pro/*/


document.getElementById('checkBrowser').style.display = 'block';


/*проверка на IE - (трюк: он не использует append)*/
//var div = document.createElement('div');

//try {
//  !!document.body.append(div); // приводим результат к булевому типу (true или false) с помощью приёма двойного отрицания
//} catch (error) {
//  document.getElementById('checkBrowser').style.display = 'block'; // это модальное окно с сообщением - "Ваш браузер устарел"
  //return
//}
