(function(testutil) {

  jshero.koans.add({

    id: "jsx07",

    title: "Was ist x?",

    task: `Welchen Wert hat <code>x</code> nach Ausführung des folgenden Codes?
<pre><code>var bleiben = function(name) {
  return name + " bleibt " + name;
};

var x = bleiben("Mainz");</code></pre>`,

    solution: `<pre><code>"Mainz bleibt Mainz"</code></pre>`,

    beforeTests: function() {
    },

    tests: [

      function() {
        return testutil.assert_isString('Mainz bleibt Mainz');
      }

    ]

  });

})(jshero.testutil);