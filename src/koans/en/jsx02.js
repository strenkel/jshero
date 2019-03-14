(function(testutil) {

  jshero.koans.add({

    id: "jsx02",

    title: "Reassignment",

    lesson: `A variable can be reassigned a new value at any time using the equal sign.
<pre><code>var color = "red";
color = "green";</code></pre>
The variable <code>color</code> is initialized with the value <code>"red"</code>.
Then it receives the value <code>"green"</code>.`,

    task: `Which value does <code>x</code> have after execution of the following code?
<pre><code>var x = "Tic";
x = "Tac";
x = "Toe";</code></pre>`,

    solution: `<pre><code>"Toe"</code></pre>`,

    beforeTests: function() {
    },

    tests: [

      function() {
        return testutil.assert_isString('Toe');
      }

    ]

  });

})(jshero.testutil);