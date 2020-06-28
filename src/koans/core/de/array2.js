jshero.koans.add({

  id: 'array2',

  title: 'Array-Elemente lesen',

  lesson: `Die Elemente eines Arrays werden mit einem Index beginnend mit 0 ausgelesen.

<pre><code>let sprachen = ['C', 'C++', 'Java', 'JavaScript'];
let c = sprachen[0];
let cPlusPlus = sprachen[1];
let java = sprachen[2];
let javaScript = sprachen[3];</code></pre>`,

  task: `Schreibe eine Funktion <code>getFirstElement</code>, die ein Array entgegennimmt und die das erste Element des
Arrays zurückgibt.<br><br>Beispiel: <code>getFirstElement([1, 2])</code> sollte <code>1</code> zurückgeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('getFirstElement');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('getFirstElement', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('getFirstElement([1, 2])', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("getFirstElement(['Hänsel', 'Gretel'])", 'Hänsel');
    },

    function() {
      return jshero.testutil.assert_functionReturns("getFirstElement(['Maus', 1])", 'Maus');
    }
  ]

});
