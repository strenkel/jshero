jshero.koans.add({

  id: "number",

  title: "Zahlen",

  lesson: `Zahlen werden in JavaScript durch einfache Ziffern dargestellt. Sie können einen
Dezimalpunkt und ein Minuszeichen besitzen.

<pre><code>var x1 = 1;
var x2 = 1.0;
var x3 = 3.14;
var x4 = -1;</code></pre>

<code>1</code> und <code>1.0</code> sind dieselbe Zahl. Mit Zahlen kann man rechnen. Die
vier Grundrechenarten Addieren, Subtrahieren, Multiplizieren und Dividieren werden durch
<code>+ - *</code> und <code>/</code> dargestellt.

<pre><code>var x1 = 6;
var x2 = 2;
var x3 = x1 + x2;
var x4 = x1 - x2;
var x5 = x1 * x2;
var x6 = x1 / x2;</code></pre>

Die Variablen <code>x3</code> bis <code>x6</code> haben so die Werte <code>8</code>,
<code>4</code>, <code>12</code> und <code>3</code>.`,

  task: `Schreibe eine Funktion <code>add</code>, die zwei Zahlen als Parameter entgegennimmt
und deren Summe zurückgibt. <code>add(1, 2)</code> sollte <code>3</code> ergeben.`,

  hint: `<pre><code>var add = function(x, y) {
  return ...
};`,

  solution: `<pre><code>var add = function(x, y) {
  return x + y;
};`,

  beforeTests: function() {
    if (typeof add !== "undefined") {
      add = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('add');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('add', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('add(0, 0)', 0);
    },

    function() {
      return jshero.testutil.assert_functionReturns('add(2, 3)', 5);
    },

    function() {
      return jshero.testutil.assert_functionReturns('add(-1, 3)', 2);
    }

  ]

});
