jshero.koans.add({

  id: 'join',

  title: 'Array: join()',

  lesson: `With <code>join</code> you join all elements of an array into a string:

<pre><code>var words = ["Sex", "Drugs", "Rock", "Roll"];
var s1 = words.join();
var s2 = words.join(" & ");
var s3 = words.join(" and ");</code></pre>

Without an argument <code>join</code> joins the elements separated by commas.
<code>s1</code> has the value <code>"Sex,Drugs,Rock,Roll"</code>.
Otherwise, the passed argument specifies the separator.
<code>s2</code> has the value <code>"Sex & Drugs & Rock & Roll"</code> and
<code>s3</code> has the value  <code>"Sex and Drugs and Rock and Roll"</code>.`,

  task: `Write a function <code>list</code> that joins words in an array into a list.
<code>list(["Huey", "Dewey", "Louie"])</code> should return <code>"Huey, Dewey and Louie"</code>.
The passed array contains at least two words.`,

  beforeTests: function() {
    if (typeof list !== "undefined") {
      list = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('list');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('list', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('list(["Ernie", "Bert"])', "Ernie and Bert");
    },

    function() {
      return jshero.testutil.assert_functionReturns('list(["Huey", "Dewey", "Louie"])', "Huey, Dewey and Louie");
    },

    function() {
      return jshero.testutil.assert_functionReturns('list(["C", "C++", "Python", "PHP"])', "C, C++, Python and PHP");
    }

  ]

});