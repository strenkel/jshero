jshero.koans.add({

  id: 'array',

  title: 'Creating arrays',

  lesson: `Arrays are objects for storing multiple values. Arrays are preferably created with square brackets.

<pre><code>var languages = ["C", "C++", "Java"];
var primes = [2, 3, 5, 7, 11];
var emptyArray = [];
var a = "Douglas";
var b = 12;
var c = true;
var someValues = [a, b, c];</code></pre>`,

  task: `Write a function <code>toArray</code> that takes 2 values and returns these values in an array.
<code>toArray(5,&nbsp;9)</code> should return the array <code>[5,&nbsp;9]</code>.`,

  beforeTests: function() {
    if (typeof toArray !== "undefined") {
      toArray = undefined;
    }
  },

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('toArray');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('toArray', 2);
    },

    function() {
      var ok, msg, e;
      try {
        var result = toArray(1, 2);
        ok = Array.isArray(result);
        if (ok) {
          msg = '<code>toArray(1, 2)</code> returns an array.';
        } else {
          msg = '<code>toArray(1, 2)</code> does not return an array.';
        }
      } catch (exc) {
        ok = false;
        msg = 'Error when calling <code>toArray(1, 2)</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

    function() {
      return jshero.testutil.assert_functionReturns('toArray(1, 2)', [1, 2]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('toArray("Tom", "Huck")', ["Tom", "Huck"]);
    }

  ]

});
