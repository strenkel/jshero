(function (testutil) {

  jshero.koans.add({

    id: 'switch',

    title: 'Switch',

    lesson: `Die <code>switch</code>-Anweisung ermöglicht es dir, verschiedene Codeblöcke auszuführen – je nachdem,
welchen Wert eine Variable hat. Sie ist eine übersichtlichere Alternative zu mehreren <code>if...else if</code> - Bedingungen,
wenn du dieselbe Variable mit verschiedenen Werten vergleichen willst.
Der Vergleich erfolgt mit strikter Gleichheit (<code>===</code>).

Der Aufbau einer <code>switch</code>-Anweisung sieht so aus:

<pre><code>let fruit = 'apple';
switch (fruit) {
  case 'banana':
    console.log('Yellow');
    break;
  case 'apple':
    console.log('Red');
    break;
  default:
    console.log('Unknown');
}</code></pre>

Jeder <code>case</code> prüft, ob die Variable (hier <code>fruit</code>) einem bestimmten Wert entspricht
(z. B. <code>'banana'</code> oder <code>'apple'</code>). Wenn eine Übereinstimmung gefunden wird, wird der
zugehörige Code ausgeführt. Das <code>break</code> sorgt dafür, dass der <code>switch</code>-Block danach verlassen wird.
Wenn man <code>break</code> weglässt, wird der Code des nächsten <code>case</code> ausgeführt, auch wenn dessen Bedingung
nicht erfüllt ist. Da das zu unübersichtlichem Code führt, sollte man jeden <code>case</code> mit <code>break</code> beenden.
In Funktionen kann man alternativ auch <code>return</code> verwenden.

Falls kein <code>case</code> passt, wird der Code im <code>default</code>-Block (sofern vorhanden) ausgeführt.

Im obigen Beispiel hat <code>fruit</code> den Wert <code>'apple'</code>, daher wird <code>Red</code> ausgegeben.`,

    task: `Schreibe eine Funktion <code>getDayName</code>, die eine Zahl zwischen 1 und 7 entgegennimmt und den
entsprechenden Wochentag zurückgibt. Wird keine Zahl zwischen 1 und 7 übergeben, soll <code>'unbekannt'</code>
zurückgegben werden.<br><br>Beispiel: <code>getDayName(1)</code> sollte <code>'Montag'</code> zurückgeben.`,

    hint: `<pre><code>function getDayName(n) {
  switch (n) {
    ...
  }
}</code></pre>`,

    solution: `<pre><code>function getDayName(n) {
  switch (n) {
    case 1:
      return 'Montag';
    case 2:
      return 'Dienstag';
    case 3:
      return 'Mittwoch';
    case 4:
      return 'Donnerstag';
    case 5:
      return 'Freitag';
    case 6:
      return 'Samstag';
    case 7:
      return 'Sonntag';
    default:
      return 'unbekannt';
  }
}</code></pre>`,

    tests: [

      function () {
        return testutil.assert_isFunction('getDayName');
      },

      function () {
        return testutil.assert_functionHasNumOfParameter('getDayName', 1);
      },

      function () {
        return testutil.assert_functionReturns("getDayName(1)", "Montag");
      },

      function () {
        return testutil.assert_functionReturns("getDayName(2)", "Dienstag");
      },

      function () {
        return testutil.assert_functionReturns("getDayName(3)", "Mittwoch");
      },

      function () {
        return testutil.assert_functionReturns("getDayName(4)", "Donnerstag");
      },

      function () {
        return testutil.assert_functionReturns("getDayName(5)", "Freitag");
      },

      function () {
        return testutil.assert_functionReturns("getDayName(6)", "Samstag");
      },

      function () {
        return testutil.assert_functionReturns("getDayName(7)", "Sonntag");
      },

      function () {
        return testutil.assert_functionReturns("getDayName(0)", "unbekannt");
      },

      function () {
        return testutil.assert_functionReturns("getDayName(8)", "unbekannt");
      }
    ]

  });

})(jshero.testutil);
