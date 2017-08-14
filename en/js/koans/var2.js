jshero.koans.add({

  id: "var2",

  title: "Several variables",

  lesson: 'Several variables are declared and initialized in 2 program lines:' +
    '<pre><code>var city = "Lubumbashi";<br>' +
    'var country = "Congo";</code></pre>' +
    'Each line has a statement. Each statement should be terminated with a semicolon.',
        
  task: 'Declare a variable <code>flower</code> and assign it the value <code>"rose"</code>. ' +
    'Declare a second variable <code>tree</code> and assign it the value <code>"maple"</code>.',

  beforeTests: function() {
    if (typeof flower !== "undefined") {
      flower = undefined;
    }
    if (typeof tree !== "undefined") {
      tree = undefined;
    }
  },

  tests: [
  
    function() {
      
      var ok = typeof flower !== 'undefined';
      var msg;
      if (ok) {
        msg = "<code>flower</code> has a value.";
      } else {
        msg = "<code>flower</code> has no value.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok = flower === "rose";
      var msg;
      if (ok) {
        msg = '<code>flower</code> has the value <code>"rose"</code>.';
      } else {
        msg = '<code>flower</code> does not have the value <code>rose</code>, but the value <code>' + JSON.stringify(flower) + '</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      
      var ok = typeof tree !== 'undefined';
      var msg;
      if (ok) {
        msg = "<code>tree</code> has a value.";
      } else {
        msg = "<code>tree</code> has no value.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok = tree === "maple";
      var msg;
      if (ok) {
        msg = '<code>tree</code> has the value <code>"maple"</code>.';
      } else {
        msg = '<code>tree</code> does not have the value <code>"maple"</code>, but the value <code>' + JSON.stringify(tree) + '</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }

  ]

});
