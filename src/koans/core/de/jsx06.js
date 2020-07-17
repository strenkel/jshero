(function(testutil) {

  jshero.koans.add({

    id: 'jsx06',

    title: 'Was ist x?',

    task: `Welchen Wert hat <code>x</code> nach Ausführung des folgenden Codes?
<pre><code>function woIst(name) {
  return 'Wo ist ' + name + '?';
}

let x = woIst('Fred');</code></pre>`,

    solution: `<pre><code>'Wo ist Fred?'</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isString('Wo ist Fred?');
      }

    ]

  });

})(jshero.testutil);