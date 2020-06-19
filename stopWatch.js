let counter = 0;
let hourDisplay = document.querySelector(".hour");
let minDisplay = document.querySelector(".minute");
let secDisplay = document.querySelector(".second");
let clock;
const TIME_PART_SECOND = 'SECOND';
const TIME_PART_MINUTE = 'MINUTE';
const ALERT_TIME_COLOR = "red";
const DEFAULT_TIME_COLOR = "white";

let startButton = document.querySelector(".start-button");
startButton.addEventListener('click',() =>{
    console.log("starting timer");
    clock=setInterval(startTimer, 1000);

});


// callback method used in setInterval method
let startTimer = () =>{
    counter++;
   let hoursElapsed = Math.floor(counter / 3600);
   let minsElapsed = (Math.floor(counter/60) % 60);
   let secondsElapsed =Math.floor(counter) % 60;
   
   // change the color of the display font for minutes and seconds if either of them 
   // is 10 seconds or minutes from 60
   checkTimeLeftInTimePart(secondsElapsed, TIME_PART_SECOND);
   checkTimeLeftInTimePart(minsElapsed,TIME_PART_MINUTE);

   //Format the time parts to 01:01:01 if they are less than 10
    secDisplay.textContent=secondsElapsed < 10 ? `0${secondsElapsed}` : secondsElapsed;
    minDisplay.textContent= minsElapsed < 10 ? `0${minsElapsed}` : minsElapsed;
    hourDisplay.textContent = hoursElapsed < 10 ? `0${hoursElapsed}` :hoursElapsed;
}

// stop the timer by clearing the interval
let stopButton = document.querySelector(".stop-button");
stopButton.addEventListener('click', ()=>{
    console.log("Stopping timer");
    clearInterval(clock);
});

// reset the counter to 0 and update the display
let resetButton = document.querySelector(".reset-button");
resetButton.addEventListener('click', ()=> {
    counter=0;
    secDisplay.textContent='00';
    minDisplay.textContent='00';
    hourDisplay.textContent='00';
});

// Function: check if the time part (seconds and minutes) lies between 50 and 60
// change the color to red if the above condition is true
// else change it to the default color
let checkTimeLeftInTimePart = (time, timePart) =>{
    if(time >= 50 && time < 60) {
        changeTimePartFontColor(ALERT_TIME_COLOR, timePart);
    } else {
        changeTimePartFontColor(DEFAULT_TIME_COLOR, timePart);
    }
}

//Function: change the color of the display text for minutes and seconds
let changeTimePartFontColor = (color,timePart) => {
    switch(timePart) {
        case TIME_PART_SECOND:
            secDisplay.style.color = color;
            break;
        case TIME_PART_MINUTE:
            minDisplay.style.color = color;
            break;
        default:
            // do nothing
    }
} 
