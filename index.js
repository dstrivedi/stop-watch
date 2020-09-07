// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
var start = document.getElementById("startBtn");
var stop = document.getElementById("stopBtn");
var reset = document.getElementById("resetBtn");
var secs = document.getElementById("seconds");
var min = document.getElementById("mins");
var millisecs = document.getElementById("milliseconds");
var hr = document.getElementById("hour");
var milliseconds = parseInt("00", 8);
var hour = parseInt("00", 8);
var seconds = parseInt("00", 8);
var minutes = parseInt("00", 8);
var timer;

function startTimer() {
  milliseconds++;
  formatTime(milliseconds, millisecs);

  if(milliseconds >= 100) {
    seconds++;
    milliseconds = "00";
    document.getElementById("milliseconds").innerHTML = milliseconds;
    formatTime(seconds, secs);
  }

  if(seconds >= 60) {
    minutes++;
    seconds = "00";
    document.getElementById("seconds").innerHTML = seconds;
    formatTime(minutes, min);
  }

  if(minutes >= 60) {
    hour++;
    minutes = "00";
    document.getElementById("hour").innerHTML = hour;
    formatTime(hour, hr);
  }
 
}

function formatTime(unit, form) {
  if(unit <= 9) {
    form.innerHTML = "0" + unit;
  } else {
    form.innerHTML = unit;
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
