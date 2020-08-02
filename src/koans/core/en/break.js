jshero.koans.add({

  id: 'break',

  title: 'break and continue',

  lesson: `<code>break</code> terminates the current loop. The program continues after the loop.

<pre><code>let words = 'blue white red';
let indexFirstSpace = -1;
for (let i = 0; i < words.length; i++) {
  if (words.charAt(i) === ' ') {
    indexFirstSpace = i;
    break;
  }
}</code></pre>

If the character with the index <code>i</code> in <code>words</code> is a space, the <code>if</code> condition is fulfilled.
<code>indexFirstSpace</code> gets the value of the loop variable <code>i</code>. Now, <code>break</code> will be
executed. The loop will be terminated and the program execution continues after the loop.<br><br>

<code>continue</code> terminates the current loop iteration. The program execution jumps to the loop head.

<pre><code>let sum = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum = sum + i;
}</code></pre>

If <code>i</code> is an odd number, the following applies: i modulo 2 = 1. The <code>if</code> condition is not fulfilled.
Code execution continues after <code>if</code> and <code>i</code> is added to <code>sum</code>.
If <code>i</code> is an even number, the following applies: i modulo 2 = 0. The <code>if</code> condition is fulfilled and
<code>continue</code> will be excecuted. The code execution jumps directly to the loop head.
<code>i</code> is not added to <code>sum</code>. So all odd numbers smaller than 10 are added up.<br><br>

<code>break</code> and <code>continue</code> can be used in all loops (for, while, do...while).`,

  task: `Write a function <code>isPrime</code> that checks whether a passed number is
<a href="https://en.wikipedia.org/wiki/Prime_number">prime</a>.
In case of a prime number it should return <code>true</code>, otherwise <code>false</code>.<br><br>
Example: <code>isPrime(7)</code> should return <code>true</code> and <code>isPrime(8)</code> should return
<code>false</code>.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('isPrime');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('isPrime', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isPrime(1)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isPrime(2)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isPrime(3)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isPrime(4)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isPrime(11)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isPrime(281)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isPrime(351)', false);
    }

  ]

});
