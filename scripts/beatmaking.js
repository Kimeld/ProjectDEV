
const buttons = Array.from(beatmaking.querySelectorAll('.button'))
const sounds = Array.from(beatmaking.querySelectorAll('audio'))
const stop = document.querySelector('.buttonStop')
const clap = document.querySelector('.clap')
const hihat = document.querySelector('.hi-hat')
const kick = document.querySelector('.kick')
const hat = document.querySelector('.open-hat')
const snare = document.querySelector('.snare')
const sample = document.querySelector('.sample')

for (const button of buttons) {
    button.addEventListener('mousedown', (event) => {

        event.preventDefault()

        playSound(button.dataset.sound)


    })
}


const playSound = (soundName) => {

    const sound = sounds.find((element) => element.classList.contains(soundName))

    sound.play()
}

document.addEventListener('keydown', (event) => {

})


document.addEventListener('keydown', () => {
    console.log("oui")
    //code pour récupérer la touche du clavier bas = 40 droite = 39 gauche = 37 HAUT = 38
    function handler(e) {
        let key = window.event ? e.keyCode : e.which;
        console.log(key, e.shiftKey, e.altKey, e.ctrlKey);

        if (key == 65) {
            clap.play()
            allParticle.position.z += 1
            material = new THREE.MeshStandardMaterial({
                color: 0xff0000,
                metalness: 0.3,
                roughness: 0.8


            })


        }

        if (key == 90) {
            hihat.play()
            allParticle.position.z += 1
        }
        if (key == 69) {
            kick.play()
            allParticle.position.z -= 1
        }
        if (key == 82) {
            hat.play()
            allParticle.position.z -= 1
        }
        if (key == 84) {
            snare.play()
            allParticle.position.z += 1
        }
        if (key == 89) {
            sample.play()
            allParticle.position.z -= 1
        }



    }

    if (document.attachEvent) document.attachEvent('onkeydown', handler);
    else document.addEventListener('keydown', handler);



})
