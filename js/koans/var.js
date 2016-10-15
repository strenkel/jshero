jshero.koans.add({

  id: "var",

  title: "Variablen",

  lesson: "In der Programmierung ist eine Variable ein Behälter für einen Wert.<br>" + 
    "Mit <pre><code>var stadt = 'Prag';</code></pre> deklariert man eine Variable mit dem Namen <code>stadt</code> und initialisiert sie mit dem Wert <code>'Prag'</code> zu. " +
    "Mit dem Schlüsselwort <code>var</code> wird die Variable deklariert. " +
    "Mit dem Gleichheitszeichen weist man der Variablen einen Wert zu.",
        
  task: "Deklariere eine Variable <code>vorname</code> und initialisiere sie mit dem Wert <code>'Franz'</code> zu.",

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
    "'vorname' hat den Wert 'Franz'.",
    function() {
      return vorname === "Franz";
    }
  ],

});
