(function(testutil) {

  jshero.koans.add({

    id: "jsx05",

    title: "Was ist x?",

    task: `Welchen Wert hat <code>x</code> nach Ausführung des folgenden Codes?
<pre><code>var reply = function(phrase) {
  return phrase;
};

var x = reply("How do you do?");</code></pre>`,

    solution: `<pre><code>"How do you do?"</code></pre>`,

    beforeTests: function() {
    },

    tests: [

      function() {
        return testutil.assert_isString('How do you do?');
      }

    ]

  });

})(jshero.testutil);