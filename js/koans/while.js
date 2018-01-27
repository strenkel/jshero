jshero.koans.add({

  id: 'while',

  title: 'while-Schleife',

  lesson: `Die <code>while</code>-Schleife besitzt nur eine Schleifen-Bedingung.
Der Schleifen-Code wird ausgeführt, solange die Bedingung <code>true</code> ergibt.
Ergibt die Bedingung <code>false</code>, wird die Schleife beendet und die Codeausführung
wird nach der Schleife fortgesetzt.

<pre><code>var space = "";
while (space.length < 3) {
  space = space + "x";
}</code></pre>

Solange <code>space</code> weniger als 3 Zeichen besitzt, wird es um <code>"x"</code> ergänzt.
Hat <code>space</code> die Länge 3, wird die Schleife beendet.
<code>space</code> hat dann den Wert <code>"xxx"</code>.`,

  task: `Schreibe eine Funktion <code>abstand</code>, die eine natürliche Zahl n als Parameter
entgegennimmt und die einen String bestehend aus n Leerzeichen zurückgibt.
<code>abstand(1)</code> sollte <code>" "</code> ergeben.`,

  beforeTests: function() {
    if (typeof abstand !== "undefined") {
      abstand = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('abstand');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('abstand', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('abstand(0)', "");
    },

    function() {
      return jshero.testutil.assert_functionReturns('abstand(2)', "  ");
    },

    function() {
      return jshero.testutil.assert_functionReturns('abstand(5)', "     ");
    }
  ]

});
