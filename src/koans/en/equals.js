jshero.koans.add({

  id: 'equals',

  title: 'Strict equality',

  lesson: `Two values can be checked for strict equality. The result of such a comparison is either <code>true</code>,
the two values are equal, or <code>false</code>, the two values are not equal. The operator for strict equality
is&nbsp;<code>===</code>.

<pre><code>var language = 'JavaScript';
var x = 10;
var c1 = language === 'Java';
var c2 = x === 10;
var c3 = x === '10';</code></pre>

The first comparison results in <code>false</code>, because <code>language</code> does not have the value
<code>'Java'</code>. So <code>c1</code> is <code>false</code>. The second comparison results in <code>true</code>,
because the value of <code>x</code> equals <code>10</code>. So <code>c2</code> is <code>true</code>.
In the case of strict equality, it is also important that the two compared values have the same data type.
<code>c3</code> is <code>false</code>, because different data types are compared here.
On the left side of the comparison is a number, on the right side a string.`,

  task: `Write a function <code>equals</code> that checks two values for strict equality. <code>equals(1, 1)</code>
should return <code>true</code> and <code>equals(1, 2)</code> should return <code>false</code>.`,

  hint: `<pre><code>var equals = function(a, b) {
  return ...
};</code></pre>`,

  solution: `<pre><code>var equals = function(a, b) {
  return a === b;
};</code></pre>`,

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('equals');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('equals', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('equals(1, 1)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("equals(1, '1')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('equals(1, 2)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("equals('sun', 'sun')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("equals('left', 'right')", false);
    }

  ]

});
