jshero.koans.add({

  id: 'stringindexof2',

  title: 'String: indexOf() with from index',

  lesson: `The <code>indexOf</code> method allows you to specify the position
from which the search should start. This is done with a second parameter.

<pre><code>var n1 = "White Rabbit".indexOf("it", 1);
var n2 = "White Rabbit".indexOf("it", 3);</code></pre>

The first <code>"it"</code> in <code>"White Rabbit"</code> has the index <code>2</code>.
Starting our search at position <code>1</code> it will be found. <code>n1</code> is <code>2</code>.
The second <code>"it"</code> in <code>"White Rabbit"</code> has the index <code>10</code>.
Starting our search at position <code>3</code> it will be found. <code>n2</code> is <code>10</code>.`,

  task: `Write a function <code>secondIndexOf</code>, that accepts two strings
and determines the second occurrence of the second string in the first string.
If the search string does not occur twice, <code>-1</code> should be returned.
<code>secondIndexOf("White Rabbit", "it")</code> should return <code>10</code>.`,

  beforeTests: function() {
    if (typeof secondIndexOf !== "undefined") {
      secondIndexOf = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('secondIndexOf');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('secondIndexOf', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('secondIndexOf("White Rabbit", "it")', 10);
    },

    function() {
      return jshero.testutil.assert_functionReturns('secondIndexOf("White Rabbit", "bit")', -1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('secondIndexOf("Oh dear! Oh dear!", "Oh")', 9);
    }
  ]

});
