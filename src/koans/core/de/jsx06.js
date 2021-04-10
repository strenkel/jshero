(function(testutil) {

  jshero.koans.add({

    id: 'jsx06',

    title: 'Was ist x?',

    lesson: `Hier soll nochmal der Unterschied zwischen einer Funktionsdefinition und einem Funktionsaufruf
geübt werden.<br><br>Möchtest du das bisher Gelernte in Aktion sehen, schaue dir im
<a href='https://blog.jshero.net'>Code Hero Blog</a> die Posts
<a href='https://blog.jshero.net/playground/'>Playground</a> und <a href='https://blog.jshero.net/funktionen/'>Funktionen</a> an.`,

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