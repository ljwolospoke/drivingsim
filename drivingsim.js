var carsimulator = (function() {

  // this is the internal state of the model
  // no one can access this directly
  var carX = 100;
  var carY = 500;


  //setInterval(function() {
    //carX += 1;
    //carY += 1;
    //notify();
  //}, 35);
  // store all the listeners
  // we have to call all of them if something changes
  var listeners = [];

  // this function registers/adds a listener
  function listen(cb) {
    // collect them in the listeners array
    listeners.push(cb);
  }

  // notify all listeners of a change to the grid
  function notify() {
    // iterate through the array and call the listen callback function
    for (var i = 0; i < listeners.length; i++) {
      // call the function
      listeners[i](carX, carY);
    }
  }

  // all functionality is accessed through the methods below
  return {
    listen: listen
  };



})();
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)//change to 10
        seconds = parseInt(timer % 60, 10);//to go down from 1 minute

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var oneMinutes = 60 * 1,//start at 1 minute
        display = document.querySelector('#time');
    startTimer(oneMinutes, display);

};
