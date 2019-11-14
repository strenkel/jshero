jshero.koans.add({

  id: 'regexgroup',

  title: 'Regex: Gruppen',

  lesson: `Klammern hatten wir schon kennengelernt. Sie begrenzen die Anwendung eines Operators auf den eingeklammerten
Bereich. Klammern haben aber noch eine weitere wichtige Funktion. Eingeklammerte Bereiche definieren eine Gruppe.
Diese Gruppen werden von 1 bis 9 durchnummeriert (mehr Gruppen kann man nicht definieren).
Mit <code>\\1</code> bis <code>\\9</code> kann man innerhalb des Regex auf eine Gruppe zugreifen.
Damit kann man nach Wiederholungen suchen.<br>
<code>/([a-z])\\1/</code> findet doppelte Kleinbuchstaben und <code>/(\\d)(\\d).*\\1\\2/</code>
findet doppelte zweistellige Zahlen.

<pre><code>var t1 = /([a-z])\\1/.test('Affe'); // true
var t2 = /(\\d)(\\d).*\\1\\2/.test(12 mal 12'); // true</code></pre>`,

  task: `Schreibe eine Funktion <code>test</code>, die feststellt, ob ein String ein doppeltes Wort enthält.
Ein Wort soll aus mindestens einem Buchstaben bestehen. Zugrunde liegt das englische Alphabet.
Klein- oder Großschreibung soll keine Rolle spielen. <code>test('Apfel Birne Apfel')</code> sollte true und
<code>test('Apfel Birne')</code> sollte <code>false</code> ergeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('test');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('test', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('Apfel Birne Apfel')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('Apfel Birne')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('ApfelApfel')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('Apfel Apfel')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('Apfel Apfelmus')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('ein rein')", false);
    }
    
  ]

});
