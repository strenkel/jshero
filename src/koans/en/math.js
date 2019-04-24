(function(testutil) {

  jshero.koans.add({

    id: "math",

    title: "Math",

    lesson: `Many mathematical functions are grouped together in the <code>Math</code> object.
For example, <code>Math.sqrt(x)</code> returns the square root
and <code>Math.pow(x, y)</code> calculates x to the power of y.

<pre><code>var y1 = Math.sqrt(9);
var y2 = Math.pow(10, 3);</code></pre>

<code>y1</code> has the value <code>3</code> and <code>y2</code> has the value <code>1000</code>
(10&sup3; = 10 * 10 * 10 = 1000).`,

    task: `Write a function <code>hypotenuse</code> that calculates the length of the hypotenuse
of a right triangle. The length of the two legs is passed to the function. Tip: In a right
triangle the Pythagorean theorem is valid. If a and b are the lengths of the two legs and c
is the length of the hypotenuse, the following is true: a&sup2; + b&sup2; = c&sup2;.
Since 3&sup2; + 4&sup2; = 5&sup2; applies, <code>hypotenuse(3,&nbsp;4)</code> should return <code>5</code>.`,

    hint: `<pre><code>var hypotenuse = function(a, b) {
  var cSquare = Math.pow(a, 2) + Math.pow(b, 2);
  return ...
};</code></pre>`,

    solution: `<pre><code>var hypotenuse = function(a, b) {
  var cSquare = Math.pow(a, 2) + Math.pow(b, 2);
  return Math.sqrt(cSquare);
};</code></pre>`,

    beforeTests: function() {
      if (typeof hypotenuse !== "undefined") {
        hypotenuse = undefined;
      }
    },

    tests: [

      function() {
        return testutil.assert_isFunction('hypotenuse');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('hypotenuse', 2);
      },

      function() {
        return testutil.assert_functionReturns('hypotenuse(3, 4)', 5);
      },

      function() {
        return testutil.assert_functionReturns('hypotenuse(5, 12)', 13);
      }

    ]

  });

})(jshero.testutil);