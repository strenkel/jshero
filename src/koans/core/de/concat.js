jshero.koans.add({

  id: 'concat',

  title: 'Array: concat()',

  lesson: `Mit der <code>concat</code> Methode kann man zwei Arrays aneinanderhängen:

<pre><code>let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = a1.concat(a2);</code></pre>

<code>a3</code> enthält das Array <code>[1, 2, 3, 4, 5, 6]</code>.
Wichtig ist, dass die beiden ursprünglichen Arrays <code>a1</code> und <code>a2</code> nicht verändert werden.`,

  task: `Schreibe eine Funktion <code>concatUp</code>, die zwei Arrays zu einem zusammenführt.
Dabei soll das längere Array an das kürzere Array angehängt werden. Sind beide Arrays gleich lang,
so soll das zweite Array dem ersten Array angehängt werden.<br><br>Beispiel: <code>concatUp([5, 7], [6])</code> sollte
<code>[6, 5, 7]</code> und <code>concatUp([5, 7], [6, 8])</code> sollte <code>[5, 7, 6, 8]</code> ergeben.`,

  hint: `<pre><code>function concatUp(firstArray, secondArray) {
  // Benutze if, um zu entscheiden,
  // in welcher Reihenfolge die beiden
  // Arrays aneinander gehängt werden.
}</code></pre>`,

  solution: `<pre><code>function concatUp(firstArray, secondArray) {

  if (secondArray.length >= firstArray.length) {
    return firstArray.concat(secondArray);
  }

  return secondArray.concat(firstArray);
}</code></pre>`,

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