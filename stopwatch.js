// Constructor Function
function Stopwatch(duration) {
  startTime = duration; // keep the count of the start method
  let timeout;

  this.reset = function() {
    duration = startTime; // Sets the time back to the starting value
    return 'Reset';
  };

  this.start = function() {
    if (duration >= 1) {
      timeout = setTimeout(sw.start, 1000, duration);
      duration--;
      document.getElementById('result').innerHTML = duration;
    }
  };

  this.stop = function() {
    clearTimeout(timeout);
    return 'Stop';
  };

  this.read = function() {
    duration = document.getElementById('num').value;
    return 'read';
  };

  // getter and setter
  Object.defineProperty(this, 'duration', {
    get: function() {
      clearTimeout(timeout);
      return duration;
    },
    set: function(value) {
      duration = value;
    }
  });
}

const sw = new Stopwatch();
