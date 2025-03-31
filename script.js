document.querySelectorAll('.audio-button').forEach(button => {
  button.addEventListener('click', () => {
    const soundName = button.getAttribute('data-sound');
    const audio = new Audio(`audio/${soundName}.mp3`);
    audio.play();
  });
});