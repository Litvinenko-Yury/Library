/*=============================*/
/*script  burgers-some.js*/
/*author  https://github.com/Litvinenko-Yury*/

/*
1. определяет, на каком бургере был клик;
2. анимирует значек бургера - в "крестик";
3.переключает класс элементу с нужным ID
    */
/*=============================*/

'use strict';

document.addEventListener('click', function (event) { /*1. вешаем единый обработчик на элемент document*/
  /*это нужно для того, что-бы много burger-ов можно было ставить в любом месте*/
  let target = event.target; /*2. где был клик?*/
  //console.log(target);

  while (target != document) {
    if (target.classList.contains("burger" || "burger--close")) { /* 3. на .burger? то, что надо!*/
      //console.log("клик на бургер");
      target.classList.toggle("burger--close");

      let burgerDataID = target.getAttribute("data-target-id"); /*7. из переменной target читаем значение атрибута data-target-id*/
      //console.log("нашел data-target-id = " + burgerDataID);

      let burgerDataClassToggle = target.getAttribute("data-target-class-toggle"); /*8. из переменной target читаем значение атрибута data-target-class-toggle*/
      //console.log("нашел data-target-class-toggle = " + burgerDataClassToggle);

      let elementClassToggle = document.getElementById(burgerDataID); /* 9. находим элемент с нужным ID*/
      //console.log("нашел элемент с нужным ID = " + elementClassToggle);

      elementClassToggle.classList.toggle(burgerDataClassToggle);/* 10. Элементу с нужным ID меняем класс на переданный в data-target-class-toggle*/

      break;
    } else {/* 4. не на .burger? нет, не подходит... */
      //console.log("промазал");
      target = target.parentNode; /*5. поднимаем target на уровень вверх по иерархии родителей от event.target и выше*/
      //console.log("вывожу target на уровень выше");
      //console.log(target);
    }
  };

  //console.log("вышел из цикла");
});



/**====================================== */

// document.onclick = function (event) { /*1. вешаем единый обработчик на элемент document*/
//   /*это нужно для того, что-бы много burger-ов можно было ставить в любом месте*/
//   let target = event.target; /*2. где был клик?*/
//   //console.log(target);

//   while (target != document) {
//     if (target.classList.contains("burger" || "burger--close")) { /* 3. на .burger? то, что надо!*/
//       //console.log("клик на бургер");
//       target.classList.toggle("burger--close");

//       let burgerDataID = target.getAttribute("data-target-id"); /*7. из переменной target читаем значение атрибута data-target-id*/
//       //console.log("нашел data-target-id = " + burgerDataID);

//       let burgerDataClassToggle = target.getAttribute("data-target-class-toggle"); /*8. из переменной target читаем значение атрибута data-target-class-toggle*/
//       //console.log("нашел data-target-class-toggle = " + burgerDataClassToggle);

//       let elementClassToggle = document.getElementById(burgerDataID); /* 9. находим элемент с нужным ID*/
//       //console.log("нашел элемент с нужным ID = " + elementClassToggle);

//       elementClassToggle.classList.toggle(burgerDataClassToggle);/* 10. Элементу с нужным ID меняем класс на переданный в data-target-class-toggle*/

//       break;
//     } else {/* 4. не на .burger? нет, не подходит... */
//       //console.log("промазал");
//       target = target.parentNode; /*5. поднимаем target на уровень вверх по иерархии родителей от event.target и выше*/
//       //console.log("вывожу target на уровень выше");
//       //console.log(target);
//     }
//   };

//   //console.log("вышел из цикла");
// };

/* 6. Если клик был мимо burger, цикл дойдет вверх до document, и обработчик закончит работу*/

