(function(testutil) {

  jshero.koans.add({

    id: 'jsx01',

    title: 'What is x?',

    lesson: `Let's practice what we've just learned. Here you have to read code.`,

    task: `Which value does <code>x</code> have after execution of the following code?
<pre><code>let x = 'Geeta';</code></pre>`,

    solution: `<pre><code>'Geeta'</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isString('Geeta');
      }

    ]

  });

})(jshero.testutil);