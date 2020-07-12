(function(testutil) {

  jshero.koans.add({

    id: 'jsx07',

    title: 'Was ist x?',

    task: `Welchen Wert hat <code>x</code> nach Ausführung des folgenden Codes?
<pre><code>function bleiben(name) {
  return name + ' bleibt ' + name;
};

let x = bleiben('Mainz');</code></pre>`,

    solution: `<pre><code>'Mainz bleibt Mainz'</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isString('Mainz bleibt Mainz');
      }

    ]

  });

})(jshero.testutil);