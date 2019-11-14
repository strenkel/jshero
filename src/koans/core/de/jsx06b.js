(function(testutil) {

  jshero.koans.add({

    id: 'jsx06b',

    title: 'Was ist x?',

    task: `Welchen Wert hat <code>x</code> nach Ausführung des folgenden Codes?
<pre><code>var hi = function(name) {
  return 'Hi ' + name + '!';
};

var h1 = hi('Selva');
var h2 = hi('Pola');
var x = h1 + ' ' + h2;</code></pre>`,

    solution: `<pre><code>'Hi Selva! Hi Pola!'</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isString('Hi Selva! Hi Pola!');
      }

    ]

  });

})(jshero.testutil);