(function(testutil) {

  jshero.koans.add({

    id: 'jsx07',

    title: 'What is x?',

    task: `Which value does <code>x</code> have after execution of the following code?
<pre><code>let double = function(name) {
  return name + ' and ' + name;
};

let x = double('Roy');</code></pre>`,

    solution: `<pre><code>'Roy and Roy'</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isString('Roy and Roy');
      }

    ]

  });

})(jshero.testutil);