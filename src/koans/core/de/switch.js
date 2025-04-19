(function (testutil) {

  jshero.koans.add({

    id: 'switch',

    title: 'Switch',

    lesson: `Die <code>switch</code>-Anweisung ermöglicht es dir, verschiedene Codeblöcke auszuführen – je nachdem, welchen Wert eine Variable hat.  
Sie ist eine übersichtlichere Alternative zu mehreren <code>if...else if</code>-Bedingungen, wenn du dieselbe Variable mit verschiedenen Werten vergleichen willst.

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

Jeder <code>case</code> prüft, ob die Variable (hier <code>fruit</code>) einem bestimmten Wert entspricht (z. B. <code>'banana'</code> oder <code>'apple'</code>).  
Wenn eine Übereinstimmung gefunden wird, wird der zugehörige Code ausgeführt. Das <code>break</code> sorgt dafür, dass der <code>switch</code>-Block danach verlassen wird.

Falls kein <code>case</code> passt, wird der Code im <code>default</code>-Block (sofern vorhanden) ausgeführt.

Im obigen Beispiel ist der Wert von <code>fruit</code> <code>'apple'</code>, daher wird <code>Red</code> ausgegeben.`,

    task: `Schreibe eine Funktion <code>getDayName</code>, die eine Zahl zwischen 1 und 3 entgegennimmt und den entsprechenden Wochentag zurückgibt.

Verwende eine <code>switch</code>-Anweisung.<br><br>

- 1 → 'Montag'<br>
- 2 → 'Dienstag'<br>
- 3 → 'Mittwoch'<br><br>

<code>getDayName(1)</code> soll <code>'Montag'</code> zurückgeben.`,

    hint: `<pre><code>function getDayName(n) {
  ...
}</code></pre>`,

    solution: `<pre><code>function getDayName(n) {
  switch (n) {
    case 1:
      return 'Montag';
    case 2:
      return 'Dienstag';
    case 3:
      return 'Mittwoch';
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
      }

    ]

  });

})(jshero.testutil);
