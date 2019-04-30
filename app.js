const keysPlayed = [];

$(".pianoKey").click(function () {
    var keyData = $(this)[0].id;
    keysPlayed.push(keyData);
    console.log(keysPlayed)
    // console.log(keyData);
    // var audioClip = $("#c_octave1_audio")[0];
    // console.log("the sound: ", audioClip);
    // audioClip.play();
});