(function(testutil) {

  jshero.koans.add({

    id: "object2",

    title: "Objekte erzeugen",

    lesson: `Die Werte von Objekt-Eigenschaften kann man auch mithilfe von Variablen festlegen.

    <pre><code>var name = "Demet Demir";
var alter = 58;
var person = {
  name: name,
  alter: alter
};</code></pre>

Hier wird ein Objekt mit den Eigenschaften <code>name</code> und <code>alter</code> erzeugt.
<code>name</code> erhält den Wert <code>"Demet Demir"</code> und <code>alter</code> den Wert <code>58</code>.
In der Zeile <code>name: name</code> bezeichnet vor dem Doppelpunkt <code>name</code> den Namen der Objekt-Eigenschaft
und nach dem Doppelpunkt steht die Variable <code>name</code>.`,

    task: `Schreibe eine Funktion <code>createPoint</code>, die die Koordinaten eines Punkts entgegennimmt
und ein Objekt mit den Eigenschaften x und y sowie den übergebenen Koordinaten zurückgibt.
<code>createPoint(1, 2)</code> sollte <code>{x: 1, y: 2}</code> zurückgeben.`,

    hint: `<pre><code>var createPoint = function(x, y) {
  return ...
}</code></pre>`,

    solution: `<pre><code>var createPoint = function(x, y) {
  return {
    x: x,
    y: y
  };
}</code></pre>`,

    beforeTests: function() {
      if (typeof createPoint !== "undefined") {
        createPoint = undefined;
      }
    },

    tests: [

      function() {
        return testutil.assert_isFunction('createPoint');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('createPoint', 2);
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('createPoint(1, 2)', {x: 1, y: 2});
      }
    ]

  });

})(jshero.testutil);