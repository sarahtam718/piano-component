const keysPlayed = [];

$(".pianoKey").click(function () {
    // var keyData = $(this)[0].id;
    var keyData = $(this)[0].id;
    // keysPlayed.push(keyData);
    // console.log(keysPlayed)
    console.log(keyData);
    // var audioClip = $("#c_octave1_audio")[0];
    // console.log("the sound: ", audioClip);
    // audioClip.play();
});

// NEXT STEPS
// a. display what user has chosen
    // a1. be able to manipulate that sequence? is this a back-end job?
// b. play each sound with a specific key
    // b1. use hash tables?
// c. active class added/removed when played