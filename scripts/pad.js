const $sounds = document.querySelectorAll('audio')
const padButtons = document.querySelectorAll('.pads');

const onPadButtonmouseDown = event => playSound(event.target.dataset.sound);

const playSound = (soundName)=>{ //Parametre soundName pour pointer le son en question 
    const sound = document.querySelector(`.${soundName}`);
     
    if (sound) sound.play();
};

document.addEventListener('keydown', event => {
    const padButton = document.querySelector(`.key_${event.keyCode}`);
    const color = ['00f7ff','f708cf','08ff08']
    const selectorColor = Math.floor(Math.random()*3)
    const colorSelected = color[selectorColor]

    console.log(colorSelected)
    if (padButton) {
        padButton.style.boxShadow = "0px 0px 0px 0px"
        padButton.style.color = `#${colorSelected}`
        
        setTimeout(() => {
        padButton.style.boxShadow = "3px 3px 3px 3px"
        padButton.style.color = "#1F1F1F"
        },100)
        
        playSound(padButton.dataset.sound);
    }
});

padButtons.forEach(padButton => padButton.addEventListener('mousedown', onPadButtonmouseDown));
