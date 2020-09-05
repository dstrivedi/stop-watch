// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
var start = document.getElementById('startBtn');
var stop = document.getElementById('stopBtn');
var reset = document.getElementById('resetBtn');

var secs = parseInt(document.getElementById('seconds').innerHTML);
var mins = parseInt(document.getElementById('mins').innerHTML);

function startTimer() {
  document.getElementById('seconds').innerHTML = secs++;
}

start.addEventListener('click', function() {
  setInterval(startTimer, 1000);
});

stop.addEventListener('click', function() {
  clearInterval(startTimer);
});

reset.addEventListener('click', function() {

});

