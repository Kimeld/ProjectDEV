const volumeb = document.querySelector('.volume_b_button')
const graduation = document.querySelector('.volume_b12')
const buttonVolume = document.querySelector(".volume_b_button")
const buttonVolumeL = document.querySelector('.volume_a_button')
const buttonTempoRight = document.querySelector('.tempo_right_button')
const buttonTempoLeft = document.querySelector('.tempo_left_button')

//Make the DIV element draggagle:
dragElement(buttonVolume)
dragElement(buttonVolumeL)
dragElement(buttonTempoLeft)
dragElement(buttonTempoRight)

function dragElement(elmnt) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0
    if (elmnt) {
        /* if present, the header is where you move the DIV from:*/
        elmnt.onmousedown = dragMouseDown
    }

    function dragMouseDown(e) {
        e = e || window.event
        // get the mouse cursor position at startup:
        pos4 = e.clientY

        document.onmouseup = closeDragElement


        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag

    }

    function elementDrag(e) {
        e = e || window.event
        // calculate the new cursor position:
        pos2 = pos4 - e.clientY
        pos4 = e.clientY

        // set the element's new position:
        if (elmnt == buttonVolume) {

            if (pos4 <= 370) {
                elmnt.style.top = 26 + "px"
            } else if (pos4 >= 517) {
                elmnt.style.top = 177 + "px"
            } else {
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px"
            }

        }

        if (elmnt == buttonVolumeL) {

            if (pos4 <= 370) {
                elmnt.style.top = 26 + "px"
            } else if (pos4 >= 517) {
                elmnt.style.top = 177 + "px"
            } else {
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px"
            }

        }

        if (elmnt == buttonTempoLeft) {

            if (pos4 <= 146) {
                elmnt.style.top = 26 + "px"
            } else if (pos4 >= 306) {
                elmnt.style.top = 177 + "px"
            } else {
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px"
            }

        }

        if (elmnt == buttonTempoRight) {

            if (pos4 <= 146) {
                elmnt.style.top = 26 + "px"
            } else if (pos4 >= 306) {
                elmnt.style.top = 177 + "px"
            } else {
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px"
            }

        }
        if (elmnt == buttonVolumeL) {

            ratioVolume = (pos4 - 370) / 147
            son.volume = ratioVolume
        }
        if (elmnt == buttonTempoLeft) {
            console.log(pos4)
            ratioTempoLeft = (pos4 - 146) / 160
            son.playbackRate = ratioTempoLeft
        }
        if (elmnt == buttonVolume) {

            ratioVolume = (pos4 - 370) / 147
            son1.volume = ratioVolume
        }
        if (elmnt == buttonTempoRight) {
            console.log(pos4)
            ratioTempoLeft = (pos4 - 146) / 160
            son1.playbackRate = ratioTempoLeft
        }
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null
        document.onmousemove = null
    }
}
