jshero.koans.add({

  id: 'concat',

  title: 'Array: concat()',

  lesson: `Using the <code>concat</code> method you can concatenate two arrays:

<pre><code>let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = a1.concat(a2);</code></pre>

<code>a3</code> contains the array <code>[1, 2, 3, 4, 5, 6]</code>.
The two existing arrays <code>a1</code> and <code>a2</code> will not be changed.`,

  task: `Write a function <code>concatUp</code> that concatenate two arrays.
The longer array should be appended to the shorter array.
If both arrays are equally long, the second array should be appended to the first array.<br><br>
Example: <code>concatUp([1,&nbsp;2],&nbsp;[3])</code> should return <code>[3,&nbsp;1,&nbsp;2]</code>
and <code>concatUp([5,&nbsp;7],&nbsp;[6,&nbsp;8])</code> should return <code>[5,&nbsp;7,&nbsp;6,&nbsp;8]</code>.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('concatUp');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('concatUp', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('concatUp([5, 7], [6])', [6, 5, 7]);
    },

    function() {
      return jshero.testutil.assert_functionReturns("concatUp(['x'], ['a', 'b'])", ['x', 'a', 'b']);
    },

    function() {
      return jshero.testutil.assert_functionReturns('concatUp([5, 7], [6, 8])', [5, 7, 6, 8]);
    }

  ]

});