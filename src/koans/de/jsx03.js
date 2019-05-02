(function(testutil) {

  jshero.koans.add({

    id: 'jsx03',

    title: 'Variablen zuweisen',

    lesson: `Einer Variablen kann man auch den Wert einer anderen Variablen zuweisen:
<pre><code>var name1 = 'Olga';
var name2 = name1;
name1 = 'Clara';</code></pre>
In der zweiten Codezeile wird der Variablen <code>name2</code> der Wert der Variablen <code>name1</code> zugewiesen.
<code>name2</code> erhält den Wert <code>'Olga'</code>. Diesen Wert behält <code>name2</code> bei,
auch wenn anschließend <code>name1</code> einen neuen Wert erhält.`,

    task: `Welchen Wert hat <code>x</code> nach Ausführung des folgenden Codes?
<pre><code>var x = 'rot';
var y = 'grün';
var z = y;
y = x;
x = z;</code></pre>`,

    solution: `<pre><code>'grün'</code></pre>`,

    beforeTests: function() {
    },

    tests: [

      function() {
        return testutil.assert_isString('grün');
      }

    ]

  });

})(jshero.testutil);