jshero.koans.add({

  id: 'stringindexof',

  title: 'String: indexOf()',

  lesson: `To determine the first occurrence of a string within another string, use the <code>indexOf</code> method:

<pre><code>'var n1 = "White Rabbit".indexOf("Rabbit");
var n2 = "White Rabbit".indexOf("Coney");
var n3 = "White Rabbit".indexOf("RABBIT");</code></pre>

<code>n1</code> is <code>6</code>, because <code>"Rabbit"</code> occurs in <code>"White Rabbit"</code> at the 6th place.
As usual, counting starts at 0. <code>indexOf</code> returns <code>-1</code> if the search string does not occur in the calling string.
Thus <code>n2</code> is <code>-1</code>. <code>indexOf()</code> is case sensitive. <code>n3</code> is also <code>-1</code>.`,

  task: `Write a function <code>indexOfIgnoreCase</code>, that accepts 2 strings
and determines the first occurrence of the second string in the first string. The function should be case insensitive.
<code>indexOfIgnoreCase ("Rabbit","bit")</code> and <code>indexOfIgnoreCase ("Rabbit","Bit")</code> should return <code>2</code>.`,

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
        return jshero.testutil.assert_functionReturns('indexOfIgnoreCase("Fred Feuerstein", "FEUER")', 5);
    },

    function() {
        return jshero.testutil.assert_functionReturns('indexOfIgnoreCase("WILMA FEUERSTEIN", "feuer")', 6);
    },

    function() {
        return jshero.testutil.assert_functionReturns('indexOfIgnoreCase("JavaScript", "Script")', 4);
    }
  ]

});
