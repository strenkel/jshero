(function(testutil) {

  jshero.koans.add({

    id: 'log2',

    title: 'Logging variables',

    lesson: `Now let's log variables:

<pre><code>var scientist = 'Ken Thompson';
console.log(scientist);</code></pre>

The variable <code>scientist</code> is logged.
The console outputs <code>'Ken Thompson'</code>.`,

    task: `Write a function <code>log</code>, that takes a parameter and logs this parameter.
<code>log('Ken Thompson')</code> should log <code>'Ken Thompson'</code>.`,

    hint: `<pre><code>var log = function(value) {
  ...
};</code></pre>`,

    solution: `<pre><code>var log = function(value) {
  console.log(value);
};</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isFunction('log');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('log', 1);
      },

      function() {
        return testutil.assert_functionLogs("log('Ken Thompson')", 'Ken Thompson');
      },

      function() {
        return testutil.assert_functionLogs("log('Dennis Ritchie')", 'Dennis Ritchie');
      }

    ]

  });

})(jshero.testutil);