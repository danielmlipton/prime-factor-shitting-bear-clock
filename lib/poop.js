(function() {
  var root = typeof exports !== "undefined" && exports !== null ? 
    exports : this;

  // Get the sprite once.  We're only going to use the style property.
  var sprite = document.querySelector( '#sprite' ).style;

  // Get the shit once.  We're going to use the element, so only get the shit.
  var shit   = document.querySelector( '#shit' );

  root.Poop = (function () {

    function Poop (label) {

      this.label = label;
      this.time = 0;
      this.x_speed = 12;
      this.y_speed = 8;
      this.y_acceleration = 2;
      this.sy = 0;
      this.sx = 0;
      this.sy0 = 100;
      this.sx0 = 260;
      this.vel_x = Math.random() * this.x_speed;
      this.vel_y = Math.random() * this.y_speed;
      this.acc_y = Math.random() * this.y_acceleration;

      this.shit = document.createElement('div');
      this.shit.style.position = 'absolute';
      this.shit.style.color = 'black';
      this.shit.style.fontWeight = 'bold';
      this.shit.style.fontSize = '20pt';
      this.shit.style.top = this.sy0 + "px";
      this.shit.style.left = this.sx0 + "px";
      this.shit.innerHTML = this.label;
      shit.appendChild(this.shit);

      // Don't need to set the width or the height because it's the same for
      // both images.
      sprite.backgroundPosition = '-0px -217px';

      setTimeout( function () {
        sprite.backgroundPosition = '-0px -0px';

        // Don't polute the DOM.
        shit.removeChild( shit.children[ 0 ] );
      }, 500);
      this.animate(0);
    }

    Poop.prototype = {
      animate: function(t) {
        this.sy = this.sy0 + this.vel_y * t + this.acc_y * Math.pow(t, 2) / 2;
        this.sx = this.sx0 + this.vel_x * t;
        this.shit.style.top = this.sy + "px";
        this.shit.style.left = this.sx + "px";
        this.whee();
      },
      whee: function() {
        if (this.sy <= 336 && this.sx <= 593) {
          this.fade(this.time);
          (function(t) {
            setTimeout((function() {
              return t.animate(t.time++);
            }), 50);
          })(this);
        }
      },
      fade: function(i) {
        this.shit.style.opacity = (10 - i) / 10;
        return this.shit.style.filter = 'alpha(opacity=' + (10 - i) * 10 + ')';
      }
    };

    return Poop;
  })();

}).call(this);