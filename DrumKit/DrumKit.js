window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // if data-key is not defined stop the function from running all together.
    key.classList.add('playing');
    audio.currentTime = 0; // Rewind to the start
    audio.play();
});


// Select all the elements with the class `.key`.
// For each element add an event listener to trigger an anonymous function when the transisions of the element ends.
// Since there are multiple transitions pick one, normally the one that takes more time, in this case all of the them
// have the same transition time so I am going to randomly pick `transform`.
// The reason to do this is because if you think about it, the anonymous function is going to be call multiple times
// for each transition end, so we don't want to be constantly removing that class, just pick one of them and return 
// the function for the rest.
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', (e) => {
    if(!Object.is(e.propertyName, 'transform')) return;
    key.classList.remove('playing');
}));