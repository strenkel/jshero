jshero.koans.add({

  id: 'regexnot',

  title: 'Regex: Negation',

  lesson: `Möchte man alle Zeichen bis auf einige Ausnahmen zulassen, kann man mit <code>^</code> die Zeichenauswahl
negieren. <code>^</code> ist als Negation nur innerhalb einer Zeichenauswahl gültig. Es muss an erster Stelle der
Zeichenauswahl stehen und negiert die komplette Auswahl. <code>[^ab]</code> steht für alle Zeichen außer einem 
<code>a</code> oder <code>b</code> und <code>[^0-9]</code> steht für alle Zeichen außer einer Ziffer.`,

  task: `Schreibe eine Funktion <code>test</code>, die prüft, ob ein String nur Zeichen des englischen
Alphabets enthällt. <code>test('Blue')</code> sollte <code>true</code> und <code>test('Blue sea')</code> sollte
<code>false</code> ergeben (das Leerzeichen gehört nicht zum Alphabet).`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('test');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('test', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('Red')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('OFC')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('Red wine')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('CO2')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('&Foo')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('#Foo')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('Fritz?')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("test('a-z')", false);
    }

  ]

});
