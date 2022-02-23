// update loop- for every frame that passes, we will call a function

import Ball from './Ball.js'
import Paddle from './Paddle.js'

const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))

let lastTime

function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
        // Update code
        // ball.update(delta)
        computerPaddle.update(delta, ball.y)
    }

    lastTime = time
    window.requestAnimationFrame(update)
}

document.addEventListener("mousemove", e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100
})

// many programmers might use setInterval, but this is bad practice
// because it is not reliable and may run in between frames

window.requestAnimationFrame(update)