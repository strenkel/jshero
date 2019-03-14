(function(testutil) {

  jshero.koans.add({

    id: "regex7",

    title: "Regex: beliebige Wiederholung",

    lesson: `Zwei weitere wichtige Quantoren sind <code>*</code> und <code>+</code>. Beide bedeuten, dass
der voranstehende Ausdruck beliebig oft vorkommen darf. Bei <code>*</code> darf er auch keinmal vorkommen.
Bei <code>+</code> muss er mindestens einmal vorkommen.
<code>bäh*</code> steht für bä, bäh, bähh und so weiter. <code>[01]+</code> steht für
eine beliebige <a href="https://de.wikipedia.org/wiki/Dualsystem">binäre Zahl</a> wie zum Beispiel
0, 1, 001, 10111 oder 11001100.`,

    task: `Schreibe eine Funktion <code>hasQuote</code>, die feststellt, ob ein String ein mit einfachen
Anführungszeichen gekennzeichnetes Zitat enthält. Innerhalb des Zitats sind beliebige Zeichen
zulässig. Ein leeres Zitat ist auch zugelassen. Das Zitat soll nicht über mehrere Zeilen gehen.
Ein Zeilenumbruch innerhalb des Zitats ist also nicht zulässig.
<code>hasQuote("'Ja!'")</code> sollte <code>true</code> und
<code>hasQuote("Ku'damm")</code> sollte <code>false</code> ergeben.`,

    hint: `<pre><code>var hasQuote = function(s) {
// Benutze .*
};</code></pre>`,

    solution: `<pre><code>var hasQuote = function(s) {
  return /'.*'/.test(s);
};</code></pre>`,

    beforeTests: function() {
      hasQuote = undefined;
    },

    tests: [
      function() {
        return testutil.assert_isFunction('hasQuote');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('hasQuote', 1);
      },

      function() {
        return testutil.assert_functionReturns('hasQuote("\'\'")', true);
      },

      function() {
        return testutil.assert_functionReturns('hasQuote("\'Topp!\'")', true);
      },

      function() {
        return testutil.assert_functionReturns('hasQuote("Stimme: \'Ist gerettet!\'")', true);
      },

      function() {
        return testutil.assert_functionReturns('hasQuote("Du")', false);
      },

      function() {
        return testutil.assert_functionReturns('hasQuote("Ku\'damm")', false);
      }

    ]

  });

})(jshero.testutil);
