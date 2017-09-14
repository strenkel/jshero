jshero.koans.add({

  id: "pi",

  title: "Math.PI",

  lesson: 'Besides functions <code>Math</code> offers some mathematical constants. ' +
    '<code>Math.PI</code> gives &#960; (roughly 3.14) and <code>Math.E</code> gives Euler\'s number e (roughly 2.71).',
        
  task: 'Write a function <code>area</code> that calculates the area of a circle. ' +
    'The function is given the radius of the circle. <code>area(1)</code> should return <code>&#960;</code> and <code>area(2)</code> should return <code>4 * &#960;</code>.',

  beforeTests: function() {
    if (typeof area !== "undefined") {
      area = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof area === 'function';
      var msg;
      if (ok) {
        msg = "<code>area</code> is a funktion.";
      } else {
        msg = "<code>area</code> is not a funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = area.length === 1;
      var msg;
      if (ok) {
        msg = "<code>area</code> has 1 parameter.";
      } else {
        msg = "<code>area</code> has not 1, but " + area.length + " parameters.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = area(1);
        ok = result === Math.PI;
        if (ok) {
          msg = '<code>area(1)</code> returns <code>' + Math.PI + '</code>.';
        } else {
          msg = '<code>area(1)</code> does not return <code>' + Math.PI + '</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Error when calling <code>area(1)</code>.";
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = area(2);
        ok = result === Math.PI * 4;
        if (ok) {
          msg = '<code>area(2)</code> returns <code>' + (Math.PI * 4) + '</code>.';
        } else {
          msg = '<code>area(2)</code> does not return <code>' + (Math.PI *4) + '</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Error when calling <code>area(2)</code>.";
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    }

  ]

});
