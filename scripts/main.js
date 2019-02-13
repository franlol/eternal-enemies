'use strict';

const main = () => {

    const buildDom = (html) => {
        const main = document.querySelector("main");
        main.innerHTML = html;
        return main;
    };

    const buildSplashScreen = () => {
        const splashScreen = buildDom(`
            <sction class="splash-screen">
                <h1>Eternal Enemies</h1>
                <button id="start-button">Start</button>
            </sction>
        `);
        const startButton = document.getElementById("start-button");
        startButton.addEventListener("click", buildGameScreen);
    };


    const buildGameScreen = () => {
        const gameScreen = buildDom(`
            <section class="game-screen">
                <canvas></canvas>
            </section>
        `);

        const height = document.querySelector(".game-screen").offsetHeight;
        const width = document.querySelector(".game-screen").offsetWidth;

        const canvasElement = document.querySelector("canvas");

        canvasElement.setAttribute("height", height);
        canvasElement.setAttribute("width", width);

        setTimeout(buildGameOver, 3000);
        const game = new Game(canvasElement);
        game.startLoop();
    }

    const buildGameOver = () => {
        const gameOverScreen = buildDom(`
            <section class="game-over">
                <h1>Game-Over Screen</h1>
                <button>Restart</button>
            </section>
        `);
        const restartButton = document.querySelector("button");
        restartButton.addEventListener("click", buildGameScreen)
    }

    buildSplashScreen();
};

window.addEventListener("load", main);