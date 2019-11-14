(function(testutil) {

  jshero.koans.add({

    id: 'regex6',

    title: 'Regex: ?',

    lesson: `In vielen Pattern ist das Vorkommen eines Zeichens variabel. Autokennzeichen
bestehen aus einer variablen Anzahl von Buchstaben und Ziffern. Für solche Pattern stehen eine Reihe
sogenannter Quantoren bereit. Ein elementarer Quantor ist das <code>?</code>. Er bedeutet,
dass der voranstehende Ausdruck kein- oder einmal vorkommt. <code>/ab?c/</code> steht
für <code>ac</code> (b kommt keinmal vor) oder für <code>abc</code> (b kommt einmal vor).
<code>/[1-9]?[0-9]/</code> steht für eine ein- oder zweistellige Zahl.`,

    task: `Schreibe eine Funktion <code>pruefe</code>, die feststellt, ob ein String den
<a href='https://de.wikipedia.org/wiki/Meier_(Familienname)'>Familiennamen Meier</a> in einer
der 8 Schreibweisen Maier, Meier, Mayer, Meyer, Mair, Meir, Mayr oder Meyr enthält.
<code>pruefe('Mayer')</code> und <code>pruefe('Mayr')</code> sollte <code>true</code>
ergeben.`,

    hint: `<pre><code>var pruefe = function(s) {
// Benutze e?
};</code></pre>`,

    solution: `<pre><code>var pruefe = function(s) {
  return /M[ae][iy]e?r/.test(s);
};</code></pre>`,

    tests: [
      function() {
        return testutil.assert_isFunction('pruefe');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('pruefe', 1);
      },

      function() {
        return testutil.assert_functionReturns("pruefe('Maier')", true);
      },

      function() {
        return testutil.assert_functionReturns("pruefe('Mair')", true);
      },

      function() {
        return testutil.assert_functionReturns("pruefe('Mayer')", true);
      },

      function() {
        return testutil.assert_functionReturns("pruefe('Mayr')", true);
      },

      function() {
        return testutil.assert_functionReturns("pruefe('Meier')", true);
      },

      function() {
        return testutil.assert_functionReturns("pruefe('Meir')", true);
      },

      function() {
        return testutil.assert_functionReturns("pruefe('Meyer')", true);
      },

      function() {
        return testutil.assert_functionReturns("pruefe('Meyr')", true);
      },

      function() {
        return testutil.assert_functionReturns("pruefe('aye')", false);
      },

      function() {
        return testutil.assert_functionReturns("pruefe('Mai')", false);
      },

      function() {
        return testutil.assert_functionReturns("pruefe('Maior')", false);
      },

      function() {
        return testutil.assert_functionReturns("pruefe('Mayeer')", false);
      }

    ]

  });

})(jshero.testutil);
