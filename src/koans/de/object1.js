(function(testutil) {

  jshero.koans.add({

    id: "object1",

    title: "Objekte",

    lesson: `Um komplexere Sachverhalte abzubilden, verwendet man Objekte. Eine Person hat einen Namen und ein Alter.
Diese beiden Daten könnte man in zwei Variablen speichern. Besser ist es, dafür ein Objekt zu benutzen.
Objekte sind eine Sammlung von Eigenschaften. Jede Eigenschaft besteht aus einem Namen und ihrem Wert.
Objekte werden am einfachsten mit der Mengenklammer erzeugt:

<pre><code>var person = {
  name: "Toni Morrison",
  alter: 52
};</code></pre>

Hier haben wir ein Objekt mit den beiden Eigenschaften name und alter erzeugt.
Das Objekt wurde der Variablen <code>person</code> zugewiesen.
Auf dem Namen einer Eigenschaft folgt ein Doppelpunkt und anschließend ihr Wert. 
Die Eigenschaft name hat den Wert <code>"Toni Morrison"</code> und die Eigenschaft alter den Wert <code>52</code>.
Jede Eigenschaft wird mit einem Komma beendet. Bei der letzten Eigenschaft kann man das Komma weglassen.
Man kann alle Eigenschaften zusammen mit ihren Werten in einer Zeile notieren.
Übersichtlicher ist es, wenn man wie hier für jede Eigenschaft eine neue Zeile verwendet.<br><br>
Mit der folgenden Aufgabe wollen wir einen Punkt in einer Ebene modellieren.
Dieser Punkt könnte zum Beispiel die Position einer Figur in einem 2-dimensionalen Computerspiel sein.`,

    task: `Erzeuge ein Objekt mit den beiden Eigenschaften x und y.
x soll den Wert <code>1</code> und y den Wert <code>2</code> erhalten.
Weise das Objekt der Variablen <code>point</code> zu.`,

    hint: `<pre><code>var point = {
  ...
}</code></pre>`,

    solution: `<pre><code>var point = {
  x: 1,
  y: 2
}</code></pre>`,

    beforeTests: function() {
      if (typeof point !== "undefined") {
        point = undefined;
      }
    },

    tests: [

      function() {
        return testutil.assert_variableDefined('point');
      },

      function() {
        return testutil.assert_variableIsObject('point', {x: 1, y: 2});
      }
    ]

  });

})(jshero.testutil);