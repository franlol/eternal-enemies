'use strict';

class Game {
    
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.player;
        this.enemies = [];
    }

    startLoop() {
        console.log("OUT OF LOOPZ");

        this.player = new Player(this.canvas, 3);
        const loop = () => {

            if (Math.random() > 0.97) {
                const y = Math.random() * this.canvas.height;
                this.enemies.push(new Enemy(this.canvas, y));
            }

            this.checkAllCollisions();
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();
            console.log("LOOPZ");

            window.requestAnimationFrame(loop);
        }
        window.requestAnimationFrame(loop);
    }

    updateCanvas() {
        this.player.update();
        this.enemies.forEach(function(enemy) {
            enemy.update();
        });
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawCanvas() {
        this.player.draw();
        this.enemies.forEach(function(enemy) {
            enemy.draw();
        });
    }

    checkAllCollisions() {
        this.player.checkScreen();
    }
}