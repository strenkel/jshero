jshero.koans.add({

  id: "var2",

  title: "Mehrere Variablen",

  lesson: "Möchte man mehrere Variable deklarieren und initialisieren, so kann man das in zwei Programmzeilen tun:" +
    "<pre><code>var stadt = 'Prag';</code><br><code>var land = 'Tschechien';</code></pre>" +
    "Jede Anweisung wird dabei mit einem Semikolon (<code>;</code>) abgeschlossen.",
        
  task: "Deklariere eine Variable <code>blume</code> und weise ihr den Wert <code>'Rose'</code> zu. " +
    "Deklariere eine zweite Variable <code>tier</code> und weise ihr den Wert <code>'Käfer'</code> zu.",

  beforeTests: function() {
    if (typeof blume !== "undefined") {
      blume = undefined;
    }
    if (typeof tier !== "undefined") {
      tier = undefined;
    }
  },

  tests: [
    "'blume' hat einen Wert.",
    function() {
      return typeof blume !== 'undefined';
    },
    "'blume' hat den Wert 'Rose'.",
    function() {
      return blume === "Rose";
    },
    "'tier' hat einen Wert.",
    function() {
      return typeof tier !== 'undefined';
    },
    "'tier' hat den Wert 'Käfer'.",
    function() {
      return tier === "Käfer";
    }
  ],

});
