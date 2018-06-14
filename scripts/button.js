// TRUBLE LEFT
const $soundContainer = document.querySelector('.truble1')
const $soundClick = document.querySelector('.js-clickable')
const $soundBar = document.querySelector('.sound-bar')
const $fillBarSound = document.querySelector('.fill-bar')
// TRUBLE RIGHT
const $soundContainer1 = document.querySelector('.truble2')
const $soundClick1 = $soundContainer1.querySelector('.js-clickable')
const $soundBar1 = $soundContainer1.querySelector('.sound-bar')
const $fillBarSound1 = $soundContainer1.querySelector('.fill-bar')
// MEDIUM LEFT
const $soundContainer2 = document.querySelector('.medium1')
const $soundClick2 = $soundContainer2.querySelector('.js-clickable')
const $soundBar2 = $soundContainer2.querySelector('.sound-bar')
const $fillBarSound2 = $soundContainer2.querySelector('.fill-bar')
// MEDIUM RIGHT
const $soundContainer3 = document.querySelector('.medium2')
const $soundClick3 = $soundContainer3.querySelector('.js-clickable')
const $soundBar3 = $soundContainer3.querySelector('.sound-bar')
const $fillBarSound3 = $soundContainer3.querySelector('.fill-bar')
// BASS LEFT
const $soundContainer4 = document.querySelector('.bass1')
const $soundClick4 = $soundContainer4.querySelector('.js-clickable')
const $soundBar4 = $soundContainer4.querySelector('.sound-bar')
const $fillBarSound4 = $soundContainer4.querySelector('.fill-bar')
// BASS RIGHT
const $soundContainer5 = document.querySelector('.bass2')
const $soundClick5 = $soundContainer5.querySelector('.js-clickable')
const $soundBar5 = $soundContainer5.querySelector('.sound-bar')
const $fillBarSound5 = $soundContainer5.querySelector('.fill-bar')


const $container = document.querySelector('.container')


// DRAG FUNCTION FOR THE SOUND 
//Listen to mousedown event on seek bar

execute($soundContainer, $soundClick, $fillBarSound, $soundBar)
execute1($soundContainer1, $soundClick1, $fillBarSound1, $soundBar1)
execute2($soundContainer2, $soundClick2, $fillBarSound2, $soundBar2)
execute3($soundContainer3, $soundClick3, $fillBarSound3, $soundBar3)
execute4($soundContainer4, $soundClick4, $fillBarSound4, $soundBar4)
execute5($soundContainer5, $soundClick5, $fillBarSound5, $soundBar5)

function execute() {

    $soundClick.addEventListener('mousedown', (event) => {
        event.preventDefault()
        $fillBarSound.style.opacity = "1"
        $soundBar.style.opacity = "1"
        // call of the move and mouseup functions 
        dragFunctionSound()
        endDragFunctionSound()
        // control that you have clicked on the sound bar 
        $soundContainer.classList.add('in_progress')
        // permits to avoid bug when the user leave the focus on the sound bar 
        $container.addEventListener("mouseleave", (event) => {
            if ($soundContainer.classList.contains("in_progress")) {
                if (event.clientX < 0 + $container.offsetLeft + $soundContainer.offsetLeft + $soundBar.offsetLeft) {
                    $fillBarSound.style.transform = `scaleX(${0})`

                } else {

                    $fillBarSound.style.transform = `scaleX(${1})`

                }
            }
        })
    })


    // Listen to mousemove to move the fill bar 
    // fill bar action during the drag 

    function dragFunctionSound() {
        document.addEventListener('mousemove', (event) => {
            $container.classList.add('is_over')
            event.preventDefault()
            endDragFunctionSound()
            if ($soundContainer.classList.contains("in_progress")) {
                if (event.clientX < 0 + $container.offsetLeft + $soundContainer.offsetLeft + $soundBar.offsetLeft) {
                    $fillBarSound.style.transform = `scaleX(${0})`

                } else if (event.clientX > 0 + $container.offsetLeft + $soundContainer.offsetLeft + $soundBar.offsetLeft && event.clientX < $soundBar.offsetWidth + $container.offsetLeft + $soundContainer.offsetLeft + $soundBar.offsetLeft) {
                    // Permits to find x positon following the mouse
                    $fillBarSound.style.transform = `scaleX(${(event.clientX - $container.offsetLeft - $soundContainer.offsetLeft - $soundBar.offsetLeft) / $soundBar.offsetWidth})`

                } else {
                    $fillBarSound.style.transform = `scaleX(${1})`

                }
            }

        })
    }
    // Permits to set the position at the end of the action = at the mouseup 
    function endDragFunctionSound() {
        document.addEventListener('mouseup', (event) => {
            if ($soundContainer.classList.contains("in_progress")) {
                $soundContainer.classList.remove("in_progress")
                if (event.clientX < 0 + $container.offsetLeft + $soundContainer.offsetLeft + $soundBar.offsetLeft) {
                    $fillBarSound.style.transform = `scaleX(${0})`

                } else if (event.clientX > 0 + $container.offsetLeft + $soundContainer.offsetLeft + $soundBar.offsetLeft && event.clientX < $soundBar.offsetWidth + $container.offsetLeft + $soundContainer.offsetLeft + $soundBar.offsetLeft) {
                    $fillBarSound.style.transform = `scaleX(${(event.clientX-$container.offsetLeft-$soundContainer.offsetLeft-$soundBar.offsetLeft)/$soundBar.offsetWidth})`

                    hGain.gain.value = (event.clientX - $container.offsetLeft - $soundContainer.offsetLeft - $soundBar.offsetLeft) / $soundBar.offsetWidth


                } else {
                    $fillBarSound.style.transform = `scaleX(${1})`

                }
            }

        })
    }

}

/*
TRUBLE RIGHT
*/
function execute1() {

    $soundClick1.addEventListener('mousedown', (event) => {
        event.preventDefault()
        $fillBarSound1.style.opacity = "1"
        $soundBar1.style.opacity = "1"
        // call of the move and mouseup functions 
        dragFunctionSound()
        endDragFunctionSound()
        // control that you have clicked on the sound bar 
        $soundContainer1.classList.add('in_progress')
        // permits to avoid bug when the user leave the focus on the sound bar 
        $container.addEventListener("mouseleave", (event) => {
            if ($soundContainer1.classList.contains("in_progress")) {
                if (event.clientX < 0 + $container.offsetLeft + $soundContainer1.offsetLeft + $soundBar1.offsetLeft) {
                    $fillBarSound1.style.transform = `scaleX(${0})`

                } else {

                    $fillBarSound1.style.transform = `scaleX(${1})`

                }
            }
        })
    })


    // Listen to mousemove to move the fill bar 
    // fill bar action during the drag 

    function dragFunctionSound() {
        document.addEventListener('mousemove', (event) => {
            $container.classList.add('is_over')
            event.preventDefault()
            endDragFunctionSound()
            if ($soundContainer1.classList.contains("in_progress")) {
                if (event.clientX < 0 + $container.offsetLeft + $soundContainer1.offsetLeft + $soundBar1.offsetLeft) {
                    $fillBarSound1.style.transform = `scaleX(${0})`

                } else if (event.clientX > 0 + $container.offsetLeft + $soundContainer1.offsetLeft + $soundBar1.offsetLeft && event.clientX < $soundBar1.offsetWidth + $container.offsetLeft + $soundContainer1.offsetLeft + $soundBar1.offsetLeft) {
                    // Permits to find x positon following the mouse
                    $fillBarSound1.style.transform = `scaleX(${(event.clientX - $container.offsetLeft - $soundContainer1.offsetLeft - $soundBar1.offsetLeft) / $soundBar1.offsetWidth})`

                } else {
                    $fillBarSound1.style.transform = `scaleX(${1})`

                }
            }

        })
    }
    // Permits to set the position at the end of the action = at the mouseup 
    function endDragFunctionSound() {
        document.addEventListener('mouseup', (event) => {
            if ($soundContainer1.classList.contains("in_progress")) {
                $soundContainer1.classList.remove("in_progress")
                if (event.clientX < 0 + $container.offsetLeft + $soundContainer1.offsetLeft + $soundBar1.offsetLeft) {
                    $fillBarSound1.style.transform = `scaleX(${0})`

                } else if (event.clientX > 0 + $container.offsetLeft + $soundContainer1.offsetLeft + $soundBar1.offsetLeft && event.clientX < $soundBar1.offsetWidth + $container.offsetLeft + $soundContainer1.offsetLeft + $soundBar1.offsetLeft) {
                    $fillBarSound1.style.transform = `scaleX(${(event.clientX-$container.offsetLeft-$soundContainer1.offsetLeft-$soundBar1.offsetLeft)/$soundBar1.offsetWidth})`

                    hGain.gain.value = (event.clientX - $container.offsetLeft - $soundContainer1.offsetLeft - $soundBar1.offsetLeft) / $soundBar1.offsetWidth

                } else {
                    $fillBarSound1.style.transform = `scaleX(${1})`

                }
            }

        })
    }

}

/********************************



MEDIUM LEFT



*/ //////////////////////////////

function execute2() {

    $soundClick2.addEventListener('mousedown', (event) => {
        event.preventDefault()
        $fillBarSound2.style.opacity = "1"
        $soundBar2.style.opacity = "1"
        // call of the move and mouseup functions 
        dragFunctionSound()
        endDragFunctionSound()
        // control that you have clicked on the sound bar 
        $soundContainer2.classList.add('in_progress')
        // permits to avoid bug when the user leave the focus on the sound bar 
        $container.addEventListener("mouseleave", (event) => {
            if ($soundContainer2.classList.contains("in_progress")) {
                if (event.clientX < 0 + $container.offsetLeft + $soundContainer2.offsetLeft + $soundBar2.offsetLeft) {
                    $fillBarSound2.style.transform = `scaleX(${0})`

                } else {

                    $fillBarSound2.style.transform = `scaleX(${1})`

                }
            }
        })
    })


    // Listen to mousemove to move the fill bar 
    // fill bar action during the drag 

    function dragFunctionSound() {
        document.addEventListener('mousemove', (event) => {
            $container.classList.add('is_over')
            event.preventDefault()
            endDragFunctionSound()
            if ($soundContainer2.classList.contains("in_progress")) {
                if (event.clientX < 0 + $container.offsetLeft + $soundContainer2.offsetLeft + $soundBar2.offsetLeft) {
                    $fillBarSound2.style.transform = `scaleX(${0})`

                } else if (event.clientX > 0 + $container.offsetLeft + $soundContainer2.offsetLeft + $soundBar2.offsetLeft && event.clientX < $soundBar2.offsetWidth + $container.offsetLeft + $soundContainer2.offsetLeft + $soundBar2.offsetLeft) {
                    // Permits to find x positon following the mouse
                    $fillBarSound2.style.transform = `scaleX(${(event.clientX - $container.offsetLeft - $soundContainer2.offsetLeft - $soundBar2.offsetLeft) / $soundBar2.offsetWidth})`

                } else {
                    $fillBarSound2.style.transform = `scaleX(${1})`

                }
            }

        })
    }
    // Permits to set the position at the end of the action = at the mouseup 
    function endDragFunctionSound() {
        document.addEventListener('mouseup', (event) => {
            if ($soundContainer2.classList.contains("in_progress")) {
                $soundContainer2.classList.remove("in_progress")
                if (event.clientX < 0 + $container.offsetLeft + $soundContainer2.offsetLeft + $soundBar2.offsetLeft) {
                    $fillBarSound2.style.transform = `scaleX(${0})`

                } else if (event.clientX > 0 + $container.offsetLeft + $soundContainer2.offsetLeft + $soundBar2.offsetLeft && event.clientX < $soundBar2.offsetWidth + $container.offsetLeft + $soundContainer2.offsetLeft + $soundBar2.offsetLeft) {
                    $fillBarSound2.style.transform = `scaleX(${(event.clientX-$container.offsetLeft-$soundContainer2.offsetLeft-$soundBar2.offsetLeft)/$soundBar2.offsetWidth})`

                    mGain.gain.value = (event.clientX - $container.offsetLeft - $soundContainer2.offsetLeft - $soundBar2.offsetLeft) / $soundBar2.offsetWidth

                    console.log((event.clientX - $container.offsetLeft - $soundContainer2.offsetLeft - $soundBar2.offsetLeft) / $soundBar2.offsetWidth)

                } else {
                    $fillBarSound2.style.transform = `scaleX(${1})`

                }
            }

        })
    }

}
/********************************



MEDIUM RIGHT



*/ //////////////////////////////

function execute3() {

    $soundClick3.addEventListener('mousedown', (event) => {
        event.preventDefault()
        $fillBarSound3.style.opacity = "1"
        $soundBar3.style.opacity = "1"
        // call of the move and mouseup functions 
        dragFunctionSound()
        endDragFunctionSound()
        // control that you have clicked on the sound bar 
        $soundContainer3.classList.add('in_progress')
        // permits to avoid bug when the user leave the focus on the sound bar 
        $container.addEventListener("mouseleave", (event) => {
            if ($soundContainer3.classList.contains("in_progress")) {
                if (event.clientX < 0 + $container.offsetLeft + $soundContaine3.offsetLeft + $soundBar3.offsetLeft) {
                    $fillBarSound3.style.transform = `scaleX(${0})`

                } else {

                    $fillBarSound3.style.transform = `scaleX(${1})`

                }
            }
        })
    })


    // Listen to mousemove to move the fill bar 
    // fill bar action during the drag 

    function dragFunctionSound() {
        document.addEventListener('mousemove', (event) => {
            $container.classList.add('is_over')
            event.preventDefault()
            endDragFunctionSound()
            if ($soundContainer3.classList.contains("in_progress")) {
                if (event.clientX < 0 + $container.offsetLeft + $soundContainer3.offsetLeft + $soundBar3.offsetLeft) {
                    $fillBarSound3.style.transform = `scaleX(${0})`

                } else if (event.clientX > 0 + $container.offsetLeft + $soundContainer3.offsetLeft + $soundBar3.offsetLeft && event.clientX < $soundBar3.offsetWidth + $container.offsetLeft + $soundContainer3.offsetLeft + $soundBar3.offsetLeft) {
                    // Permits to find x positon following the mouse
                    $fillBarSound3.style.transform = `scaleX(${(event.clientX - $container.offsetLeft - $soundContainer3.offsetLeft - $soundBar3.offsetLeft) / $soundBar3.offsetWidth})`

                } else {
                    $fillBarSound3.style.transform = `scaleX(${1})`

                }
            }

        })
    }
    // Permits to set the position at the end of the action = at the mouseup 
    function endDragFunctionSound() {
        document.addEventListener('mouseup', (event) => {
            if ($soundContainer3.classList.contains("in_progress")) {
                $soundContainer3.classList.remove("in_progress")
                if (event.clientX < 0 + $container.offsetLeft + $soundContainer3.offsetLeft + $soundBar3.offsetLeft) {
                    $fillBarSound3.style.transform = `scaleX(${0})`

                } else if (event.clientX > 0 + $container.offsetLeft + $soundContainer3.offsetLeft + $soundBar3.offsetLeft && event.clientX < $soundBar3.offsetWidth + $container.offsetLeft + $soundContainer3.offsetLeft + $soundBar3.offsetLeft) {
                    $fillBarSound3.style.transform = `scaleX(${(event.clientX-$container.offsetLeft-$soundContainer3.offsetLeft-$soundBar3.offsetLeft)/$soundBar3.offsetWidth})`

                    mGain.gain.value = (event.clientX - $container.offsetLeft - $soundContainer3.offsetLeft - $soundBar3.offsetLeft) / $soundBar3.offsetWidth

                } else {
                    $fillBarSound3.style.transform = `scaleX(${1})`

                }
            }

        })
    }

}

/********************************



BASS LEFT



*/ //////////////////////////////

function execute4() {

    $soundClick4.addEventListener('mousedown', (event) => {
        event.preventDefault()
        $fillBarSound4.style.opacity = "1"
        $soundBar4.style.opacity = "1"
        // call of the move and mouseup functions 
        dragFunctionSound()
        endDragFunctionSound()
        // control that you have clicked on the sound bar 
        $soundContainer4.classList.add('in_progress')
        // permits to avoid bug when the user leave the focus on the sound bar 
        $container.addEventListener("mouseleave", (event) => {
            if ($soundContainer4.classList.contains("in_progress")) {
                if (event.clientX < 0 + $container.offsetLeft + $soundContaine4.offsetLeft + $soundBar4.offsetLeft) {
                    $fillBarSound4.style.transform = `scaleX(${0})`

                } else {

                    $fillBarSound4.style.transform = `scaleX(${1})`

                }
            }
        })
    })


    // Listen to mousemove to move the fill bar 
    // fill bar action during the drag 

    function dragFunctionSound() {
        document.addEventListener('mousemove', (event) => {
            $container.classList.add('is_over')
            event.preventDefault()
            endDragFunctionSound()
            if ($soundContainer4.classList.contains("in_progress")) {
                if (event.clientX < 0 + $container.offsetLeft + $soundContainer4.offsetLeft + $soundBar4.offsetLeft) {
                    $fillBarSound4.style.transform = `scaleX(${0})`

                } else if (event.clientX > 0 + $container.offsetLeft + $soundContainer4.offsetLeft + $soundBar4.offsetLeft && event.clientX < $soundBar4.offsetWidth + $container.offsetLeft + $soundContainer4.offsetLeft + $soundBar4.offsetLeft) {
                    // Permits to find x positon following the mouse
                    $fillBarSound4.style.transform = `scaleX(${(event.clientX - $container.offsetLeft - $soundContainer4.offsetLeft - $soundBar4.offsetLeft) / $soundBar4.offsetWidth})`

                } else {
                    $fillBarSound4.style.transform = `scaleX(${1})`

                }
            }

        })
    }
    // Permits to set the position at the end of the action = at the mouseup 
    function endDragFunctionSound() {
        document.addEventListener('mouseup', (event) => {
            if ($soundContainer4.classList.contains("in_progress")) {
                $soundContainer4.classList.remove("in_progress")
                if (event.clientX < 0 + $container.offsetLeft + $soundContainer4.offsetLeft + $soundBar4.offsetLeft) {
                    $fillBarSound4.style.transform = `scaleX(${0})`

                } else if (event.clientX > 0 + $container.offsetLeft + $soundContainer4.offsetLeft + $soundBar4.offsetLeft && event.clientX < $soundBar4.offsetWidth + $container.offsetLeft + $soundContainer4.offsetLeft + $soundBar4.offsetLeft) {
                    $fillBarSound4.style.transform = `scaleX(${(event.clientX-$container.offsetLeft-$soundContainer4.offsetLeft-$soundBar4.offsetLeft)/$soundBar4.offsetWidth})`

                    lGain.gain.value = (event.clientX - $container.offsetLeft - $soundContainer4.offsetLeft - $soundBar4.offsetLeft) / $soundBar4.offsetWidth

                } else {
                    $fillBarSound4.style.transform = `scaleX(${1})`

                }
            }

        })
    }

}
/********************************



BASS RIGHT



*/ //////////////////////////////

function execute5() {

    $soundClick5.addEventListener('mousedown', (event) => {
        event.preventDefault()
        $fillBarSound5.style.opacity = "1"
        $soundBar5.style.opacity = "1"
        // call of the move and mouseup functions 
        dragFunctionSound()
        endDragFunctionSound()
        // control that you have clicked on the sound bar 
        $soundContainer5.classList.add('in_progress')
        // permits to avoid bug when the user leave the focus on the sound bar 
        $container.addEventListener("mouseleave", (event) => {
            if ($soundContainer5.classList.contains("in_progress")) {
                if (event.clientX < 0 + $container.offsetLeft + $soundContaine5.offsetLeft + $soundBar5.offsetLeft) {
                    $fillBarSound5.style.transform = `scaleX(${0})`

                } else {

                    $fillBarSound5.style.transform = `scaleX(${1})`

                }
            }
        })
    })


    // Listen to mousemove to move the fill bar 
    // fill bar action during the drag 

    function dragFunctionSound() {
        document.addEventListener('mousemove', (event) => {
            $container.classList.add('is_over')
            event.preventDefault()
            endDragFunctionSound()
            if ($soundContainer5.classList.contains("in_progress")) {
                if (event.clientX < 0 + $container.offsetLeft + $soundContainer5.offsetLeft + $soundBar5.offsetLeft) {
                    $fillBarSound5.style.transform = `scaleX(${0})`

                } else if (event.clientX > 0 + $container.offsetLeft + $soundContainer5.offsetLeft + $soundBar5.offsetLeft && event.clientX < $soundBar5.offsetWidth + $container.offsetLeft + $soundContainer5.offsetLeft + $soundBar5.offsetLeft) {
                    // Permits to find x positon following the mouse
                    $fillBarSound5.style.transform = `scaleX(${(event.clientX - $container.offsetLeft - $soundContainer5.offsetLeft - $soundBar5.offsetLeft) / $soundBar5.offsetWidth})`

                } else {
                    $fillBarSound5.style.transform = `scaleX(${1})`

                }
            }

        })
    }
    // Permits to set the position at the end of the action = at the mouseup 
    function endDragFunctionSound() {
        document.addEventListener('mouseup', (event) => {
            if ($soundContainer5.classList.contains("in_progress")) {
                $soundContainer5.classList.remove("in_progress")
                if (event.clientX < 0 + $container.offsetLeft + $soundContainer5.offsetLeft + $soundBar5.offsetLeft) {
                    $fillBarSound5.style.transform = `scaleX(${0})`

                } else if (event.clientX > 0 + $container.offsetLeft + $soundContainer5.offsetLeft + $soundBar5.offsetLeft && event.clientX < $soundBar5.offsetWidth + $container.offsetLeft + $soundContainer5.offsetLeft + $soundBar5.offsetLeft) {
                    $fillBarSound5.style.transform = `scaleX(${(event.clientX-$container.offsetLeft-$soundContainer5.offsetLeft-$soundBar5.offsetLeft)/$soundBar5.offsetWidth})`

                    lGain.gain.value = (event.clientX - $container.offsetLeft - $soundContainer5.offsetLeft - $soundBar5.offsetLeft) / $soundBar5.offsetWidth

                } else {
                    $fillBarSound5.style.transform = `scaleX(${1})`

                }
            }

        })
    }

}
