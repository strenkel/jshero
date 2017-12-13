jshero.koans.add({

  id: "parameter",

  title: "Parameter",

  lesson: 'Jetzt lernen wir Funktionen mit Parametern kennen. Mit <pre><code>var gebe = function(eingabe) {<br>  return eingabe;<br>};</code></pre>' +
    'definieren wir eine Funktion, die den übergebenen Parameter <code>eingabe</code> einfach wieder zurückgibt. ' +
    'Parameter sind Variablen. Sie stehen in der runden Klammer und benötigen nicht das Schlüsselwort <code>var</code> zu ihrer Deklaration. ' +
    'Mit <pre><code>var ergebnis = gebe("Apfel");</code></pre>' +
    'wird die Funktion mit dem Argument <code>"Apfel"</code> aufgerufen. Jetzt wird unsere zuvor definierte Funktion ' +
    'ausgeführt. Dabei wird zunächst das Argument <code>"Apfel"</code> dem Parameter <code>eingabe</code> zugewiesen. <code>eingabe</code> hat jetzt den ' +
    'Wert <code>"Apfel"</code>. In der einzigen Codezeile der Funktion wird nun die Variable <code>eingabe</code> mit der ' +
    '<code>return</code>-Anweisung zurückgegeben. Diese Rückgabe wird der Variablen <code>ergebnis</code> zugewiesen. <code>ergebnis</code> hat ' +
    'dann auch den Wert <code>"Apfel"</code>.',

  task: 'Schreibe eine Funktion <code>echo</code>, die ebenfalls den übergebenen Parameter wieder zurückgibt.',

  beforeTests: function() {
    if (typeof echo !== "undefined") {
      echo = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('echo');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('echo', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('echo("Hallo Welt!")', "Hallo Welt!");
    },

    function() {
      return jshero.testutil.assert_functionReturns('echo("Franz")', "Franz");
    }
  ]

});
