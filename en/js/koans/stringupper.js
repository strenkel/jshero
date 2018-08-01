jshero.koans.add({

  id: 'stringupper',

  title: 'String: toUpperCase()',

  lesson: `In addition to the <code>length</code> property, strings have methods.
These are functions that are applied to the string. Like the <code>length</code> property,
these methods are appended with a point to the string or to a variable that contains a string.
The arguments enclosed in parentheses follow. Two of these string methods are the parameterless
methods <code>toUpperCase</code> and <code>toLowerCase</code>. They return the string in
uppercase or lowercase.

<pre><code>var town = "Mthatha";
var output = town.toUpperCase();</code/></pre>

<code>output</code> has the value <code>"MTHATHA"</code>.
<code>town</code> still has the value <code>"Mthatha"</code>.

<pre><code>output = town.toLowerCase();</code/></pre>

Now <code>output</code> has the value <code>"mthatha"</code>.`,

  task: `Write a function <code>toCase</code> that takes a string and returns that string in
lowercase and uppercase with <code>-</code> as delimiter.
<code>toCase("Mthatha")</code> should return <code>"mthatha-MTHATHA"</code>.`,

  beforeTests: function() {
    if (typeof toCase !== "undefined") {
      toCase = undefined;
    }
  },

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('toCase');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('toCase', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('toCase("Mthatha")', "mthatha-MTHATHA");
    },

    function() {
      return jshero.testutil.assert_functionReturns('toCase("Johannesburg")', "johannesburg-JOHANNESBURG");
    }

  ]

});
