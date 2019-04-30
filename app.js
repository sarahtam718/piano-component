// function playNote(event) {
//     const audio = $('this');
//     console.log("---------playNote function-------", audio)
//     // var audio = document.getElementById("audio");
//     // audio.play();
// }

// var audio = $("audio");

// const audio = $("audio");
// console.log("audio: ", audio)

// function play(event) {
//     console.log("audio: ", event)
//     event.play();
// }

$(".pianoKey").click(function () {
    var keyData = $(this)[0].id;
    console.log(keyData);
    var audioClip = $("#c_octave1_audio")[0];
    console.log("the sound: ", audioClip);
    audioClip.play();
    // playNote(keyData)
})

// const audio = `${event}`;
// console.log("---------playNote function-------", audio)


// window.addEventListener('keydown', function (e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if (!audio) return;
//     audio.currentTime = 0;
//     audio.play();
//     key.classList.add('active')
// });