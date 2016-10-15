jshero.koans.add({

  id: "var",

  title: "Variable",

  task: "In der Programmierung ist eine Variable ein Behälter für einen Wert.<br>" + 
        "Mit <pre><code>var stadt = 'Prag';</code></pre> definiert man eine Variable mit dem Namen <code>stadt</code> und ordnet ihr den Wert <code>'Prag'</code> zu. " +
        "Mit dem Schlüsselwort <code>var</code> wird die Variable deklariert. " +
        "Mit dem Gleichheitszeichen weist man der Variablen einen Wert zu.<br>" +
        "<em>Aufgabe:</em> Definiere eine Variable <code>vorname</code> und weise ihr den Wert <code>'Franz'</code> zu.",

  beforeTests: function() {
    if (typeof vorname !== "undefined") {
      vorname = undefined;
    }
  },

  tests: [
    "'vorname' hat einen Wert.",
    function() {
      return typeof vorname !== 'undefined';
    },
    "'vorname' hat den Wert 'Franz'",
    function() {
      return vorname === "Franz";
    }
  ],

});
