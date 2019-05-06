(function(testutil) {

  jshero.koans.add({

    id: 'jsx06',

    title: 'What is x?',

    task: `Which value does <code>x</code> have after execution of the following code?
<pre><code>var whereIs = function(name) {
  return 'Where is ' + name + '?';
};

var x = whereIs('Jacky');</code></pre>`,

    solution: `<pre><code>'Where is Jacky?'</code></pre>`,

    beforeTests: function() {
    },

    tests: [

      function() {
        return testutil.assert_isString('Where is Jacky?');
      }

    ]

  });

})(jshero.testutil);