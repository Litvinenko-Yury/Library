/*script  to-top.js*/
/*author  https://github.com/Litvinenko-Yury*/

/*Ссылка «вверх» в нижнем правом углу страницы.*/

function toTop() {
  const toTop = document.querySelector(".to-top");

  /*При старте скрипта добавить класс .to-top--visible*/
  toTop.classList.add("to-top--no-visible");

  /*объявление функции с добавлением класса .to-top--visible*/
  function addСlassNoVisible() {
    toTop.classList.add("to-top--no-visible");
  }

  /*объявление функции с удалением класса .to-top--visible*/
  function delСlassNoVisible() {
    toTop.classList.remove("to-top--no-visible");
  }

  window.addEventListener("scroll", function () {
    /*в переменную posYVisible записываем число пикселей, на которое документ пролистали в данный момент по вертикали*/
    let posYVisible = window.scrollY;

    if (posYVisible > 500) {
      delСlassNoVisible();
    }
    else {
      addСlassNoVisible();
    }
  });
}

export default toTop;
