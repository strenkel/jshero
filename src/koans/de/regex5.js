jshero.koans.add({

  id: "regex5",

  title: "Regex: Zeichenklassen",

  lesson: `Für einige besondere Zeichenbereiche gibt es Buchstaben als Abkürzung.
<code>/\\d/</code> steht für eine Ziffer (engl.: digit) und ist identisch mit
<code>/[0-9]/</code>. Der Regex <code>/\\w/</code> steht für ein alphanumerisches Zeichen oder
den Unterstrich (engl.: word character). <code>/\\w/</code> ist identisch mit <code>/[0-9a-zA-Z_]/</code>.
Der Abkürzung ist ein Backslash vorangestellt, damit sie nicht als normaler Buchstabe
gelesen wird. Abkürzungen kann man auch innerhalb einer Zeichenauswahl verwenden.
<code>/[\\da-z]/</code> steht für eine Ziffer oder einen Kleinbuchstaben.`,

  task: `Schreibe eine Funktion <code>hatPLZ</code>, die prüft, ob ein String eine
deutsche Postleitzahl enthällt. Eine deutsche Postleitzahl ist eine Zahl mit 5 Ziffern.
<code>hatPLZ("28205")</code> sollte <code>true</code> ergeben.`,

  hint: `<pre><code>var hatPLZ = function(s) {
// Verwende \\d fünfmal.
};</code></pre>`,

  solution: `<pre><code>var hatPLZ = function(s) {
  return /\\d\\d\\d\\d\\d/.test(s);
};</code></pre>`,

  beforeTests: function() {
    hatPLZ = undefined;
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('hatPLZ');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('hatPLZ', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('hatPLZ("28205 Bremen")', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('hatPLZ("06493 Neudorf")', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('hatPLZ("2805 Bremen")', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('hatPLZ("06 493 Neudorf")', false);
    }

  ]

});
