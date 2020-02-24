// Constructor Function
function Stopwatch(duration) {
  // propety:
  startTime = duration; // keep the count of the start method
  let timeout;
  // three methods:
  this.reset = function() {
    duration = startTime; // Sets the time back to the starting value
    return 'Reset';
    // reset method can only reset when the start method is called first
  };

  this.start = function() {
    // when the method start is called it can't not start again..
    if (duration >= 1) {
      timeout = setTimeout(sw.start, 1000, duration);
      console.log(duration--);
    }
  };

  this.stop = function() {
    // stop method can only stop when the start method is called first..
    clearTimeout(timeout);
    return 'Stop';
  };

  // getter
  Object.defineProperty(this, 'duration', {
    get: function() {
      clearTimeout(timeout);
      return duration;
    }
  });
}

const sw = new Stopwatch(20);
