(function(testutil) {

  jshero.koans.add({

    id: "increment",

    title: "Inkrement",

    lesson: `In der Programmierung möchte man häufig einen Zähler um eins erhöhen oder verringern.
Das kann man leicht mit dem Inkrement- bzw. dem Dekrementoperator tun.

<pre><code>var x = 1;
x++;
var y = 10;
y--;</code></pre>

<code>x++</code> ist identisch mit <code>x = x + 1</code> und <code>y--</code> ist identisch mit <code>y = y - 1</code>.
Nach Ausführung des Beispielcodes hat <code>x</code> den Wert <code>2</code> und <code>y</code> den Wert <code>9</code>.`,

    task: `Welchen Wert hat <code>x</code> nach Ausführung des folgenden Codes?
<pre><code>var x = 3;
x++;
x = x * 2;
x--;</code></pre>`,

    solution: "7",

    tests: [

      function() {
        return testutil.assert_isValue("7");
      }

    ]

  });

})(jshero.testutil);