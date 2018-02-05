jshero.koans.add({

  id: 'stringindexof',

  title: 'String: indexOf()',

  lesson: `To determine the first occurrence of a string within another string, use the <code>indexOf</code> method:

<pre><code>var n1 = "bit".indexOf("it");
var n2 = "bit".indexOf("js");
var n3 = "bit".indexOf("IT");</code></pre>

<code>n1</code> is <code>1</code>, because <code>"it"</code> occurs in <code>"bit"</code> at the 1st place.
As usual, counting starts at 0. <code>indexOf</code> returns <code>-1</code> if the search string does not occur in the calling string.
Thus <code>n2</code> is <code>-1</code>. The <code>indexOf()</code> method is case sensitive. So <code>n3</code> is also <code>-1</code>.`,

  task: `Write a function <code>indexOfIgnoreCase</code>, that accepts two strings
and determines the first occurrence of the second string in the first string. The function should be case insensitive.
<code>indexOfIgnoreCase("bit","it")</code> and <code>indexOfIgnoreCase("bit","IT")</code> should return <code>1</code>.`,

  beforeTests: function() {
    if (typeof indexOfIgnoreCase !== "undefined") {
      indexOfIgnoreCase = undefined;
    }
  },

  tests: [
    function() {
        return jshero.testutil.assert_isFunction('indexOfIgnoreCase');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('indexOfIgnoreCase', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('indexOfIgnoreCase("bit", "bi")', 0);
    },

    function() {
      return jshero.testutil.assert_functionReturns('indexOfIgnoreCase("bit", "it")', 1);
    },

    function() {
        return jshero.testutil.assert_functionReturns('indexOfIgnoreCase("bit", "T")', 2);
    },

    function() {
        return jshero.testutil.assert_functionReturns('indexOfIgnoreCase("bit", "js")', -1);
    }
  ]

});
