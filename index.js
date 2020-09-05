// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
var start = document.getElementById("startBtn");
var stop = document.getElementById("stopBtn");
var reset = document.getElementById("resetBtn");
var seconds = parseInt("00", 8);
var minutes = parseInt("00", 8);
var secs = parseInt(document.getElementById("seconds").innerHTML);
var mins = parseInt(document.getElementById("mins").innerHTML);

var timer;

function startTimer() {
  seconds++;
  if (seconds <= 9) {
    document.getElementById("seconds").innerHTML = "0" + seconds;
  } else {
    document.getElementById("seconds").innerHTML = seconds;
  }
  if (seconds >= 60) {
    minutes++;
    seconds = "00";
  }
}

start.addEventListener("click", function() {
  timer = setInterval(startTimer, 1000);
});

stop.addEventListener("click", function() {
  clearInterval(timer);
});

reset.addEventListener("click", function() {
  clearInterval(timer);
  seconds = "00";
  minutes = "00";
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("mins").innerHTML = minutes;
});
