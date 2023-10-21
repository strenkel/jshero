(function(testutil) {

  jshero.koans.add({

    id: 'pi',

    title: 'Math.PI',

    lesson: `Besides functions <code>Math</code> offers some mathematical constants.
  <code>Math.PI</code> gives &#960; (roughly 3.14) and <code>Math.E</code> gives Euler\'s number e (roughly 2.71).`,

    task: `Write a function <code>area</code> that calculates the area of a circle.
The function is given the radius of the circle.<br><br>
Example: <code>area(1)</code> should return <code>&#960;</code> and <code>area(2)</code> should return <code>4 * &#960;</code>.`,

    hint: `<pre><code>function area(r) {
  return Math.PI ... ;
}</code></pre>`,

    solution: `<pre><code>function area(r) {
  return Math.PI * r * r;
}</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isFunction('area');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('area', 1);
      },

      function() {
        return testutil.assert_functionReturns('area(0)', 0);
      },

      function() {
        return testutil.assert_functionReturns('area(1)', Math.PI);
      },

      function() {
        return testutil.assert_functionReturns('area(2)', 4 * Math.PI);
      }
    ]

  });

})(jshero.testutil);