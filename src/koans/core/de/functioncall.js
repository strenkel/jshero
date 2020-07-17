(function(testutil) {

  jshero.koans.add({

    id: 'functioncall',

    title: 'Funktionsaufruf',

    lesson: `Wichtig ist der Unterschied zwischen der Definition und dem Aufruf einer Funktion.
Mit der Definition, z. B.

<pre><code>function f() {
  return 'hallo';
}</code></pre>

wird festgelegt, was die Funktion machen soll. Sie wird dabei nicht ausgeführt.
Sie wird lediglich zur Ausführung bereitgestellt.
Erst mit ihrem Aufruf

<pre><code>let x = f();</code></pre>

wird die Funktion ausgeführt. Dann werden die Anweisungen im Funktionsblock der Reihe nach abgearbeitet.
Die Rückgabe der Funktion wird in diesem Beispiel der Variablen <code>x</code> zugewiesen. <code>x</code> erhält den
Wert <code>'hallo'</code>. Definiert wurde die Funktion mit dem Schlüsselwort <code>function</code>.
Aufgerufen wurde die Funktion über ihren Namen.`,

    task: `1. Definiere eine Funktion <code>begruesse</code>, die den Wert <code>'Moin!'</code> zurückgibt.
<br/>
2. Deklariere eine Variable <code>begruessung</code>. Rufe die Funktion <code>begruesse</code> auf und weise der Variablen
<code>begruessung</code> die Rückgabe dieses Aufrufs zu.`,

    hint: `<pre><code>function begruesse() {
  ...
}

let begruessung = ...</code></pre>`,

    solution: `<pre><code>function begruesse() {
  return 'Moin!';
}

let begruessung = begruesse();</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isFunction('begruesse');
      },

      function() {
        return testutil.assert_functionReturns('begruesse()', 'Moin!');
      },

      function() {
        return testutil.assert_variableDefined('begruessung');
      },

      function() {
        return testutil.assert_variableHasValue('begruessung', 'Moin!');
      }
    ]

  });

})(jshero.testutil);