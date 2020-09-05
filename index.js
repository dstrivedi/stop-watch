// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
var start = document.getElementById("startBtn");
var stop = document.getElementById("stopBtn");
var reset = document.getElementById("resetBtn");
var milliseconds = parseInt("00", 8);
var hour = parseInt("00", 8);
var seconds = parseInt("00", 8);
var minutes = parseInt("00", 8);
var timer;

function startTimer() {
  milliseconds++;
  formatTime(milliseconds);

  if(milliseconds >= 100) {
    seconds++;
    milliseconds = "00";
    document.getElementById("milliseconds").innerHTML = milliseconds;
    formatTime(seconds);
  }
 
}

function formatTime(unit) {
  if(unit <= 0) {
    document.getElementById(unit).innerHTML = "0" + unit;
  } else {
    document.getElementById(unit).innerHTML = unit;
  }
}

start.addEventListener("click", function() {
  timer = setInterval(startTimer, 10);
});

stop.addEventListener("click", function() {
  clearInterval(timer);
});

reset.addEventListener("click", function() {
  clearInterval(timer);
  seconds = "00";
  minutes = "00";
  milliseconds = "00";
  hour="00";
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("milliseconds").innerHTML = milliseconds;
  document.getElementById("hour").innerHTML = hour;
});
