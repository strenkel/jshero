jshero.koans.add({

  id: 'var2',

  title: 'Several variables',

  lesson: `Several variables are declared and initialized in 2 program lines:
<pre><code>var city = 'Lubumbashi';
var country = 'Congo';</code></pre>`,

  task: `Declare a variable <code>flower</code> and assign it the value <code>'rose'</code>.
Declare a second variable <code>tree</code> and assign it the value <code>'maple'</code>.`,

  tests: [
    function() {
      return jshero.testutil.assert_variableDefined('flower');
    },

    function() {
      return jshero.testutil.assert_variableHasValue('flower', 'rose');
    },

    function() {
      return jshero.testutil.assert_variableDefined('tree');
    },

    function() {
      return jshero.testutil.assert_variableHasValue('tree', 'maple');
    }
  ]

});
