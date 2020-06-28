jshero.koans.add({

  id: 'stringlength',

  title: 'String: length',

  lesson: `Strings besitzen die Eigenschaft <code>length</code>. Diese Eigenschaft liefert die Anzahl der Zeichen eines Strings.
Dazu muss man dem String  oder der Variablen, die den String enthält, <code>.length</code> anhängen:

<pre><code>let anzahl = 'Franz'.length;</code/></pre>

<code>'Franz'</code> hat 5 Zeichen. Also erhält <code>anzahl</code> den Wert <code>5</code>.

<pre><code>let stadt = 'Prag';
anzahl = stadt.length;</code/></pre>

<code>'Prag'</code> hat 4 Zeichen. <code>anzahl</code> hat jetzt den Wert <code>4</code>.

<pre><code>anzahl = ''.length;</code/></pre>

Der Leerstring besitzt keine Zeichen. Der Wert von <code>anzahl</code> ist jetzt <code>0</code>.`,

  task: `Schreibe eine Funktion <code>laenge</code>, die bei Übergabe eines Strings die Anzahl der Zeichen dieses
Strings zurückgibt.<br><br>Beispiel: <code>laenge('Franz')</code> sollte <code>5</code> zurückgeben.`,

  hint: `<pre><code>let laenge = function(s) {
...
};</code/></pre>`,

  solution: `<pre><code>let laenge = function(s) {
  return s.length;
};</code/></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('laenge');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('laenge', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("laenge('Hallo Welt!')", 11);
    },

    function() {
      return jshero.testutil.assert_functionReturns("laenge('')", 0);
    }
  ]

});
