(function(testutil) {

  jshero.koans.add({

    id: "number",

    title: "Numbers",

    lesson: 'Numbers are represented by simple numerals. They can have a decimal point and a minus sign.' +
      '<pre><code>var x1 = 1;<br>var x2 = 1.0;<br>var x3 = 3.14;<br>var x4 = -1;</code></pre>' +
      '<code>1</code> and <code>1.0</code> are the same number. ' +
      'You can calculate with numbers. The four basic arithmetics adding, subtracting, multiplying and dividing are represented by ' +
      '<code> + - * </code> and <code>/</code>.' +
      '<pre><code>var x1 = 6;<br>var x2 = 2;<br>var x3 = x1 + x2;<br>var x4 = x1 - x2;<br>var x5 = x1 * x2;<br>var x6 = x1 / x2;</code></pre>' +
      'The variables <code>x3</code> to <code>x6</code> thus have the values <code>8</code>, <code>4</code>, <code>12</code> and <code>3</code>.',

    task: 'Write a function <code>add</code> that takes two numbers and returns their sum. ' +
      '<code>add(1,&nbsp;2)</code> should return <code>3</code>.',

    beforeTests: function() {
      if (typeof add !== "undefined") {
        add = undefined;
      }
    },

    hint: `<pre><code>var add = function(x, y) {
  return ...
};</code></pre>`,

    solution: `<pre><code>var add = function(x, y) {
  return x + y;
};</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isFunction('add');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('add', 2);
      },

      function() {
        return testutil.assert_functionReturns('add(0, 0)', 0);
      },

      function() {
        return testutil.assert_functionReturns('add(2, 3)', 5);
      }

    ]

  });

})(jshero.testutil);