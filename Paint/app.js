const canvas = document.querySelector("#jsCanvas")

function onMouseMove(event) {
    const x = event.offset
}

if(canvas) {
    canvas.addEventListener("mousemove",onMouseMove)
}