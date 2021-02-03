/*script  video-player-custom.js*/
/*author  https://github.com/Litvinenko-Yury*/

/*Скрипт кастом-панели управления видео-проигрывателя:
 - если скрипт не запустился - отображается стандатные controls;
 - при запусске скрипт скрывает defolt controls, и добавляет на страницу custom controls.*/

function videoPlayerCustom() {
  /*проверяем, поддерживает ли браузер элемент <video>*/
  const supportsVideo = !!document.createElement('video').canPlayType; // создать элемент video

  if (supportsVideo) {
    const videoContainer = document.querySelector('.video__container'),
      videoSource = videoContainer.querySelector('.video__source'),
      videoControls = videoContainer.querySelector('.video__controls');

    videoSource.controls = false;  // отключить стандартные controls
    videoControls.style.display = 'block'; // показать custom-controls


    /*найти кнопки*/
    const playpause = videoContainer.querySelector('.video__playpause'),
      stop = videoContainer.querySelector('.video__stop'),
      progress = videoContainer.querySelector('.video__progress'),
      mute = videoContainer.querySelector('.video__mute'),
      volUp = videoContainer.querySelector('.video__volup'),
      volDown = videoContainer.querySelector('.video__voldown'),
      fullscreen = videoContainer.querySelector('.video__fs');

    playpause.addEventListener('click', () => {
      if (videoSource.paused || videoSource.ended) {
        videoSource.play();
      } else {
        videoSource.pause();
      }
    });

    stop.addEventListener('click', () => {
      //Media API нет метода остановки, поэтому имитируем его
      videoSource.pause();
      videoSource.currentTime = 0;
      progress.value = 0;
    });

    mute.addEventListener('click', () => {
      videoSource.muted = !videoSource.muted;
    });

    /*===Volume===*/
    volUp.addEventListener('click', () => {
      alterVolume('+');
    });

    volDown.addEventListener('click', () => {
      alterVolume('-');
    });

    //Volume - функция увеличения/уменьшения громкости
    let alterVolume = function (dir) {
      let currentVolume = Math.floor(videoSource.volume * 10) / 10;
      if (dir === '+') {
        if (currentVolume < 1) { videoSource.volume += 0.1; }
      }
      else if (dir === '-') {
        if (currentVolume > 0) { videoSource.volume -= 0.1; }
      }
    };


    /*===Progress===*/
    // создать DOM-элементы для стилизации прогресса
    const wrapper = videoControls.querySelector('.video__progress-wrap');
    wrapper.insertAdjacentHTML("afterbegin", `
  <div class="video__progress-bar">
    <div class="video__progress-value"></div>
  </div>
  `);

    const progressValue = videoControls.querySelector('.video__progress-value');

    videoSource.addEventListener('timeupdate', () => {
      if (!progress.getAttribute('max')) { progress.setAttribute('max', videoSource.duration); } // добавить атирибут max со значением videoSource.duration
      progress.value = videoSource.currentTime; // установить value
      progressValue.style.width = ((progress.value / progress.max) * 100) + `%`; // изменяем ширину .video__progress-value
    });

    //Skip Ahead
    progress.addEventListener('click', function (e) {
      let posProgress = progress.getBoundingClientRect(); // координаты progress в контексте окна
      let pos = (e.clientX - posProgress.x) / posProgress.width; // где клик относительно progress
      videoSource.currentTime = pos * videoSource.duration; // задать currentTime
    });


    /*===Fullscreen===*/
    // определяем, поддерживает ли браузер полноэкранный API
    const fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);

    if (!fullScreenEnabled) {
      //если full screen mode не поддерживается, скрыть fullscreen button
      fullscreen.style.display = 'none';
    }

    fullscreen.addEventListener('click', function (e) {
      handleFullscreen();
    });

    let handleFullscreen = function () {
      if (isFullScreen()) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } setFullscreenData(false);
      }
      else {
        if (videoContainer.requestFullscreen) {
          videoContainer.requestFullscreen();
        } else if (videoContainer.mozRequestFullScreen) {
          videoContainer.mozRequestFullScreen();
        } else if (videoContainer.webkitRequestFullScreen) {
          videoContainer.webkitRequestFullScreen();
        } else if (videoContainer.msRequestFullscreen) {
          videoContainer.msRequestFullscreen();
        } setFullscreenData(true);
      }
    };

    var isFullScreen = function () {
      //проверка, находится ли браузер уже в полноэкранном режиме
      return !!(document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
    };

    var setFullscreenData = function (state) {
      videoContainer.setAttribute('data-fullscreen', !!state);
    };

    //Это используется для установки некоторого базового CSS для улучшения стиля настраиваемых элементов управления, когда они находятся в полноэкранном режиме
    document.addEventListener('fullscreenchange', function () {
      setFullscreenData(!!(document.fullscreen || document.fullscreenElement));
    });
    document.addEventListener('webkitfullscreenchange', function () {
      setFullscreenData(!!document.webkitIsFullScreen);
    });
    document.addEventListener('mozfullscreenchange', function () {
      setFullscreenData(!!document.mozFullScreen);
    });
    document.addEventListener('msfullscreenchange', function () {
      setFullscreenData(!!document.msFullscreenElement);
    });
  }
}

export default videoPlayerCustom;
