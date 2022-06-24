jshero.koans.add({

  id: 'slice',

  title: 'Array: slice()',

  lesson: `Mit <code>slice</code> kopiert man aus einem Array ein Teilarray:

<pre><code>let abcd = ['a', 'b', 'c', 'd'];
let ab = abcd.slice(0, 2);
let bc = abcd.slice(1, 3);
let bcd = abcd.slice(1, 4);</code></pre>

Der erste Parameter gibt den Startindex (einschließlich), der zweite den Endindex (ausschließlich) an.
Das ursprüngliche Array wird nicht verändert.`,

  task: `Schreibe eine Funktion <code>halve</code>, die aus einem Array die erste Hälfte kopiert.
Bei einer ungeraden Anzahl von Array-Elementen soll das mittlere Element zu der ersten Hälfte gehören.<br><br>Beispiel:
<code>halve([1,&nbsp;2,&nbsp;3,&nbsp;4])</code> sollte <code>[1,&nbsp;2]</code> zurückgeben.`,

  hint: `Versuche eine Lösung mit der Array-Methode <code>slice()</code>, der Array-Eigenschaft
<a href = 'arraylength.html'>length</a> und der Funktion <a href="round.html">Math.ceil()</a> zu finden.`,

  solution: `<pre><code>function halve(arr) {
  let halfLength = Math.ceil(arr.length/2);
  return arr.slice(0, halfLength);
}</code></pre>`,

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