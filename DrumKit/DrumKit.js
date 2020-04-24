window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return; // if data-key is not defined stop the function from running all together.
    audio.currentTime = 0; // Rewind to the start
    audio.play();
});