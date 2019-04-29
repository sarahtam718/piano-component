function playNote(event) {
    // const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
    console.log("---------playNote function-------")
    // var audio = document.getElementById("audio");
    // audio.play();
}

const pianoKey = document.getElementsByClassName("white");
// console.log("piano const: ", piano)

Array.from(pianoKey).forEach(function (element) {
    element.addEventListener('click', playNote);
});

// $(".piano").addEventListener('click', playNote)

// window.addEventListener('keydown', function (e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if (!audio) return;
//     audio.currentTime = 0;
//     audio.play();
//     key.classList.add('active')
// });