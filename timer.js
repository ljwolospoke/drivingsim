var timer = newTimer();
$("#time .startButton").click(function(){
  timer.start();
});
$("#time .pauseButton").click(function(){
  timer.pause();
});
$("#time .stopButton").click(funciton(){
  timer.stop();
});
$("#time .pauseButton").click(function(){
  timer.pause();
});
timer.addEventListener('secondsUpdated', function (e) {
    $('#time .values').html(timer.getTimeValues().toString());
});
timer.addEventListener('started', function (e) {
    $('#time .values').html(timer.getTimeValues().toString());
});
timer.addEventListener('reset', function (e) {
    $('#time .values').html(timer.getTimeValues().toString());
});
