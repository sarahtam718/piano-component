function playNote(event) {
    console.log("what is the id?", event)
    // const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
    console.log("---------playNote function-------")
    // var audio = document.getElementById("audio");
    // audio.play();
}

$(".pianoKey").click(function () {
    console.log("i've been clicked");
    console.log("you clicked me: ", this)
})

// const pianoKey = document.getElementsByClassName("pianoKey");
// console.log("pianoKey const: ", pianoKey)

// Array.from(pianoKey).forEach(function (element) {
//     element.addEventListener('click', playNote);
//     // console.log("what is this?", element)
// });

// $(".piano").addEventListener('click', playNote)

// window.addEventListener('keydown', function (e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if (!audio) return;
//     audio.currentTime = 0;
//     audio.play();
//     key.classList.add('active')
// });