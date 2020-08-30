(function(testutil) {

  jshero.koans.add({

    id: 'jsx07',

    title: 'Silent Teacher',

    lesson: `A wonderful learn to code app is
<a href="http://silentteacher.toxicode.fr/">SILENT TEACHER</a>. It's a minimalist game where beginners can discover
what coding is all about and the key concepts behind code, with no explanations given. Through several series of
questions, the player is led to guess the rules of this language and learn from his own mistakes.
Since SILENT TEACHER uses JavaScript, it is an excellent supplement to JS Hero.<br><br>
Here the concatenation of strings shall be practiced again.`,

    task: `Which value does <code>x</code> have after execution of the following code?
<pre><code>function double(name) {
  return name + ' and ' + name;
}

let x = double('Roy');</code></pre>`,

    solution: `<pre><code>'Roy and Roy'</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isString('Roy and Roy');
      }

    ]

  });

})(jshero.testutil);