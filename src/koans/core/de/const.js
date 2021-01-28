(function(testutil) {

  jshero.koans.add({

    id: 'const',

    title: 'Konstanten',

    lesson: `Wir haben Variablen bisher mit <code>let</code> deklariert. Solchen Variablen kann man beliebig oft einen
neuen Wert zuweisen. Manchmal kommt es jedoch vor, dass einer Variablen gar kein neuer Wert zugeordnet werden soll.
Eine solche Variable könnte man natürlich mit let deklarieren. Man muss dann selber aufpassen,
dass man ihren Wert nicht ändert. `,

    task: `Deklariere eine Variable <code>vorname</code> und initialisiere sie mit dem Wert <code>'Franz'</code>.`,

    hint: `<pre><code>let vorname = ...</code></pre>`,

    solution: `<pre><code>let vorname = 'Franz';</code></pre>`,

    tests: [

      function() {
        return testutil.assert_variableDefined('vorname');
      },

      function() {
        return testutil.assert_variableHasValue('vorname', 'Franz');
      }
    ]

  });

})(jshero.testutil);