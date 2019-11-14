(function(testutil) {

  jshero.koans.add({

    id: 'parameter',

    title: 'Parameter',

    lesson: `Jetzt lernen wir Funktionen mit Parametern kennen. Mit

  <pre><code>var gebe = function(eingabe) {
  return eingabe;
};</code></pre>

definieren wir eine Funktion, die den übergebenen Parameter <code>eingabe</code> einfach wieder zurückgibt.
Parameter sind Variablen. Sie stehen in der runden Klammer und benötigen nicht das Schlüsselwort <code>var</code> zu
ihrer Deklaration. Mit

<pre><code>var ergebnis = gebe('Apfel');</code></pre>

wird die Funktion mit dem Argument <code>'Apfel'</code> aufgerufen. Jetzt wird unsere zuvor definierte Funktion
ausgeführt. Dabei wird zunächst das Argument <code>'Apfel'</code> dem Parameter <code>eingabe</code> zugewiesen.
<code>eingabe</code> hat jetzt den Wert <code>'Apfel'</code>. In der einzigen Codezeile der Funktion wird nun die
Variable <code>eingabe</code> mit der <code>return</code>-Anweisung zurückgegeben. Diese Rückgabe wird der Variablen
<code>ergebnis</code> zugewiesen. <code>ergebnis</code> hat dann auch den Wert <code>'Apfel'</code>.`,

    task: `Schreibe eine Funktion <code>echo</code>, die ebenfalls den übergebenen Parameter wieder zurückgibt.
<code>echo('Greta')</code> sollte <code>'Greta'</code> und <code>echo('CO2')</code> sollte <code>'CO2'</code>
zurückgeben.`,

    hint: `<pre><code>var echo = function(ton) {
  ...
};</code></pre>`,

    solution: `<pre><code>var echo = function(ton) {
  return ton;
};</code></pre>`,

    tests: [
      function() {
        return testutil.assert_isFunction('echo');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('echo', 1);
      },

      function() {
        return testutil.assert_functionReturns("echo('Greta')", 'Greta');
      },

      function() {
        return testutil.assert_functionReturns("echo('CO2')", 'CO2');
      }
    ]

  });

})(jshero.testutil);