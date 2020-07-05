(function(testutil) {

  jshero.koans.add({

    id: 'function',

    title: 'Funktionen',

    lesson: `Eine Funktion ist ein Block von Anweisungen, der beliebig oft ausgeführt werden kann. Eine Funktion kann
Parameter entgegennehmen und eine Funktion kann einen Wert zurückgeben. Funktionen kann man mit dem Schlüsselwort
<code>function</code> definieren. Es folgen:
<ul><li>der Name der Funktion,</li>
<li>die Parameter eingeschlossen in runden Klammern,</li>
<li>die Anweisungen eingeschlossen in geschweiften Klammern.</li></ul>
Mit dem Schlüsselwort <code>return</code> kann ein Wert zurückgegeben werden. Gleichzeitig beendet <code>return</code>
die Funktion. Anweisungen nach einem <code>return</code> werden nicht mehr ausgeführt. Mit

<pre><code>function farbe() {
  return 'grün';
}</code></pre>

definieren wir eine Funktion mit Namen <code>farbe</code>, die <code>'grün'</code> zurückgibt.
Die Funktion nimmt keine Paramter entgegen (die runde Klammer ist leer) und sie enthält genau eine Anweisung, die Rückgabe.
Die Funktion wird nicht mit einem Semikolon abgeschlossen.<br><br>
Über ihren Namen wird die Funktion aufgerufen:

<pre><code>let ergebnis = farbe();</code></pre>

Jetzt wird die Funktion ausgeführt. Ihre Rückgabe wird der Variablen <code>ergebnis</code> zugewiesen.
<code>ergebnis</code> hat dann den Wert <code>'grün'</code>.`,

    task: `Definiere eine Funktion <code>hallo</code>, die <code>'Hallo Welt!'</code> zurückgibt.`,

    hint: `<pre><code>function hallo() {
  ...
}</code></pre>`,

    solution: `<pre><code>function hallo() {
  return 'Hallo Welt!';
}</code></pre>`,

    tests: [
      function() {
        return testutil.assert_isFunction('hallo');
      },

      function() {
        return testutil.assert_functionReturns('hallo()', 'Hallo Welt!');
      }
    ]

  });

})(jshero.testutil);