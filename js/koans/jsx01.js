(function(testutil) {

  jshero.koans.add({

    id: "jsx01",

    title: "Was ist x?",

    task: `Schaue dir den folgenden Code. Welchen Wert hat <code>x</code>?
<pre><code>var x = "Josefine";</code></pre>`,

    solution: `<pre><code>"Josefine"</code></pre>`,

    beforeTests: function() {
    },

    tests: [

      function() {
        return testutil.assert_isValue('Josefine');
      }

    ]

  });

})(jshero.testutil);