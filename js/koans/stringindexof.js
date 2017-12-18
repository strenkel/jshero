jshero.koans.add({

  id: 'stringindexof',

  title: 'String: indexOf()',

  lesson: 'Um die Position eines Strings innerhalb eines anderen Strings zu bestimmen, verwendet man die Methode <code>indexOf</code>:' +
    '<pre><code>' +
    'var n1 = "Fred Feuerstein".indexOf("Feuer");<br>' +
    'var n2 = "Fred Feuerstein".indexOf("Rauch");<br>' +
    'var n3 = "Fred Feuerstein".indexOf("FEUER");<br>' +
    '</code></pre>' +
    '<code>n1</code> ist <code>5</code>, da <code>"Feuer"</code> in <code>"Fred Feuerstein"</code> an der 5. Stelle beginnt. Wie üblich werden Strings von 0 an durchnummeriert. ' +
    'Kommt das Suchwort im aufrufenden String nicht vor, wird <code>-1</code> zurückgegeben. <code>n2</code> ist also <code>-1</code>. ' +
    'Die Methode <code>indexOf()</code> unterscheidet zwischen Groß- und Kleinschreibung. <code>n3</code> ist also auch <code>-1</code>.',

  task: 'Schreibe eine Funktion <code>indexOfIgnoreCase</code>, die 2 Strings entgegennimmt und wie die Methode <code>indexOf</code> die Position des ' +
    'zweiten Strings im ersten String bestimmt. Im Unterschied zur Methode <code>indexOf</code> soll die Groß- oder Kleinschreibung keine Rolle spielen. ' +
    'Sowohl <code>indexOfIgnoreCase("So", "so")</code> als auch <code>indexOfIgnoreCase("so", "So")</code> sollen <code>0</code> ergeben.',

  beforeTests: function() {
    if (typeof indexOfIgnoreCase !== "undefined") {
      indexOfIgnoreCase = undefined;
    }
  },

  tests: [
    function() {
        return jshero.testutil.assert_isFunction('indexOfIgnoreCase');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('indexOfIgnoreCase', 2);
    },

    function() {
        return jshero.testutil.assert_functionReturns('indexOfIgnoreCase("Fred Feuerstein", "FEUER")', 5);
    },

    function() {
        return jshero.testutil.assert_functionReturns('indexOfIgnoreCase("WILMA FEUERSTEIN", "feuer")', 6);
    },

    function() {
        return jshero.testutil.assert_functionReturns('indexOfIgnoreCase("JavaScript", "Script")', 4);
    }
  ]

});
