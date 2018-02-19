jshero.koans.add({

  id: 'arraylength',

  title: 'Array: length',

  lesson: `Die Eigenschaft <code>length</code> hatten wird schon bei Strings kennengelernt. Dort gab sie die Anzahl
der Zeichen eines Strings zurück. Bei Arrays gibt sie die Anzahl der Elemente zurück.

<pre><code>var sprachen = [];
var l0 = sprachen.length;
sprachen[0] = "C";
var l1 = sprachen.length;
sprachen[1] = "C++";
var l2 = sprachen.length;</code></pre>

Das leere Array zu Anfang enthällt keine Elemente. <code>l0</code> ist also <code>0</code>.
Nun füllen wir das Array nach und nach. <code>l1</code> und <code>l2</code> haben dann die Werte <code>1</code> und <code>2</code>.
Beachte: Die Länge eines Arrays ist immer um 1 größer als der höchste Index des Arrays.`,

  task: `Schreibe eine Funktion <code>getLastElement</code>, die ein Array entgegennimmt und die das letzte Element des Arrays zurückgibt.
<code>getLastElement([1, 2])</code> sollte <code>2</code> zurückgeben.`,

  beforeTests: function() {
    if (typeof getLastElement !== "undefined") {
      getLastElement = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('getLastElement');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('getLastElement', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('getLastElement([1, 2])', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('getLastElement(["Hänsel", "Gretel"])', 'Gretel');
    },

    function() {
      return jshero.testutil.assert_functionReturns('getLastElement(["a", "b", "c"])', 'c');
    },

    function() {
      return jshero.testutil.assert_functionReturns('getLastElement(["Maus", 1])', 1);
    },

    function() {
      var testArray = new Array();
      var testArrayString = '[';
      var size = 5;
      for (var i = 0; i < size - 1; i++) {
        testArray[i] = Math.random();
        testArrayString += testArray[i] + ', ';
      }
      testArray[size - 1] = Math.random();
      testArrayString += testArray[size - 1] + ']';
      return jshero.testutil.assert_functionReturns('getLastElement(' + testArrayString + ')', testArray[size - 1]);
    }

  ]

});
