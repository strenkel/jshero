jshero.koans.add({

  id: 'array2',

  title: 'Array-Elemente lesen',

  lesson: `Die Elemente eines Arrays werden mit einem Index beginnend mit 0 ausgelesen.

<pre><code>var sprachen = ['C', 'C++', 'Java', 'JavaScript'];
var c = sprachen[0];
var cPlusPlus = sprachen[1];
var java = sprachen[2];
var javaScript = sprachen[3];</code></pre>`,

  task: `Schreibe eine Funktion <code>getFirstElement</code>, die ein Array entgegennimmt und die das erste Element des Arrays zurückgibt.
<code>getFirstElement([1, 2])</code> sollte <code>1</code> zurückgeben.`,

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
