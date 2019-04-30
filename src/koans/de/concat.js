jshero.koans.add({

  id: 'concat',

  title: 'Array: concat()',

  lesson: `Mit der <code>concat</code> Methode kann man zwei Arrays aneinanderhängen:

<pre><code>var a1 = [1, 2, 3];
var a2 = [4, 5, 6];
var a3 = a1.concat(a2);</code></pre>

<code>a3</code> enthält das Array <code>[1, 2, 3, 4, 5, 6]</code>.
Wichtig ist, dass die beiden ursprünglichen Arrays <code>a1</code> und <code>a2</code> nicht verändert werden.`,

  task: `Schreibe eine Funktion <code>concatUp</code>, die zwei Arrays zu einem zusammenführt.
Dabei soll das längere Array an das kürzere Array angehängt werden. Sind beide Arrays gleich lang,
so soll das zweite Array dem ersten Array angehängt werden. <code>concatUp([5, 7], [6])</code> sollte <code>[6, 5, 7]</code>
und <code>concatUp([5, 7], [6, 8])</code> sollte <code>[5, 7, 6, 8]</code> ergeben.`,

  beforeTests: function() {
    if (typeof concatUp !== 'undefined') {
      concatUp = undefined;
    }
  },

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