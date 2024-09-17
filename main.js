const container = document.querySelector(".container");
const timer = document.querySelector(".timer");
let light = true;

setInterval(()=>{
    light = !light
    container.style.boxShadow = light  ? "0 8px 32px 0 rgba(113, 214, 227, 0.874)" : "0 8px 15px rgba(0,0,0,0.4)";
},1000);

setInterval(()=>{
    light = !light
    timer.style.transform = light ? "scale(0.97)" : "scale(1)" ;
},500)

const min =  document.getElementById("min");
const sec =  document.getElementById("sec");
const msec =  document.getElementById("msec");
const laps = document.getElementById("laps")

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener("click",startTimer);
stopBtn.addEventListener("click",stopTimer);
pauseBtn.addEventListener("click",pauseTimer);
resetBtn.addEventListener("click",resetTimer);

let minutes = 0 ;
let seconds = 0 ;
let milliseconds = 0;
let interval ;
let count = 0;

function startTimer(){
 interval = setInterval(updateTimer,10)
 startBtn.disabled =  true;
}

function stopTimer(){
    if(milliseconds || seconds || minutes  !== 0) {
        const ul = document.createElement("ul");
        ul.classList.add("lap-list");
        ul.innerHTML = `<span class="span-title">lap ${++count}: </span>  ${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`
    
        laps.appendChild(ul);
        }
    resetTimer();


}

function pauseTimer(){
    clearInterval(interval);
    display();
    startBtn.disabled = false;
}

function resetTimer(){
   milliseconds = 0;
   seconds = 0 ;
   minutes = 0 ;
   clearInterval(interval);
   display();
   startBtn.disabled = false;
  }
   


function updateTimer(){
    milliseconds++;
    if(milliseconds === 100){
        milliseconds = 0 ;
        seconds++ ;
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }
    display()
}

function display() {
  msec.textContent = padTime(milliseconds);
  sec.textContent = padTime(seconds);
  min.textContent = padTime(minutes);
}

function padTime(time){
  return  time.toString().padStart(2,"0")
}

