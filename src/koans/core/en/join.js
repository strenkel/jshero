jshero.koans.add({

  id: 'join',

  title: 'Array: join()',

  lesson: `With <code>join</code> you join all elements of an array into a string:

<pre><code>let words = ['Sex', 'Drugs', 'Rock', 'Roll'];
let s1 = words.join();
let s2 = words.join(' & ');
let s3 = words.join(' and ');</code></pre>

Without an argument <code>join</code> joins the elements separated by commas.
<code>s1</code> has the value <code>'Sex,Drugs,Rock,Roll'</code>.
Otherwise, the passed argument specifies the separator.
<code>s2</code> has the value <code>'Sex & Drugs & Rock & Roll'</code> and
<code>s3</code> has the value  <code>'Sex and Drugs and Rock and Roll'</code>.`,

  task: `Write a function <code>list</code> that takes an array of words and returns a string by
concatenating the words in the array, separated by commas and - the last word - by an 'and'.
An empty array should return an empty string.<br><br>
Example: <code>list(['Huey', 'Dewey', 'Louie'])</code> should return <code>'Huey, Dewey and Louie'</code>.
`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('list');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('list', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("list([])", '');
    },

    function() {
      return jshero.testutil.assert_functionReturns("list(['love'])", 'love');
    },

    function() {
      return jshero.testutil.assert_functionReturns("list(['Ernie', 'Bert'])", 'Ernie and Bert');
    },

    function() {
      return jshero.testutil.assert_functionReturns("list(['Huey', 'Dewey', 'Louie'])", 'Huey, Dewey and Louie');
    },

    function() {
      return jshero.testutil.assert_functionReturns("list(['C', 'C++', 'Python', 'PHP'])", 'C, C++, Python and PHP');
    }

  ]

});