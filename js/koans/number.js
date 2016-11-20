jshero.koans.add({

  id: "number",

  title: "Zahlen",

  lesson: 'Zahlen werden in JavaScript durch einfache Ziffern dargestellt. Sie können einen Dezimalpunkt und ein Minuszeichen besitzen.' +
  '<pre><code>var x1 = 1;<br>var x2 = 1.0;<br>var x3 = 3.14;<br>var x4 = -1;</code></pre>' +
  '<code>1</code> und <code>1.0</code> sind dieselbe Zahl. ' +
  'Mit Zahlen kann man rechnen. Die vier Grundrechenarten Addieren, Subtrahieren, Multiplizieren und Dividieren werden durch ' +
  '<code>+ - *</code> und <code>/</code> dargestellt.' + 
  '<pre><code>var x1 = 6;<br>var x2 = 2;<br>var x3 = x1 + x2;<br>var x4 = x1 - x2;<br>var x5 = x1 * x2;<br>var x6 = x1 / x2;</code></pre>' +
  'Die Variablen <code>x3</code> bis <code>x6</code> haben so die Werte <code>8</code>, <code>4</code>, <code>12</code> und <code>3</code>.', 
        
  task: 'Schreibe eine Funktion <code>add</code>, die zwei Zahlen als Parameter entgegennimmt und deren Summe zurückgibt. ' +
  '<code>add(1, 2)</code> sollte <code>3</code> ergeben.',

  beforeTests: function() {
    if (typeof add !== "undefined") {
      add = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof add === 'function';
      var msg;
      if (ok) {
        msg = "<code>add</code> ist eine Funktion.";
      } else {
        msg = "<code>add</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = add.length === 2;
      var msg;
      if (ok) {
        msg = "<code>add</code> hat zwei Parameter.";
      } else {
        msg = "<code>add</code> hat nicht 2, sondern " + add.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg;
      try {
        var result = add(0, 0);
        ok = result === 0;
        if (ok) {
          msg = '<code>add(0, 0)</code> ergibt <code>0</code>.';
        } else {
          msg = '<code>add(0, 0)</code> ergibt nicht <code>0</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>add(0, 0)</code>.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = add(2, 3);
        ok = result === 5;
        if (ok) {
          msg = '<code>add(2, 3)</code> ergibt <code>5</code>.';
        } else {
          msg = '<code>add(2, 3)</code> ergibt nicht <code>5</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>add(2, 3)</code>.";
      }
      return {
        ok: ok,
        msg: msg
      };
    }

  ]

});
