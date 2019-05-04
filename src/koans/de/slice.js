jshero.koans.add({

  id: 'slice',

  title: 'Array: slice()',

  lesson: `Mit <code>slice</code> kopiert man aus einem Array ein Teilarray:

<pre><code>var abcd = ['a', 'b', 'c', 'd'];
var ab = abcd.slice(0, 2);
var bc = abcd.slice(1, 3);
var bcd = abcd.slice(1, 4);</code></pre>

Der erste Parameter gibt den Startindex (einschließlich), der zweite den Endindex (ausschließlich) an.
Das ursprüngliche Array wird nicht verändert.`,

  task: `Schreibe eine Funktion <code>halve</code>, die aus einem Array die erste Hälfte kopiert.
Bei einer ungeraden Anzahl von Array-Elementen soll das mittlere Element zu der ersten Hälfte gehören.
<code>halve([1,&nbsp;2,&nbsp;3,&nbsp;4])</code> sollte <code>[1,&nbsp;2]</code> zurückgeben.`,

  beforeTests: function() {
    if (typeof halve !== 'undefined') {
      halve = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('halve');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('halve', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('halve([1, 2])', [1]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('halve([1, 2, 3])', [1, 2]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('halve([1, 2, 3, 4])', [1, 2]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('halve([1, 2, 3, 4, 5])', [1, 2, 3]);
    }

  ]

});