jshero.koans.add({

  id: 'xor',

  title: 'XOR',

  lesson: `The Boolean operators have an order: First NOT, then AND, last OR.
If you want to change this order, use parentheses:

<pre><code>var x1 = true || false && false;
var x2 = (true || false) && false;
var x3 = !false && false;
var x4 = !(false && false);</code></pre>

In the 1st line <code>&&</code> is evaluated first. <code>x1</code> is <code>true</code>.
In the 2nd line <code>||</code> is evaluated first. <code>x2</code> is <code>false</code>.
In the 3rd line <code>!</code> is evaluated first. <code>x3</code> is <code>false</code>.
In the 4th line <code>&&</code> is evaluated first. <code>x4</code> is <code>true</code>.<br><br>

In the following task you should code another important gate, the XOR (eXlusive OR) gate.`,

  task: `Write a function <code>xor</code> that takes two Boolean values. If both values are different, the result should be <code>true</code>.
If both values are the same, the result should be <code>false</code>. The calls <code>xor(true, false)</code> and
<code>xor(false, true)</code> should return <code>true</code>.
The calls <code>xor(true, true)</code> and <code>xor(false, false)</code> should return <code>false</code>.`,

  beforeTests: function() {
    if (typeof xor !== 'undefined') {
      xor = undefined;
    }
  },

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('xor');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('xor', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('xor(true, true)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('xor(false, false)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('xor(true, false)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('xor(false, true)', true);
    }

  ]

});
