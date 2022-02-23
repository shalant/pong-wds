export default class Paddle {
    const(paddleElem) {
        this.paddleElem = paddleElem
    }

    get position() {
        return parseFloat(
            getComputedStyle(this.paddleElem).getPropertyValue("--position")
        )
    }

    set position(value) {
        this.paddleElem.style.setProperty("--position", value)

    }

    update(delta, ballHeight) {
        this.position = ballHeight
    }
}