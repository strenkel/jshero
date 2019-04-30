jshero.koans.add({

  id: 'arraysort',

  title: 'Arrays sortieren',

  lesson: 'Wir können jetzt Arrays mit vorgegebener Länge sortieren.',

  task: `Schreibe eine Funktion <code>sortiere</code>, die ein mit 3 Zahlen gefülltes Array entgegennimmt und die diese 3 Zahlen aufsteigend sortiert als Array  zurückgibt.
<code>sortiere([2,&nbsp;3,&nbsp;1])</code> sollte <code>[1,&nbsp;2,&nbsp;3]</code> ergeben.`,

  beforeTests: function() {
    if (typeof sortiere !== 'undefined') {
      sortiere = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('sortiere');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('sortiere', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sortiere([1, 2, 3])', [1, 2, 3]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sortiere([1, 3, 2])', [1, 2, 3]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sortiere([2, 1, 3])', [1, 2, 3]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sortiere([2, 3, 1])', [1, 2, 3]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sortiere([3, 1, 2])', [1, 2, 3]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sortiere([3, 2, 1])', [1, 2, 3]);
    }

  ]

});
