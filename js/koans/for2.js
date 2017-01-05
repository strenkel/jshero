(function() {

jshero.koans.add({

  id: 'for2',

  title: 'Schleifen und Arrays',

  lesson: '<code>for</code>-Schleifen eignen sich besonders gut zum Durchlaufen von Arrays. Die folgende Funktion gibt das größte Element eines Arrays zurück:' +
    '<pre><code>function max(a) {<br>' +
    '  var maximum = a[0];<br>' +
    '  for (var i = 1; i < a.length; i++) {<br>' +
    '    if (a[i] > max) {<br>' +  
    '      maximum = a[i];<br>' +
    '    }<br>' +
    '  }<br>' +
    '  return maximum;<br>' +
    '}</code></pre>',
        
  task: 'Schreibe eine Funktion <code>mean</code>, die ein Array gefüllt mit Zahlen entgegennimmt und den Mittelwert dieser Zahlen zurückgibt. ' +
    'Tipp: Um den Mittelwert von n Zahlen zu berechnen, mußt du die Zahlen aufaddieren und die erhaltene Summe durch n teilen. ' +
    '<code>mean([1, 4])</code> sollte <code>(1 + 4)/2 = 2.5</code> ergeben.',

  beforeTests: function() {
    if (typeof mean !== "undefined") {
      mean = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof mean === 'function';
      var msg;
      if (ok) {
        msg = '<code>mean</code> ist eine Funktion.';
      } else {
        msg = '<code>mean</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = mean.length === 1;
      var msg;
      if (ok) {
        msg = '<code>mean</code> hat 1 Parameter.';
      } else {
        msg = '<code>mean</code> hat nicht 1, sondern ' + mean.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = mean([0]);
        ok = result === 0;
        if (ok) {
          msg = '<code>mean([0])</code> gibt <code>0</code> zurück.';
        } else {
          msg = '<code>mean([0])</code> gibt nicht <code>0</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>mean([0])</code>.';
        e = exc;
        console.log(msg, e);
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
        var result = mean([1, 2]);
        ok = result === 1.5;
        if (ok) {
          msg = '<code>mean([1, 2])</code> gibt <code>1.5</code> zurück.';
        } else {
          msg = '<code>mean([1, 2])</code> gibt nicht <code>1.5</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>mean([1, 2])</code>.';
        e = exc;
        console.log(msg, e);
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    }

  ]

});

})();
