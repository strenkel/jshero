(function(testutil) {

  jshero.koans.add({

    id: 'jsx06b',

    title: 'Was ist x?',

    task: `Welchen Wert hat <code>x</code> nach Ausführung des folgenden Codes?
<pre><code>let hi = function(name) {
  return 'Hi ' + name + '!';
};

let h1 = hi('Selva');
let h2 = hi('Pola');
let x = h1 + ' ' + h2;</code></pre>`,

    solution: `<pre><code>'Hi Selva! Hi Pola!'</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isString('Hi Selva! Hi Pola!');
      }

    ]

  });

})(jshero.testutil);