(function(testutil) {

  jshero.koans.add({

    id: 'jsx07',

    title: 'Silent Teacher',

    lesson: `Eine wunderbare, kleine Learn-to-Code App ist
<a href="http://silentteacher.toxicode.fr/">SILENT TEACHER</a>. Spielerisch lernt man einfache
Programmierkonzepte kennen. Da SILENT TEACHER als Programmiersprache JavaScript verwendet, eignet
es sich hervorragend als Ergänzung zu JS Hero. Mehr zu SILENT TEACHER findest du im
<a href="https://blog.jshero.net/silent-teacher/">JS Hero Blog</a>.<br><br>
Hier soll nochmal die Verkettung von Strings geübt werden.`,

    task: `Welchen Wert hat <code>x</code> nach Ausführung des folgenden Codes?
<pre><code>function bleiben(name) {
  return name + ' bleibt ' + name;
}

let x = bleiben('Mainz');</code></pre>`,

    solution: `<pre><code>'Mainz bleibt Mainz'</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isString('Mainz bleibt Mainz');
      }

    ]

  });

})(jshero.testutil);