const display = document.getElementById("time");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let running = false;

function start(){

    if(!running){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        running = true;
    }
}

function stop() {
    if(running) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        running = false;
    }

}

function reset() {
  if(!running) {
     clearInterval(timer);
     startTime = 0;
     elapsedTime = 0;
     timer = null;
      display.textContent = "00:00:00:00";
      running = false;
    }

}

function update() {
 

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60 );
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

hours = String(hours).padStart(2, "0");
minutes = String(minutes).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");
milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
