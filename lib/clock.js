(function() {
  var root = typeof exports !== "undefined" && exports !== null ? 
    exports : this;

  root.Clock = (function() {

    function Clock() {}

    Clock.prototype.pad = function(i) {
      var _ref;
      return ((_ref = i < 10) != null ? _ref : {
        "0": ""
      }) + i;
    };

    Clock.prototype.updateClock = function(date) {
      var currentTime = new Date;
      return parseInt([
        this.pad(currentTime.getHours()),
        this.pad(currentTime.getMinutes()),
        this.pad(currentTime.getSeconds())
      ].join(''));
    };

    return Clock;

  })();


}).call(this);