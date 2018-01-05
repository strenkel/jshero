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
      return jshero.testutil.assert_isFunction('maximum');
    },

    function() {
      return jshero.testutil.assert_functionReturns('maximum()', '');
    },

    function() {
      return jshero.testutil.assert_functionReturns('maximum(1)', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('maximum(15, 2)', 15);
    },

    function() {
      return jshero.testutil.assert_functionReturns('maximum(1, 15)', 15);
    },

    function() {
      return jshero.testutil.assert_functionReturns('maximum(1, 7, 3, 9, 2)', 9);
    }
  ]

});
