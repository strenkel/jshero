jshero.koans.add({

  id: 'array3',

  title: 'Array-Elemente schreiben',

  lesson: `Ebenso wie man Array-Elemente über einen Index auslesen kann, kann man sie über diesen Index setzen.
Dabei spielt es keine Rolle, ob das Array vorher gefüllt oder leer war.

<pre><code>var sprachen = [];
sprachen[0] = 'C';
sprachen[1] = 'C++';
sprachen[2] = 'Java';
sprachen[3] = 'JavaScript';</code></pre>

Hier wird ein leeres Array nacheinander mit den aufgeführten Werten gefüllt.`,

  task: `Schreibe eine Funktion <code>setFirstElement</code>, die ein Array und einen beliebigen Wert entgegennimmt.
Der Wert soll als erstes Element in das Array geschrieben werden. Das Array soll dann zurückgegeben werden.<br><br>
Beispiel: <code>setFirstElement([1, 2], 3)</code> sollte <code>[3, 2]</code> zurückgeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('setFirstElement');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('setFirstElement', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('setFirstElement([1, 2], 3)', [3, 2]);
    },

    function() {
      return jshero.testutil.assert_functionReturns("setFirstElement(['Hein', 'Gretel'], 'Hänsel')", ['Hänsel', 'Gretel']);
    },

    function() {
      return jshero.testutil.assert_functionReturns("setFirstElement([1, 'Maus'], 'kleine')", ['kleine', 'Maus']);
    }
  ]

});
