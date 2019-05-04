jshero.koans.add({

  id: 'stringindexof',

  title: 'String: indexOf()',

  lesson: `Um die Position eines Strings innerhalb eines anderen Strings zu bestimmen, verwendet man die Methode <code>indexOf</code>:

<pre><code>var n1 = 'Bit'.indexOf('it');
var n2 = 'Bit'.indexOf('js');
var n3 = 'Bit'.indexOf('IT');</code></pre>

<code>n1</code> ist <code>1</code>, da <code>'it'</code> in <code>'Bit'</code> an der 1. Stelle beginnt.
Wie üblich beginnt die Zählung mit 0.
Kommt das Suchwort im aufrufenden String nicht vor, wird <code>-1</code> zurückgegeben. <code>n2</code> ist also <code>-1</code>.
Die Methode <code>indexOf()</code> unterscheidet zwischen Groß- und Kleinschreibung. <code>n3</code> ist also auch <code>-1</code>.`,

  task: `Schreibe eine Funktion <code>indexOfIgnoreCase</code>, die 2 Strings entgegennimmt und wie die Methode
<code>indexOf</code> die Position des zweiten Strings im ersten String bestimmt. Im Unterschied zur Methode
<code>indexOf</code> soll die Groß- oder Kleinschreibung keine Rolle spielen. Sowohl <code>indexOfIgnoreCase('JS', 'JS')</code>
als auch <code>indexOfIgnoreCase('JS', 'js')</code> sollten <code>0</code> ergeben.`,

hint: `<pre><code>var indexOfIgnoreCase = function(s1, s2) {
// Wandle s1 und s2 zuerst
// in Kleinbuchstaben um.
// Verwende dann die
// indexOf-Methode. 
};</code></pre>`,

solution: `<pre><code>var indexOfIgnoreCase = function(s1, s2) {
  var s1Klein = s1.toLowerCase();
  var s2Klein = s2.toLowerCase();
  return s1Klein.indexOf(s2Klein);
};</code></pre>`,

  beforeTests: function() {
    if (typeof indexOfIgnoreCase !== 'undefined') {
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
      return jshero.testutil.assert_functionReturns("indexOfIgnoreCase('JS', 'js')", 0);
    },

    function() {
      return jshero.testutil.assert_functionReturns("indexOfIgnoreCase('JavaScript', 'Script')", 4);
    },

    function() {
      return jshero.testutil.assert_functionReturns("indexOfIgnoreCase('Fred Feuerstein', 'FEUER')", 5);
    },

    function() {
      return jshero.testutil.assert_functionReturns("indexOfIgnoreCase('WILMA FEUERSTEIN', 'feuer')", 6);
    }

  ]

});
