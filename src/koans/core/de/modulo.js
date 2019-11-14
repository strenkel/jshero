jshero.koans.add({

  id: 'modulo',

  title: 'Modulo',

  lesson: 'Ein weiterer arithmetischer Operator ist Modulo. Er berechnet den Rest einer Division und wird mit dem Prozentzeichen <code>%</code> notiert.' +
    '<pre><code>var x = 7 % 2;<br>' +
    'var y = 20 % 3;</code></pre>' +
    '7 geteilt durch 2 ergibt 3 Rest 1. <code>x</code> ist also <code>1</code>.<br>' +
    '20 geteilt durch 3 ergibt 6 Rest 2. <code>y</code> ist also <code>2</code>.',

  task: 'Schreibe eine Funktion <code>einer</code>, die eine natürliche Zahl entgegenimmt und die Ziffer der Einer-Stelle zurückgibt. ' +
    '<code>einer(2674)</code> sollte <code>4</code> zurückgeben.',

  hint: `<pre><code>var einer = function(n) {
// Benutze Modulo 10.  
};</code></pre>`,

  solution: `<pre><code>var einer = function(n) {
  return n % 10;
};</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('einer');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('einer', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('einer(3)', 3);
    },

    function() {
      return jshero.testutil.assert_functionReturns('einer(17)', 7);
    },

    function() {
      return jshero.testutil.assert_functionReturns('einer(210)', 0);
    },

    function() {
      return jshero.testutil.assert_functionReturns('einer(2674)', 4);
    }
  ]

});
