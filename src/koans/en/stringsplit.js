jshero.koans.add({

  id: 'stringsplit',

  title: 'String: split()',

  lesson: `The <code>split</code> method splits a string into substrings using a separator string.
The substrings are returned as an array. The original string is not changed.

<pre><code>var date = '31-10-2017';
var parts = date.split('-');
var day = parts[0]; // '31'
var month = parts[1]; // '10'
var year = parts[2]; // '2017'</code></pre>

Here, the separator string is the hyphen. It splits the date string into three parts.
These three parts are assigned as an array to the variable <code>parts</code>.
Afterwards, the individual parts are assigned to separate variables.`,

  task: `Write a function <code>add</code> that takes a string with a summation task and returns its result as a
number. The summation task is a string of the form '1+19+...+281'.
<code>add('7+12+100')</code> should return <code>119</code>.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('add');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('add', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("add('1+2')", 3);
    },

    function() {
      return jshero.testutil.assert_functionReturns("add('12+5+1+10')", 28);
    },

    function() {
      return jshero.testutil.assert_functionReturns("add('13+2+4+100+3')", 122);
    },

    function() {
      return jshero.testutil.assert_functionReturns("add('50000+4000+300+20+1')", 54321);
    }

  ]

});
