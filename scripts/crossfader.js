const crossfeder = document.querySelector('.cross_fader_horizontal_button')

//Make the DIV element draggagle:
dragElement(crossfeder)

function dragElement(elmnt) {

    if (elmnt) {
        /* if present, the header is where you move the DIV from:*/
        elmnt.onmousedown = dragMouseDown
    }

    function dragMouseDown(e) {
        e = e || window.event
        // get the mouse cursor position at startup:

        pos3 = e.clientX
        document.onmouseup = closeDragElement


        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag

    }

    function elementDrag(e) {
        e = e || window.event
        // calculate the new cursor position:

        let pos1 = pos3 - e.clientX
        // set the element's new position:

        if (pos1 <= -52) {
            elmnt.style.transform = "translateY(-50px)"
        } else if (pos1 >= 49) {
            elmnt.style.transform = "translateY(50px)"
        } else {
            elmnt.style.transform = `translateY(${pos1}px)`
        }

        if (elmnt == crossfeder) {
            console.log(pos1)
            ratioVolume = (pos1 / 50) + 1
            //(-pos1) * (1 / 50)
            son.volume = ratioVolume
            son1.volume = (-pos1) * (1 / 50)
        }
        console.log(pos3)
        console.log(e.clientX)
        console.log(pos1)
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null
        document.onmousemove = null
    }
}
