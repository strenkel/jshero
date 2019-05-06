(function(testutil) {

  jshero.koans.add({

    id: 'log1',

    title: 'Logging',

    lesson: `Programming always includes the search for errors.
One way to find errors is logging.
During program execution, selective outputs are made.
To do this in JavaScript, use the <code>console.log</code> function:

<pre><code>console.log('Hello console!');</code></pre>

Here, <code>console.log</code> outputs <code>'Hello console!'</code>.
Where you can see the output depends on your JavaScript environment.
In browsers you do not see the log normally.
But most desktop browsers have so-called
<a href='https://en.wikipedia.org/wiki/Web_development_tools'>developer tools</a>.
These are powerful tools to support web developers. One of these tools is the console.
The log is displayed there. How to open the developer tools depends on your browser.
On many desktop browsers, they are opened with the F12 key.
You can then select the console as a tab. Alternatively, you can open the console via the browser menu.
The developer tools are not available on mobile devices.
Therefore JS Hero writes the log additionally into the test output.`,

    task: `Write a function <code>log</code> that logs <code>'Hello Console!'</code>.
If you are working with a desktop browser, open the developer tools to see the output there as well.`,

    hint: `<pre><code>var log = function() {
  console.log(...);
};</code></pre>`,

    solution: `<pre><code>var log = function() {
  console.log('Hello Console!');
};</code></pre>`,

    beforeTests: function() {
      if (typeof log !== 'undefined') {
        log = undefined;
      }
    },

    tests: [

      function() {
        return testutil.assert_isFunction('log');
      },

      function() {
        return testutil.assert_functionLogs('log()', 'Hello Console!');
      }

    ]

  });

})(jshero.testutil);