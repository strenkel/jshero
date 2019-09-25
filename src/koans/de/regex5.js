jshero.koans.add({

  id: 'regex5',

  title: 'Regex: Zeichenklassen',

  lesson: `Für einige besondere Zeichenbereiche gibt es Buchstaben als Abkürzung.
<code>/\\d/</code> steht für eine Ziffer (engl.: digit) und ist identisch mit
<code>/[0-9]/</code>. Der Regex <code>/\\w/</code> steht für ein alphanumerisches Zeichen oder
den Unterstrich (engl.: word character). <code>/\\w/</code> ist identisch mit <code>/[0-9a-zA-Z_]/</code>.
Der Abkürzung ist ein Backslash vorangestellt, damit sie nicht als normaler Buchstabe
gelesen wird. Abkürzungen kann man auch innerhalb einer Zeichenauswahl verwenden.
<code>/[\\da-z]/</code> steht für eine Ziffer oder einen Kleinbuchstaben.`,

  task: `Schreibe eine Funktion <code>test</code>, die prüft, ob ein String 5 aufeinanderfolgende
Ziffern enthällt. <code>test('28205')</code> sollte <code>true</code> ergeben.`,

  hint: `<pre><code>var test = function(s) {
// Verwende \\d fünfmal.
};</code></pre>`,

  solution: `<pre><code>var test = function(s) {
  return /\\d\\d\\d\\d\\d/.test(s);
};</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('test');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('test', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('28205 Bremen')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('06493 Neudorf')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('123456')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('1000 kg')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('1000-1=999')", false);
    }

  ]

});
