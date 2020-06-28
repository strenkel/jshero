(function(testutil) {

  jshero.koans.add({

    id: 'stringcharat',

    title: 'String: charAt()',

    lesson: `To get a character from a string at a specified index, use the <code>charAt(index)</code> method:
<pre><code>let char0 = 'Frantz'.charAt(0);
let char1 = 'Frantz'.charAt(1);
let char9 = 'Frantz'.charAt(9);</code></pre>
The first character has the index 0. So <code>char0</code> has the value <code>'F'</code> and <code>char1</code> has the value <code>'r'</code>.
If the index is larger than the index of the last character, the empty string is returned. So <code>char9</code> has the value <code>''</code>.`,

    task: `Write a function <code>shortcut</code> that takes two strings and returns the initial letters of theses strings.
<code>shortcut('Amnesty', 'International')</code> should return <code>'AI'</code>.`,

    hint: `<pre><code>let shortcut = function(s1, s2) {
  ...
};</code></pre>`,

    solution: `<pre><code>let shortcut = function(s1, s2) {
  return s1.charAt(0) + s2.charAt(0);
};</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isFunction('shortcut');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('shortcut', 2);
      },

      function() {
        return testutil.assert_functionReturns("shortcut('Amnesty', 'International')", 'AI');
      },

      function() {
        return testutil.assert_functionReturns("shortcut('Java', 'Script')", 'JS');
      }

    ]
  });

})(jshero.testutil);