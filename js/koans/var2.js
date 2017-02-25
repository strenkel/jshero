jshero.koans.add({

  id: "var2",

  title: "Mehrere Variablen",

  lesson: 'Möchte man mehrere Variablen deklarieren und initialisieren, so kann man das in zwei Programmzeilen tun:' +
    '<pre><code>var stadt = "Prag";<br>var land = "Tschechien";</code></pre>' +
    'In jeder Zeile steht eine Anweisung. Jede Anweisung wird mit einem Semikolon abgeschlossen.',
        
  task: 'Deklariere eine Variable <code>blume</code> und weise ihr den Wert <code>"Rose"</code> zu. ' +
    'Deklariere eine zweite Variable <code>tier</code> und weise ihr den Wert <code>"Käfer"</code> zu.',

  beforeTests: function() {
    if (typeof blume !== "undefined") {
      blume = undefined;
    }
    if (typeof tier !== "undefined") {
      tier = undefined;
    }
  },

  tests: [
  
    function() {
      
      var ok = typeof blume !== 'undefined';
      var msg;
      if (ok) {
        msg = "<code>blume</code> hat einen Wert.";
      } else {
        msg = "<code>blume</code> hat keinen Wert.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok = blume === "Rose";
      var msg;
      if (ok) {
        msg = '<code>blume</code> hat den Wert <code>"Rose"</code>.';
      } else {
        msg = '<code>blume</code> hat nicht den Wert <code>"Rose"</code>, sondern den Wert <code>' + JSON.stringify(blume) + '</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      
      var ok = typeof tier !== 'undefined';
      var msg;
      if (ok) {
        msg = "<code>tier</code> hat einen Wert.";
      } else {
        msg = "<code>tier</code> hat keinen Wert.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok = tier === "Käfer";
      var msg;
      if (ok) {
        msg = '<code>tier</code> hat den Wert <code>"Käfer"</code>.';
      } else {
        msg = '<code>tier</code> hat nicht den Wert <code>"Käfer"</code>, sondern den Wert <code>' + JSON.stringify(tier) + '</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }

  ]

});
