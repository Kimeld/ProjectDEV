let son = document.querySelector(".son")
let son1 = document.querySelector(".son1")
let bpm = document.querySelector(".bpm")
let valide = document.querySelector(".valide")
let valideB = document.querySelector(".valideB")
let block = document.querySelector(".block")
let beat = document.querySelector(".beat")
let button_play_left = document.querySelector(".button_play_left")
let button_pause_left = document.querySelector(".button_pause_left")
let button_play_right = document.querySelector(".button_play_right")
let button_pause_right = document.querySelector(".button_pause_right")

a = 0

//géré la vitesse du son
const speedUp = document.querySelector('.speedUp')
const speedDown = document.querySelector('.speedDown')
son.playbackRate = 1
console.log("son")

speedDown.addEventListener('click', () => {
    if (son.playbackRate - 0.1 >= 0) {
        son.playbackRate -= 0.1
    }


})

speedUp.addEventListener('click', () => {
    if (son.playbackRate < 2) {
        son.playbackRate += 0.1
    }


})




//gére le bass medium et treble

var context = new AudioContext();
var sourceNode = context.createMediaElementSource(son);

// EQ Properties
//
var gainDb = -40.0;
var bandSplit = [360, 3600];

var hBand = context.createBiquadFilter();
hBand.type = "lowshelf";
hBand.frequency.value = bandSplit[0];
hBand.gain.value = gainDb;

var hInvert = context.createGain();
hInvert.gain.value = -1.0;

var mBand = context.createGain();

var lBand = context.createBiquadFilter();
lBand.type = "highshelf";
lBand.frequency.value = bandSplit[1];
lBand.gain.value = gainDb;

var lInvert = context.createGain();
lInvert.gain.value = -1.0;

sourceNode.connect(lBand);
sourceNode.connect(mBand);
sourceNode.connect(hBand);

hBand.connect(hInvert);
lBand.connect(lInvert);

hInvert.connect(mBand);
lInvert.connect(mBand);

var lGain = context.createGain();
var mGain = context.createGain();
var hGain = context.createGain();



lBand.connect(lGain);
mBand.connect(mGain);
hBand.connect(hGain);

var sum = context.createGain();
lGain.connect(sum);
mGain.connect(sum);
hGain.connect(sum);
sum.connect(context.destination);

// Input
//
function changeGain(string, type) {
    var value = parseFloat(string) / 100.0;

    switch (type) {
        case 'lowGain':
            lGain.gain.value = value;
            break;
        case 'midGain':
            mGain.gain.value = (event.clientX - $container.offsetLeft - $soundContainer2.offsetLeft - $soundBar2.offsetLeft) / $soundBar2.offsetWidth;
            break;
        case 'highGain':
            hGain.gain.value = value;
            break;
    }
}


button_play_left.addEventListener('mousedown', (event) => {
    event.preventDefault()

    son.play()

})

button_pause_left.addEventListener('mousedown', (event) => {
    event.preventDefault()

    son.pause()

})

button_play_right.addEventListener('mousedown', (event) => {
    event.preventDefault()

    son1.play()

})

button_pause_right.addEventListener('mousedown', (event) => {
    event.preventDefault()

    son1.pause()

})
