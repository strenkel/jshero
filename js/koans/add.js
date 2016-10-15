jshero.koans.add({

  id: "add",

  title: "Addition",

  task: "Mit <code>+</code> addierst du Zahlen.<br>" +
        "Schreibe eine Funktion <code>add</code>, die 2 Zahlen addiert.",

  beforeTests: function() {
    if (typeof add !== "undefined") {
      add = undefined;
    }
  },

  tests: [
    "'add' ist eine Funktion.",
    function() {
      return typeof add === 'function';
    },
    "'add' hat zwei Parameter.",
    function() {
      return add.length === 2;
    },
    "add(0, 0) = 0",
    function() {
      return add(0, 0) === 0;
    },
    "add(2, 5) = 7",
    function() {
      return add(2, 5) === 7;
    }
  ],

});
