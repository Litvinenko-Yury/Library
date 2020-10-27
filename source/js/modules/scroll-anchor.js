/*author: https://github.com/YuraVolk*/

/*Скрипт плавный скрол к якорю*/

function scrollAnchor() {
  let isScrolling = false;

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
      position = position || 0;
      return this.indexOf(searchString, position) === position;
    };
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  function smoothScrollTo(element, to, duration) {
    isScrolling = true;
    let start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 5;

    let animateScroll = function animateScroll() {
      currentTime += increment;
      let val = easeInOutQuad(currentTime, start, change, duration);
      window.pageYOffset = val;
      // document.documentElement.scrollTop = val;
      window.scroll(0, val);
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
      if (currentTime === duration) {
        isScrolling = false;
      }
    };

    animateScroll();
  }

  function scrollAnimate(el) {
    smoothScrollTo(document.documentElement, el.offsetTop, 400);
  }

  let links = document.getElementsByTagName('a');

  for (let i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("href")) {
      if (links[i].getAttribute("href").startsWith("#")) {

        links[i].addEventListener("click", function (e) {

          let elem = event.target;
          e.preventDefault();

          let el = document.getElementById(elem.getAttribute("href").substring(1));

          if (el != null) {
            scrollAnimate(el);
          }
        });
      }
    }
  }
}

export default scrollAnchor;
