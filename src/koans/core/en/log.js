(function(testutil) {

  jshero.koans.add({

    id: 'log',

    title: 'Logging and Strings',

    lesson: 'Now we want to practice logging together with string concatenation.',

    task: `Write a function <code>shout</code> that takes a string and
returns this string duplicated. In addition, the return should be logged.<br><br>
Example: <code>shout('Fire')</code> should return <code>'FireFire'</code> and should log <code>'FireFire'</code>.`,

    hint: `<pre><code>function shout(word) {
  let result = word + word;
  ...
}</code></pre>`,

    solution: `<pre><code>function shout(word) {
  let result = word + word;
  console.log(result);
  return result;
}</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isFunction('shout');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('shout', 1);
      },

      function() {
        return testutil.assert_functionReturns("shout('Fire')", 'FireFire');
      },

      function() {
        return testutil.assert_functionLogs("shout('Fire')", 'FireFire');
      },

      function() {
        return testutil.assert_functionReturns("shout('Run')", 'RunRun');
      },

      function() {
        return testutil.assert_functionLogs("shout('Run')", 'RunRun');
      }

    ]

  });

})(jshero.testutil);
