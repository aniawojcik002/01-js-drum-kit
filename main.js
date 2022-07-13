'use strict';
document.addEventListener('keydown', function (event) {
  const keyCode = event.keyCode;
  
  const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
  const divElement = document.querySelector(`.key[data-key="${keyCode}"]`);

  divElement.classList.add('playing');

  function removePlayingClass () {
    divElement.classList.remove('playing');
  }
  setTimeout(removePlayingClass, 100);

  audioElement.load();
  audioElement.play();
});





