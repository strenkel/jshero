(function(testutil) {

  jshero.koans.add({

    id: 'object2',

    title: 'Objekte erzeugen',

    lesson: `Die Werte von Objekt-Eigenschaften kann man auch mithilfe von Variablen festlegen:

<pre><code>let title = 'Clean Code';
let author = 'Robert C. Martin';
let book = {
  title: title,
  author: author
};</code></pre>

Hier wird ein Objekt mit den Eigenschaften <code>title</code> und <code>author</code> erzeugt.
<code>title</code> erhält den Wert <code>'Clean Code'</code> und <code>author</code> den Wert
<code>'Robert C. Martin'</code>.
In der Zeile <code>title: title</code> ist <code>title</code> vor dem Doppelpunkt die Objekt-Eigenschaft
und nach dem Doppelpunkt die zuvor definierte Variable.`,

    task: `Schreibe eine Funktion <code>createPoint</code>, die die Koordinaten eines Punkts in der Ebene
entgegennimmt und ein Objekt mit den Eigenschaften x und y sowie den übergebenen Koordinaten zurückgibt.<br><br>
Beispiel: <code>createPoint(1,&nbsp;2)</code> sollte <code>{x:&nbsp;1,&nbsp;y:&nbsp;2}</code> zurückgeben.`,

    hint: `<pre><code>function createPoint(x, y) {
  return ...
}</code></pre>`,

    solution: `<pre><code>function createPoint(x, y) {
  return {
    x: x,
    y: y
  };
}</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isFunction('createPoint');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('createPoint', 2);
      },

      function() {
        return testutil.assert_functionReturnsObject('createPoint(1, 2)', { x: 1, y: 2 });
      },

      function() {
        return testutil.assert_functionReturnsObject('createPoint(-5, 18)', { x: -5, y: 18 });
      }
    ]

  });

})(jshero.testutil);