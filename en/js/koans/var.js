jshero.koans.add({

  id: "var",

  title: "Variables",

  lesson: 
    'JavaScript programs consist of a series of statements. Each statement performs an elementary operation. ' +
    'By executing many instructions you can finally solve complex tasks. ' + 
    'Each statement is written in a line and closed with a semicolon.<br><br>' +
    'An elementary statement is the declaration and initialization of a variable. ' +
    'In programming, a variable is a container for a value. ' + 
    'The statement ' +
    '<pre><code>var city = "Porbandar";</code></pre>' +
    'declares a variable with the name <code>city</code> and initializes it with the value <code>"Porbandar"</code>. ' +
    'The variable is declared with the keyword <code>var</code>. ' +
    'Use the equals sign, the assignment operator, to assign a value to the variable. ' +
    'Note: JavaScript is case-sensitive. <code>city</code> and <code>City</code> are two different variables.',
        
  task: 'Declare a variable <code>firstname</code> and initialize it with the value <code>"Lata"</ code>.',

  beforeTests: function() {
    if (typeof firstname !== "undefined") {
      firstname = undefined;
    }
  },

  tests: [
  
    function() {
      var ok = typeof firstname !== 'undefined';
      var msg;
      if (ok) {
        msg = "<code>firstname</code> hat einen Wert.";
      } else {
        msg = "<code>firstname</code> hat keinen Wert.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
 
    
    function() {
      var ok = firstname === "Lata";
      var msg;
      if (ok) {
        msg = '<code>firstname</code> hat den Wert "Lata".';
      } else {
        msg = '<code>firstname</code> hat nicht den Wert <code>"Lata"</code>, sondern den Wert <code>' + JSON.stringify(vorname) + '</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }
  ]

});
