(function(testutil) {

  jshero.koans.add({

    id: 'nan',

    title: 'NaN',

    lesson: `<code>NaN</code> repräsentiert den Wert Not-A-Number (engl.: Keine-Zahl). Numerische Operationen oder
Funktionen geben <code>NaN</code> zurück, wenn sie keinen Wert berechnen können. Wir hatten dies bei
<code><a href='parseint.html'>parseInt</a></code> kennengelernt. <code>parseInt</code> gibt <code>NaN</code>
zurück, wenn es keine Zahl parsen kann. Ein weiteres Beispiel ist die Berechnung der Wurzel aus einer negativen Zahl:

<pre><code>let age = parseInt('Babylon');
let length = Math.sqrt(-1);</code></pre>

Sowohl <code>age</code> als auch <code>length</code> haben den Wert <code>NaN</code>.<br><br>
Möchte man testen, ob <code>NaN</code> vorliegt, kann man leider nicht <code>===</code> verwenden.
<code>NaN</code> ist der einzige Wert in JavaScript, der nicht mit sich selbst gleich ist.
<code>NaN&nbsp;===&nbsp;NaN</code> ergibt <code>false</code>.

Um auf <code>NaN</code> zu testen, sollte man die Funktion <code>Number.isNaN</code> verwenden:

<pre><code>let input = 'Babylon';
let message;
let age = parseInt(input);
if ( Number.isNaN(age) ) {
  message = 'Du hast keine Zahl eingegeben.';
}</code></pre>

Die folgende Aufgabe ist anspruchsvoll.`,

    task: `Schreibe eine Funktion <code>parseFirstInt</code>, die einen String entgegennimmt und die die erste in dem
String vorkommende ganze Zahl zurückgibt. Enthält der String keine ganze Zahl, soll man <code>NaN</code> erhalten.<br><br>
Beispiel: <code>parseFirstInt('Sonnebornstr. 27')</code> sollte <code>27</code> zurückgeben.
<code>parseFirstInt('Babylon')</code> sollte <code>NaN</code> ergeben.`,

    hint: `Benutze eine Schleife. Verwende innerhalb der Schleife <code>parseInt()</code>.`,

    solution: `<pre><code>function parseFirstInt(input) {

  let inputToParse = input;

  for (let i = 0; i < input.length; i++) {
    let firstInt = parseInt(inputToParse);
    if (!Number.isNaN(firstInt)) {
      return firstInt;
    }
    inputToParse = inputToParse.substr(1);
  }

  return NaN;
}</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isFunction('parseFirstInt');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('parseFirstInt', 1);
      },

      function() {
        return testutil.assert_functionReturns("parseFirstInt('Sonnebornstr. 2')", 2);
      },

      function() {
        return testutil.assert_functionReturns("parseFirstInt('28.12.05')", 28);
      },

      function() {
        return testutil.assert_functionReturns("parseFirstInt('Willi ist 22 Jahre alt.')", 22);
      },

      function() {
        return testutil.assert_functionReturns("parseFirstInt('Temperatur: -12 Grad')", -12);
      },

      function() {
        return testutil.assert_functionReturns("parseFirstInt('Ohne Zahl')", NaN);
      }
    ]
  });

})(jshero.testutil);