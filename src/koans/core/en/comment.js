jshero.koans.add({

  id: 'comment',

  title: 'Comments',

  lesson: `If needed, you can add comments to a program. Comments are used to explain programs.
They help us humans to understand programs. Computers ignore comments.<br><br>
In JavaScript there are two ways to write comments:
Line comments are introduced with <code>//</code> and are valid until the end of the line.
Block comments start with <code>/*</code> and end with <code>*/</code>.
Any text in between is a comment.

<pre><code>// That's a line comment.

// This line comment
// covers 2 lines.

/* That's a block comment. */

/* This block comment
covers 2 lines. */

/**
 * This is also a block comment.
 * The additional stars between
 * the beginning and the end of the
 * block comment are only for decoration.
 */</code></pre>

 Block comments are often used to explain functions. Line comments explain the code flow.

 <pre><code>/**
 * Checks whether a string contains
 * any characters other than spaces.
 */
function isBlank(string) {
  // The method trim() removes spaces at
  // the beginning and the end of a string.
  let trimmedString = string.trim();
  return trimmedString.length === 0;
}</code></pre>

Comments can't be checked with the tests used here.
It follows a task where you have to apply much of what you have learned so far.`,

  task: `Write a function <code>median</code> that takes an array of ascending numbers and returns the
<a href='https://en.wikipedia.org/wiki/Median'>median</a> of that numbers.<br><br>
Example: <code>median([1, 2, 10])</code> should return <code>2</code> and <code>median([1, 2, 10, 100])</code> should return
<code>6</code>.`,

  hint: `The median of a sorted series of numbers is the value in the middle.
If the number of values is even, the median is the mean of the two middle numbers.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('median');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('median', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('median([1])', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('median([1, 2])', 1.5);
    },

    function() {
      return jshero.testutil.assert_functionReturns('median([1, 2, 10])', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('median([1, 1, 2, 10, 100, 101])', 6);
    }
  ]

});
