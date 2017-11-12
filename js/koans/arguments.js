jshero.koans.add({

  id: 'arguments',

  title: 'Das arguments-Objekt',

  lesson: 'Das <code>arguments</code>-Objekt ist eine in jeder Funktion verfügbare Variable. ' +
    'Es ist ein Array ähnliches Objekt, das die übergebenen Argumente einer Funktion der Reihe nach enthält. ' +
    '<pre><code>' +
    'var add = function() {<br>' +
    '  var arg0 = arguments[0];<br>' +
    '  var arg1 = arguments[1];<br>' +
    '  return arg0 + arg1;<br>' +
    '};<br><br>' +
    'var sum = add(1, 2);' +
    '</code></pre>' +
    'Hier wird <code>add</code> mit den Argumenten <code>1</code> und <code>2</code> aufgerufen. <code>arguments[0]</code> enthält also den Wert <code>1</code>, ' +
    '<code>arguments[1]</code> den Wert <code>2</code>. ' +
    'Mit dem <code>arguments</code>-Objekt kann man ohne Parameter auf die übergebenen Argumente zugreifen. ' +
    'Das ist z.B. dann praktisch, wenn man eine Funktion schreiben möchte, die eine beliebige Anzahl von Argumenten verarbeiten soll.' +
    '<pre><code>' +
    'var add = function() {<br>' +
    '  var sum = 0;<br>' +
    '  for (var i = 0; i < arguments.length; i++) {<br>' +
    '    sum = sum + arguments[i];<br>' +
    '  }<br>' +
    '  return sum;<br>' +
    '};<br><br>' +
    'var s1 = add(2, 4);<br>' +
    'var s2 = add(2, 3, 5, 7);<br>' +
    '</code></pre>' +
    'Hier iterieren wir über alle übergebenen Argumente und summieren sie auf. <code>arguments.length</code> liefert dabei die Anzahl der übergebenen Argumente. ' +
    'Nun können wir <code>add</code> mit einer beliebigen Anzahl von Argumenten aufrufen.',

  task: 'Schreibe eine Funktion <code>maximum</code>, die beliebig viele Zahlen entgegennimmt und das Maximum dieser Zahlen liefert. ' +
    '<code>maximum(12, 68, 3, 52)</code> sollte <code>68</code> ergeben.',

  beforeTests: function() {
    if (typeof maximum !== "undefined") {
      maximum = undefined;
    }
  },

  tests: [

    function() {
      var ok = typeof maximum === 'function';
      var msg;
      if (ok) {
        msg = '<code>maximum</code> ist eine Funktion.';
      } else {
        msg = '<code>maximum</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = maximum(1);
        ok = result === 1;
        if (ok) {
          msg = '<code>maximum(1)</code> gibt <code>1</code> zurück.';
        } else {
          msg = '<code>maximum(1)</code> gibt nicht <code>1</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch (exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>maximum(1)</code>.';
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
        var result = maximum(1, 7, 3, 9, 2);
        ok = result === 9;
        if (ok) {
          msg = '<code>maximum(1, 7, 3, 9, 2)</code> gibt <code>9</code> zurück.';
        } else {
          msg = '<code>maximum(1, 7, 3, 9, 2)</code> gibt nicht <code>9</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch (exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>maximum(1, 7, 3, 9, 2)</code>.';
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
