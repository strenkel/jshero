(function(testutil) {

  jshero.koans.add({

    id: 'dimarray',

    title: 'Array of arrays',

    lesson: `So far we have stored numbers, strings and boolean values in arrays.
But you can also store arrays in arrays:

<pre><code>let teams = [
  ['Ruby', 'Angel'],
  ['Mia', 'Yui', 'Merve', 'Elif'],
  ['Saanvi', 'Giulia', 'Zeynep']
];

let row1 = [4, 9, 2];
let row2 = [3, 5, 7];
let row3 = [8, 1, 6];
let loshu = [row1, row2, row3];</code></pre>

In the first example, 3 teams are stored in an array. Each team itself is an array of names.
The individual teams have different sizes. With <pre><code>let team = teams[0];</code></pre> you can access a team and
with <pre><code>let member = teams[0][0];</code></pre> you can access an individual team member.<br><br>
Arrays that contain arrays are also called two-dimensional arrays.
Carrying this on, you get three- or multidimensional arrays.<br><br>
In the second example, the <a href='https://en.wikipedia.org/wiki/Lo_Shu_Square'>Lo Shu Square</a>
is stored in a two-dimensional array.`,

    task: `Write a function <code>flat</code> that flattens a two-dimensional array with 3 entries.<br><br>
Example: <code>flat(loshu)</code> should return <code>[4, 9, 2, 3, 5, 7, 8, 1, 6]</code>.
Thereby <code>loshu</code> is the magic square from the example above.`,

    hint: `Use the array method <code>concat()</code>.`,

    solution: `<pre><code>function flat(arr){
  return arr[0].concat(arr[1]).concat(arr[2]);
}</code></pre>`,

    tests: [
      function() {
        return testutil.assert_isFunction('flat');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('flat', 1);
      },

      function() {
        return testutil.assert_functionReturns('flat([[], [], []])', []);
      },

      function() {
        return testutil.assert_functionReturns('flat([[1], [], []])', [1]);
      },

      function() {
        return testutil.assert_functionReturns('flat([[1], [2], [3]])', [1, 2, 3]);
      },

      function() {
        return testutil.assert_functionReturns('flat([[1, 2], [3, 4], [5, 6]])', [1, 2, 3, 4, 5, 6]);
      },

      function() {
        return testutil.assert_functionReturns("flat([['a'], ['b', 'c'], ['d', 'e', 'f']])", ['a', 'b', 'c', 'd', 'e', 'f']);
      }

    ]

  });

})(jshero.testutil);

