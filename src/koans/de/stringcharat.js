jshero.koans.add({

  id: 'stringcharat',

  title: 'String: charAt()',

  lesson: `Um aus einem String das Zeichen an einer bestimmten Stelle zu erhalten, verwendet man die Methode
<code>charAt(index)</code>. Der Paramter <code>index</code> gibt die Stelle des Zeichens innerhalb der Zeichenkette an.
Dabei hat das erste Zeichen einer Zeichenkette den Index 0:

<pre><code>var n1 = 'Maria'.charAt(0);
var n2 = 'Maria'.charAt(1);
var n3 = 'Maria'.charAt(5);
var n4 = 'Maria'.charAt();</code></pre>

<code>n1</code> hat den Wert <code>'M'</code> und <code>n2</code> hat den Wert <code>'a'</code>. Ist der Index größer
als der Index des letzten Zeichens, wird der leere String zurückgegeben. <code>n3</code> hat also den Wert <code>''</code>.
Wird kein Parameter übergeben, so wird das Zeichen mit dem Index <code>0</code> zurückgegeben. Man sagt: der Default-Wert
für <code>index</code> ist <code>0</code>. Der Wert von <code>n4</code> ist also auch <code>'M'</code>.`,

  task: `Schreibe eine Funktion <code>abkuerzung</code>, die zwei Strings als Parameter entgegennimmt und als Rückgabe die Anfangsbuchstaben
dieser Strings zurückgibt. <code>abkuerzung('Hansestadt', 'Bremen')</code> sollte <code>'HB'</code> zurückliefern.`,

  hint: `<pre><code>var abkuerzung = function(s1, s2) {
  ...
};</code/></pre>`,

  solution: `<pre><code>var abkuerzung = function(s1, s2) {
  return s1.charAt(0) + s2.charAt(0);
};</code/></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('abkuerzung');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('abkuerzung', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns("abkuerzung('Hansestadt', 'Bremen')", 'HB');
    },

    function() {
      return jshero.testutil.assert_functionReturns("abkuerzung('Java', 'Script')", 'JS');
    }

  ]

});
