(function(testutil) {

  jshero.koans.add({

    id: 'jsx04',

    title: 'What is x?',

    lesson: 'Just practice this again.',

    task: `Which value does <code>x</code> have after execution of the following code?
<pre><code>function hello() {
  return 'Hi!';
}

let x = hello();</code></pre>`,

    solution: `<pre><code>'Hi!'</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isString('Hi!');
      }

    ]

  });

})(jshero.testutil);
