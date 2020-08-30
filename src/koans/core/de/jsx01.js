(function(testutil) {

  jshero.koans.add({

    id: 'jsx01',

    title: 'Was ist x?',

    lesson: `Das eben Gelernte wollen wir nochmal üben. Während Du bei der ersten Aufgabe Code geschrieben hast,
sollst du hier Code lesen.`,

    task: `Welchen Wert hat <code>x</code> nach Ausführung des folgenden Codes?
<pre><code>let x = 'Josefine';</code></pre>`,

    solution: `<pre><code>'Josefine'</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isString('Josefine');
      }

    ]

  });

})(jshero.testutil);