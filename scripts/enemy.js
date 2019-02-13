'use strict';

class Enemy {

    constructor(canvas, y) {
        this.size = 20;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = this.canvas.width;
        this.y = y;
        this.speed = 5;
        this.direction = -1;
    }

    update() {
        this.x += (this.direction * this.speed); // es + pq la direction es -1;
    }

    draw() {
        this.ctx.fillStyle = "crimson";
        this.ctx.fillRect(this.x, this.y - this.size / 2, this.size, this.size)
    }

}