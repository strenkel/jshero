(function(testutil) {

  jshero.koans.add({

    id: 'log2',

    title: 'Variablen loggen',

    lesson: `Nun wollen wir Variablen loggen:

<pre><code>let informatiker = 'Ken Thompson';
console.log(informatiker);</code></pre>

Hier wird die Variable <code>informatiker</code> mit <code>console.log</code> geloggt.
In der Konsole erscheint <code>'Ken Thompson'</code>. Das ist der Wert der Variablen <code>informatiker</code>.`,

    task: `Schreibe eine Funktion <code>logge</code>, die einen Parameter entgegennimmt und diesen Parameter loggt.<br><br>
Beispiel: Der Aufruf <code>logge('Ken Thompson')</code> sollte <code>'Ken Thompson'</code> loggen.`,

    hint: `<pre><code>function logge(wert) {
  ...
}</code></pre>`,

    solution: `<pre><code>function logge(wert) {
  console.log(wert);
}</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isFunction('logge');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('logge', 1);
      },

      function() {
        return testutil.assert_functionLogs("logge('Ken Thompson')", 'Ken Thompson');
      },

      function() {
        return testutil.assert_functionLogs("logge('Dennis Ritchie')", 'Dennis Ritchie');
      }

    ]

  });

})(jshero.testutil);