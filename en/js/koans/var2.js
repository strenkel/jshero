jshero.koans.add({

  id: "var2",

  title: "Several variables",

  lesson: 'Several variables are declared and initialized in 2 program lines:' +
    '<pre><code>var city = "Lubumbashi";<br>' +
    'var country = "Congo";</code></pre>',

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
      return jshero.testutil.assert_variableDefined(flower, 'flower');
    },

    function() {
      return jshero.testutil.assert_variableHasValue(flower, 'flower', 'rose');
    },

    function() {
      return jshero.testutil.assert_variableDefined(tree, 'tree');
    },

    function() {
      return jshero.testutil.assert_variableHasValue(tree, 'tree', 'maple');
    }
  ]

});
