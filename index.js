// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
var start = document.getElementById('startBtn');
var stop = document.getElementById('stopBtn');
var reset = document.getElementById('resetBtn');

var secs = parseInt(document.getElementById('seconds').innerHTML);
var mins = parseInt(document.getElementById('mins').innerHTML);

var timer;

function startTimer() {
  document.getElementById('seconds').innerHTML = secs++;
}

start.addEventListener('click', function() {
  timer = setInterval(startTimer, 1000);
});

stop.addEventListener('click', function() {
  clearInterval(timer);
});

reset.addEventListener('click', function() {
  document.getElementById('seconds').innerHTML = "00";
  document.getElementById('mins').innerHTML = "00";
});

