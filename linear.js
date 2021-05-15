const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const height = canvas.height = window.innerHeight
const width = canvas.width = window.innerWidth
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function Ball(x, y, velX, velY, color, size) {
    this.x = x
    this.y = y
    this.velX = velX
    this.velY = velY
    this.color = color
    this.size = size
}
Ball.prototype.draw = function () {
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.fill()
}

// handling canvas edges and updating ball position
Ball.prototype.update = function () {
    if (this.x + this.size >= width) {
        this.velX = -(this.velX)
    }
    if (this.y + this.size >= height) {
        this.velY = -(this.velY)
    }
    if (this.x - this.size <= 0) {
        this.velX = -(this.velX)
    }
    if (this.y - this.size <= 0) {
        this.velY = -(this.velY)
    }
    this.x += this.velX;
    this.y += this.velY;

}
//creating an array of balls
let balls = [];

while (balls.length < 25) {
    let size = random(10, 20);
    let ball = new Ball(
        // ball position always drawn at least one ball width
        // away from the edge of the canvas, to avoid drawing errors
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
        size
    );

    balls.push(ball);
}
//
Ball.prototype.collision = function () {

    for (ball of balls) {
        if (!(this === ball)) {
            const distance = Math.sqrt((this.x - ball.x) ** 2 + (this.y - ball.y) ** 2)
            if (distance < (this.size + ball.size)){
                this.color = ball.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')'
            }
    }
    }
}

function drawing() {
    ctx.fillStyle = '#e7e8eb'
    ctx.fillRect(0, 0, width, height);

    for (b of balls) {
        b.draw()
        b.update()
        b.collision()
    }
    requestAnimationFrame(drawing)
}
drawing()

