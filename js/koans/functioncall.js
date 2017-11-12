jshero.koans.add({

  id: "functioncall",

  title: "Funktionsaufrufe",

  lesson: `Wichtig ist der Unterschied zwischen der Definition und dem Aufruf einer Funktion.
    Mit der Definition (z. B. <code>var f = function() { return "hallo"; }</code>) wird festgelegt, was die Funktion machen soll. Sie wird dabei nicht ausgeführt. Sie wird lediglich zur Ausführung bereitgestellt.
    Erst mit ihrem Aufruf (z. B. <code>f()</code>) wird die Funktion ausgeführt. Dann werden die Anweisung im Funktionsblock der Reihe nach abgearbeitet.
    Definiert werden Funktionen mit dem Schlüsselwort <code>function</code>. Ist die Funktion einer Variablen zugewiesen, geschieht der Aufruf der Funktion über diese Variable.
    Funktionen werden einmal definiert, um sie dann an verschiedenen Programmstellen durch ihren Aufruf zu nutzen.`,

  task: `1. Definiere eine Funktion <code>begruesse</code>, die den Wet <code>"Moin!"</code> zurückgibt.
  <br/>
    2. Deklariere eine Variable <code>begruessung</code>. Rufe die Funktion <code>begruesse</code> auf und weise der Variablen <code>begruessung</code> die Rückgabe dieses Aufrufs zu. (Erinnerung: eine Zuweisung erfolgt mit dem <code>=</code>-Zeichen, genauso wie bei Variablen)`,

  beforeTests: function() {
      begruesse = undefined;
      begruessung = undefined;
  },

  tests: [

    function() {
        return jshero.testutil.assert_de_isFunction('begruesse');
    },

    function() {
        return jshero.testutil.assert_de_functionReturns('begruesse', 'begruesse()', 'Moin!');
    },

    function() {
        return jshero.testutil.assert_de_variableDefined(begruessung, 'begruessung');
    },

    function() {
        return jshero.testutil.assert_de_variableHasValue(begruessung, 'begruessung', 'Moin!');
    }
  ]

});
