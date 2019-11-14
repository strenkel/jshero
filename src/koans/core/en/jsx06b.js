(function(testutil) {

  jshero.koans.add({

    id: 'jsx06b',

    title: 'What is x?',

    task: `Which value does <code>x</code> have after execution of the following code?
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