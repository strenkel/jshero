jshero.koans.add({

  id: 'array2',

  title: 'Array-Elemente lesen',

  lesson: 'Die Elemente eines Arrays werden mit einem Index beginnend mit 0 ausgelesen. ' +
    '<pre><code>var sprachen = ["C", "C++", "Java", "JavaScript"];<br>' +
    'var c = sprachen[0];<br>' +
    'var cPlusPlus = sprachen[1];<br>' +
    'var java = sprachen[2];<br>' +
    'var javaScript = sprachen[3];',

  task: 'Schreibe eine Funktion <code>getFirstElement</code>, die ein Array entgegennimmt und die das erste Element des Arrays zurückgibt. ' +
    '<code>getFirstElement([1, 2])</code> sollte <code>1</code> zurückgeben.',

  beforeTests: function() {
    if (typeof getFirstElement !== "undefined") {
      getFirstElement = undefined;
    }
  },

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
      return jshero.testutil.assert_functionReturns('getFirstElement(["Hänsel", "Gretel"])', 'Hänsel');
    },

    function() {
      return jshero.testutil.assert_functionReturns('getFirstElement(["Maus", 1])', 'Maus');
    }
  ]

});
