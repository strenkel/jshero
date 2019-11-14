jshero.koans.add({

  id: 'greaterthan',

  title: 'Compare numbers',

  lesson: `Numbers can be compared with the well-known mathematical symbols.
In the following examples, all expressions return the value <code>true</code>.
<pre><code>var v1 = 5 > 4;
var v2 = 5 >= 5;
var v3 = 5 < 6;
var v4 = 5 <= 5;</code></pre>`,

  task: `Write a function <code>isThreeDigit</code> that checks if a number is greater than
or equal to 100 and less than 1000. <code>isThreeDigit(500)</code> should return <code>true</code>.
The call <code>isThreeDigit(50)</code> should return <code>false</code>.`,

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('isThreeDigit');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('isThreeDigit', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isThreeDigit(100)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isThreeDigit(999)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isThreeDigit(99)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isThreeDigit(1000)', false);
    }

  ]

});
