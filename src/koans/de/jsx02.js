(function(testutil) {

  jshero.koans.add({

    id: 'jsx02',

    title: 'Neuzuweisung',

    lesson: `Einer Variablen kann man jederzeit mit dem Gleichheitszeichen einen neuen Wert zuweisen.
Das Schlüsselwort <code>var</code> wird dabei nicht nochmal verwendet.
<pre><code>var farbe = 'rot';
farbe = 'grün';</code></pre>
Die Variable <code>farbe</code> wird mit dem Wert <code>'rot'</code> initialisiert. Danach erhält sie den Wert <code>'grün'</code>.`,

    task: `Welchen Wert hat <code>x</code> nach Ausführung des folgenden Codes?
<pre><code>var x = 'Georg';
x = 'Karl';
x = 'Gregor';</code></pre>`,

    solution: `<pre><code>'Gregor'</code></pre>`,

    beforeTests: function() {
    },

    tests: [

      function() {
        return testutil.assert_isString('Gregor');
      }

    ]

  });

})(jshero.testutil);