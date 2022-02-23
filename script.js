// update loop- for every frame that passes, we will call a function

import Ball from './Ball.js'

const ball = new Ball(document.getElementById("ball"))

let lastTime

function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
        // Update code
        ball.update(delta)
    }

    lastTime = time
    window.requestAnimationFrame(update)
}

// many programmers might use setInterval, but this is bad practice
// because it is not reliable and may run in between frames

window.requestAnimationFrame(update)