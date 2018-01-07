jshero.koans.add({

  id: "round",

  title: "Rounding",

  lesson: `If you want to round a number, you can use the
<code>Math.round()</code>, <code>Math.floor()</code> and <code>Math.ceil()</code> functions.

<pre><code>var a = Math.round(5.49);
var b = Math.round(4.5);
var c = Math.floor(5.99);
var d = Math.ceil(4.01);</code></pre>

<code>Math.round()</code> rounds a number to the nearest integer,
<code>Math.floor()</code> rounds a number downwards to the nearest integer and
<code>Math.ceil()</code> rounds a number upwards to the nearest integer.
Therefore, the variables <code>a</code> to <code>d</code> all get the value <code>5</code>.`,

  task: `Write a function <code>round100</code> that rounds a number to the nearest hundred.
<code>round100(1749)</code> should return <code>1700</code> and <code>round100(856.12)</code> should return <code>900</code>.`,

  beforeTests: function() {
    if (typeof round100 !== "undefined") {
      round100 = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('round100');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('round100', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('round100(49.999)', 0);
    },

    function() {
      return jshero.testutil.assert_functionReturns('round100(650)', 700);
    }

  ]

});
