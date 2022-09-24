jshero.koans.add({

  id: 'trim',

  title: 'String: trim()',

  lesson: `Die Methode <code>trim</code> entfernt Leerzeichen an beiden Enden eines Strings.
Der an den Enden um Leerzeichen bereinigte String wird zurückgegeben.
Der ursprügliche String bleibt unverändert.

<pre><code>let eingabe = ' Rosa Parks ';
let name = eingabe.trim();</code></pre>

<code>name</code> enthält den String <code>'Rosa Parks'</code>.
Wie angedeutet werden Benutzereingaben häufig vor der Verarbeitung getrimmt.`,

  task: `Schreibe eine Funktion <code>firstChar</code>, die bei Übergabe eines Strings das erste Zeichen,
das kein Leerzeichen ist, zurückgibt.<br><br>Beispiel: <code>firstChar(' Rosa')</code> sollte <code>'R'</code>
zurückgeben.`,

  hint: `<pre><code>function firstChar(text) {
// Trimme zuerst text.
// Verwende dann die
// charAt-Methode.
}</code></pre>`,

  solution: `<pre><code>function firstChar(text) {
  let textGetrimmt = text.trim();
  return textGetrimmt.charAt(0);
}</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('firstChar');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('firstChar', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("firstChar('Rosa')", 'R');
    },

    function() {
      return jshero.testutil.assert_functionReturns("firstChar(' Louise')", 'L');
    },

    function() {
      return jshero.testutil.assert_functionReturns("firstChar('  Parks')", 'P');
    }
  ]

});
