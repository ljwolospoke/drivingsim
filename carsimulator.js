// this is the model
// is should NOT contain any html or css
var carsimulator = (function() {

  // this is the internal state of the model
  // no one can access this directly
  var carX = 100;
  var carY = 500;

  setInterval(function() {
    carX += 1;
    //carY += 1;
    notify();
  }, 35);

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
