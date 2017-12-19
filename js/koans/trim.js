jshero.koans.add({

  id: "trim",

  title: "String: trim()",

  lesson: 'Die Methode <code>trim</code> entfernt Leerzeichen an beiden Enden eines Strings. Der an den Enden um Leerzeichen bereinigte String wird zurückgegeben. ' +
    'Der ursprügliche String bleibt unverändert.' +
    '<pre><code>' +
    'var eingabe = " Rosa Parks ";<br>' +
    'var name = eingabe.trim();' +
    '</code></pre>' +
    '<code>name</code> enthält den String <code>"Rosa Parks"</code>. Wie angedeutet werden häufig Benutzereingaben vor der Verarbeitung getrimmt.',

  task: 'Schreibe eine Funktion <code>firstChar</code>, die bei Übergabe eines Strings das erste Zeichen, das kein Leerzeichen ist, zurückgibt. ' +
    '<code>firstChar(" Rosa")</code> sollte <code>"R"</code> zurückgeben.',

  beforeTests: function() {
    if (typeof firstChar !== "undefined") {
      firstChar = undefined;
    }
  },

  tests: [
    function() {
        return jshero.testutil.assert_isFunction('firstChar');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('firstChar', 1);
    },

    function() {
        return jshero.testutil.assert_functionReturns('firstChar(" Maria")', 'M');
    },

    function() {
        return jshero.testutil.assert_functionReturns('firstChar("1 Kaffee")', 'K');
    },

    function() {
        return jshero.testutil.assert_functionReturns('firstChar("Franz")', 'F');
    }
  ]

});
