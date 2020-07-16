jshero.koans.add({

  id: 'number',

  title: 'Zahlen',

  lesson: `Zahlen werden in JavaScript durch einfache Ziffern dargestellt. Sie können einen
Dezimalpunkt und ein Minuszeichen besitzen.

<pre><code>let x1 = 1;
let x2 = 1.0;
let x3 = 3.14;
let x4 = -1;</code></pre>

<code>1</code> und <code>1.0</code> sind dieselbe Zahl. Mit Zahlen kann man rechnen. Die
vier Grundrechenarten Addieren, Subtrahieren, Multiplizieren und Dividieren werden durch
<code>+ - *</code> und <code>/</code> dargestellt.

<pre><code>let x1 = 6;
let x2 = 2;
let x3 = x1 + x2;
let x4 = x1 - x2;
let x5 = x1 * x2;
let x6 = x1 / x2;</code></pre>

Die Variablen <code>x3</code> bis <code>x6</code> haben so die Werte <code>8</code>,
<code>4</code>, <code>12</code> und <code>3</code>.`,

  task: `Schreibe eine Funktion <code>add</code>, die zwei Zahlen als Parameter entgegennimmt
und deren Summe zurückgibt.<br><br>Beispiel: <code>add(1, 2)</code> sollte <code>3</code> ergeben.`,

  hint: `<pre><code>function add(x, y) {
  return ...
}</code></pre>`,

  solution: `<pre><code>function add(x, y) {
  return x + y;
}</code></pre>`,

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
