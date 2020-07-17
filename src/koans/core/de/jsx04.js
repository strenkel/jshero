(function(testutil) {

  jshero.koans.add({

    id: 'jsx04',

    title: 'Was ist x?',

    lesson: `Das eben Gelernte wollen wir nochmal üben.`,

    task: `Welchen Wert hat <code>x</code> nach Ausführung des folgenden Codes?
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