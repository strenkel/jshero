jshero.koans.add({

  id: 'arrayindexof',

  title: 'Array: indexOf()',

  lesson: `Mit der <code>indexOf</code> Methode kann man die Positions des übergebenen Elements innerhalb eines
Arrays bestimmen. Die Zählung beginnt mit 0:

<pre><code>let systems = ['Debian', 'Ubuntu', 'Mint'];
let i1 = systems.indexOf('Mint');
let i2 = systems.indexOf('Windows');</code></pre>

<code>i1</code> erhält den Wert <code>2</code>, da <code>'Mint'</code> das 2te Element in
<code>systems</code> ist. <code>i2</code> erhält den Wert <code>-1</code>.
Dieser Wert wird zurückgegeben, wenn sich das übergebene Element nicht im Array befindet.`,

  task: `Schreibe eine Funktion <code>add</code>, die ein Array und ein Element entgegennimmt und das Element an das Ende des Arrays hängt.
Das Element soll aber nur dann angehängt werden, wenn es sich nicht schon im Array befindet. Das neue Array soll zurückgegeben werden. <br><br>Beispiel:
<code>add([1, 2], 3)</code> sollte <code>[1, 2, 3]</code> und <code>add([1, 2], 2)</code> sollte
<code>[1, 2]</code> zurückgeben.`,

  hint: `<pre><code>function add(arr, elm) {
  // ...
  // Benutze if, indexOf() und push() um 
  // das Element dem Array ggf. hinzuzufügen.
  // ...
  return arr;
}</code></pre>`,

  solution: `<pre><code>function add(arr, elm) {
  if (arr.indexOf(elm) === -1) {
    arr.push(elm);
  }
  return arr;
}</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('add');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('add', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns("add(['J'], 'S')", ['J', 'S']);
    },

    function() {
      return jshero.testutil.assert_functionReturns("add(['J'], 'J')", ['J']);
    },

    function() {
      return jshero.testutil.assert_functionReturns('add([1, 2], 3)', [1, 2, 3]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('add([1, 2], 2)', [1, 2]);
    }

  ]

});
