jshero.koans.add({

  id: 'regex4',

  title: 'Regex: Bereiche',

  lesson: `Möchte man mit der Zeichenauswahl alle Ziffern zulassen, so kann man
dafür <code>/[0123456789]/</code> verwenden. Das ist aber recht umständlich.
Mit einem Bindestrich kann man größere, zusammenhängende Zeichenbereiche leicht darstellen:

<pre><code>let pruefeZiffer = /[0-9]/;
let pruefe1Bis6 = /[1-6]/;
let pruefeABisZ = /[A-Z]/;
let pruefeaBisz = /[a-z]/;
let pruefeDeutschesAlphabet = /[a-zäöüß]/;
let pruefeABisz = /[A-Za-z]/;
let pruefeMBisT = /[M-T]/;</code></pre>

<code>/[0-9]/</code> steht wie der Regex oben für genau eine Ziffer.
Den Ziffernbereich kann man, wie <code>/[1-6]/</code> zeigt, leicht auf eine gewünschte Auswahl
(z.B. Schulnote) einschränken. Der Bindestrich funktioniert aber nicht nur für Ziffern,
sondern auch für Buchstaben. Dabei muss man zwischen Klein- und
Großbuchstaben unterscheiden. <code>/[A-Z]/</code> steht für einen der 26 Großbuchstaben und
<code>/[a-z]/</code> für einen Kleinbuchstaben. Wichtig ist, dass hier
ä, ö, ü und ß nicht mit erfasst werden. Möchte man das, so muss man diese Buchstaben gesondert
aufführen. Dazu schreibt man die Umlaute und das Eszett wie bei einer gewöhnlichen Auswahl
einfach vor oder hinter den Bereich (<code>/[a-zäöüß]/</code>). Ebenso kann man zwei Bereiche
hintereinander aufführen. <code>/[A-Za-z]/</code> steht für genau einen Klein- oder Großbuchstaben.
Den Buchstabenbereich kann man wie bei Ziffern beliebig einschränken (<code>/[M-T]/</code>).`,

  task: `Schreibe eine Funktion <code>pruefe</code>, die testet, ob ein String eine Zeichenfolge wie
'Klasse 2b' enthält. Dabei sind Klassen von 1 bis 6 und a bis d zulässig.<br><br>Beispiel:
<code>pruefe('Die Klasse 1a')</code> sollte <code>true</code> ergeben.`,

  hint: `<pre><code>function pruefe(s) {
// Verwende Literale
// und Bereiche.
}</code></pre>`,

  solution: `<pre><code>function pruefe(s) {
  return /Klasse [1-6][a-d]/.test(s);
}</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('pruefe');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('pruefe', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('Klasse 1a')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('Klasse 2b')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('Klasse 5c')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('Klasse 6d')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('Klasse 0a')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('Klasse 1e')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('Klasse 7d')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('Kasse 1a')", false);
    }

  ]

});
