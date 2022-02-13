jshero.koans.add({

  id: 'regexgroup',

  title: 'Regex: Gruppen',

  lesson: `Klammern hatten wir schon kennengelernt. Sie begrenzen die Anwendung eines Operators auf den eingeklammerten
Bereich. Klammern haben aber noch eine weitere wichtige Funktion. Eingeklammerte Bereiche definieren eine Gruppe.
Diese Gruppen werden von 1 bis 9 durchnummeriert. Mit <code>\\1</code> bis <code>\\9</code> kann man innerhalb des Regex
auf eine Gruppe zugreifen. Dabei wird der durch die Gruppe zuvor gefundene String referenziert.
So ist es möglich nach Wiederholungen zu suchen.<br>
<code>/([a-z])\\1/</code> findet doppelte Kleinbuchstaben und <code>/(\\d)(\\d).*\\1\\2/</code>
findet doppelte zweistellige Zahlen.

<pre><code>let t1 = /([a-z])\\1/.test('Affe'); // true
let t2 = /(\\d)(\\d).*\\1\\2/.test(12 mal 12'); // true</code></pre>`,

  task: `Schreibe eine Funktion <code>test</code>, die feststellt, ob ein String ein doppeltes Wort enthält.
Ein Wort soll aus mindestens einem Buchstaben bestehen. Zugrunde liegt das englische Alphabet. Klein- und Großschreibung
soll keine Rolle spielen.
<br><br>Beispiel: <code>test('Ich denke, also bin ich.')</code> sollte <code>true</code>
und <code>test('Sein oder Nichtsein, das ist hier die Frage!')</code> sollte <code>false</code> ergeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('test');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('test', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('a a')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('aa a')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('a aa')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('B A a b')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('a aa')", false);
    },


    function() {
      return jshero.testutil.assert_functionReturns("test('Apfel Apfel')", true);
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
      return jshero.testutil.assert_functionReturns("test('Apfel Apfelmus')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('ein rein')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('fein rein')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('Ich denke, also bin ich.')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('Sein oder Nichtsein, das ist hier die Frage!')", false);
    },


    function() {
      return jshero.testutil.assert_functionReturns("test('Ja, ja!')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('1 1')", false);
    }

  ]

});
