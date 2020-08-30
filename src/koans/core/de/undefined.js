(function(testutil) {

  jshero.koans.add({

    id: 'undefined',

    title: 'undefined',

    lesson: `Bisher hatten wir Variablen bei der Deklaration immer auch initialisiert.

<pre><code>// Deklaration und Initialisierung
let x = 1;</code></pre>

Man kann eine Variable aber auch deklarieren und ihr später einen Wert zuweisen.

<pre><code>let x; // Deklaration
x = 1; // Initialisierung</code></pre>

Variablen, die nicht initialisiert wurden, haben den Wert <code>undefined</code> (engl.: nicht definiert).<br><br>
Nicht initialisierte Variablen können auch bei Funktionsaufrufen vorkommen. Ruft man eine Funktion, die einen Parameter
erwartet, ohne Argument auf, dann erhält der Funktionsparameter den Wert <code>undefined</code>.

<pre><code>function echo(x) {
  return x;
}

// Aufruf ohne Argument
let y = echo();</code></pre>

<code>echo</code> wird ohne Argument aufgerufen. Dem Parameter <code>x</code> wird so kein Wert zugewiesen,
er erhält den Wert <code>undefined</code>.
Da <code>echo</code> den Parameter <code>x</code> einfach zurückgibt,
erhält auch <code>y</code> den Wert <code>undefined</code>.<br><br>
Eine Funktion, die einen Parameter erwartet, kann immer auch ohne Argument aufgerufen werden.
Man sollte sich beim Schreiben von Funktionen immer überlegen, was in diesem Fall passieren soll.
Gute Praxis ist es, in einem solchen Fall dem Parameter einen Default-Wert (engl.: Vorgabe) zuzuweisen.
Das hatten wir schon bei der String-Methode <code><a href="stringcharat.html">charAt(index)</a></code> kennengelernt.
Normalerweise gibt diese Methode das Zeichen an der Stelle <code>index</code>
zurück. Rufen wir <code>charAt</code> ohne Argument auf, erhält <code>index</code> den Default <code>0</code>.
Es wird das Zeichen an der Stelle <code>0</code> zurückgegeben.<br><br>
Um eine deklarierte Varaible auf <code>undefined</code> zu überprüfen, verwendet man wie üblich die
<a href='equals.html'>strikte&nbsp;Gleichkeit</a>.
Die Methode <code>charAt</code> könnte also folgenden Code-Ausschnitt enthalten:

<pre><code>if (index === undefined) {
  index = 0;
}</code></pre>`,

    task: `Schreibe eine Funktion <code>hallo</code>, die einen String als Parameter entgegennimmt und <code>'Hallo &lt;Parameter&gt;!'</code> zurückgibt.
<code>hallo('Akgün')</code> sollte <code>'Hallo Akgün!'</code> zurückgeben.
Wird <code>hallo</code> ohne Argument aufgerufen, so soll <code>'Hallo Welt!'</code> zurückgegeben werden.`,

    tests: [
      function() {
        return testutil.assert_isFunction('hallo');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('hallo', 1);
      },

      function() {
        return testutil.assert_functionReturns("hallo('Melek')", 'Hallo Melek!');
      },

      function() {
        return testutil.assert_functionReturns("hallo('Badu')", 'Hallo Badu!');
      },

      function() {
        return testutil.assert_functionReturns('hallo()', 'Hallo Welt!');
      }
    ]

  });

})(jshero.testutil);
