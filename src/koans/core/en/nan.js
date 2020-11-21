(function(testutil) {

  jshero.koans.add({

    id: 'nan',

    title: 'NaN',

    lesson: `<code>NaN</code> is a value representing Not-A-Number. Numeric operations or functions return
<code>NaN</code> if they cannot calculate a value. We had seen this with
<code><a href='parseint.html'>parseInt</a></code>. It returns <code>NaN</code>, if it can't parse a number.
Another example is the calculation of the square root from a negative number:

<pre><code>let age = parseInt('Babylon');
let length = Math.sqrt(-1);</code></pre>

Both <code>age</code> and <code>length</code> get the value <code>NaN</code>.<br><br>
If you want to test for <code>NaN</code>, you unfortunately can't use <a href='equals.html'>strict equality</a>.
<code>NaN</code> is the only value in JavaScript that when compared to itself returns <code>false</code>.
That is, <code>NaN&nbsp;===&nbsp;NaN</code> results in <code>false</code>.
To check if a value is <code>NaN</code> use the <code>Number.isNaN</code> function:

<pre><code>let input = 'Babylon';
let message;
let age = parseInt(input);
if ( Number.isNaN(age) ) {
  message = 'Input is not a number!';
}</code></pre>

The following task is challenging.`,

    task: `Write a function <code>parseFirstInt</code> that takes a string and returns the first integer present in the
string. If the string does not contain an integer, you should get <code>NaN</code>.<br><br>
Example: <code>parseFirstInt('No. 10')</code> should return <code>10</code> and <code>parseFirstInt('Babylon')</code> should
return <code>NaN</code>.`,

    hint: `Use a loop. Within the loop use <code>parseInt()</code>.`,

    solution: `<pre><code>function parseFirstInt(input) {

  let inputToParse = input;

  for (let i = 0; i < input.length; i++) {
    let firstInt = parseInt(inputToParse);
    if (!Number.isNaN(firstInt)) {
      return firstInt;
    }
    inputToParse = inputToParse.substr(1);
  }

  return NaN;
}</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isFunction('parseFirstInt');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('parseFirstInt', 1);
      },

      function() {
        return testutil.assert_functionReturns("parseFirstInt('No. 10')", 10);
      },

      function() {
        return testutil.assert_functionReturns("parseFirstInt('18.12')", 18);
      },

      function() {
        return testutil.assert_functionReturns("parseFirstInt('Li is 22 years old.')", 22);
      },

      function() {
        return testutil.assert_functionReturns("parseFirstInt('sum: -120')", -120);
      },

      function() {
        return testutil.assert_functionReturns("parseFirstInt('a string')", NaN);
      }
    ]
  });

})(jshero.testutil);