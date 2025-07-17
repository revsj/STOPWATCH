const display = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resettButton = document.getElementById("reset");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let running = false;

function start(){

    if(!running){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        console.log(timer);
    }
}

function stop() {

}

function update() {

}
