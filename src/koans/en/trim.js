jshero.koans.add({

  id: 'trim',

  title: 'String: trim()',

  lesson: `The <code>trim</code> method removes whitespaces from both ends of a string.

<pre><code>var input = ' Rosa Parks ';
var name = input.trim();</code></pre>

<code>name</code> contains the string <code>'Rosa Parks'</code>.
Notice that <code>input</code> still contains the string <code>' Rosa Parks '</code>.`,

  task: `Write a function <code>firstChar</code>, which returns the first character that is not a space
when a string is passed. <code>firstChar(' Rosa Parks ')</code> should return <code>'R'</code>.`,

  hint: `<pre><code>var firstChar = function(text) {
// Trim first.
// Then use the
// charAt method.
};</code></pre>`,

  solution: `<pre><code>var firstChar = function(text) {
  var trimmedText = text.trim();
  return trimmedText.charAt(0);
};</code></pre>`,

  beforeTests: function() {
    if (typeof firstChar !== 'undefined') {
      firstChar = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('firstChar');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('firstChar', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("firstChar('Rosa')", 'R');
    },

    function() {
      return jshero.testutil.assert_functionReturns("firstChar(' Louise')", 'L');
    },

    function() {
      return jshero.testutil.assert_functionReturns("firstChar('  Parks')", 'P');
    }
  ]

});
