jshero.koans.add({

  id: "function",

  title: "Funktionen",

  lesson: 'Eine Funktion ist ein Block von Anweisungen, der beliebig oft ausgeführt werden kann. ' +
    'Eine Funktion kann Parameter entgegennehmen und eine Funktion kann einen Wert zurückgeben. ' +
    'Funktionen werden mit dem Schlüsselwort <code>function</code> definiert. Darauf folgen in runden Klammern eingeschlossen die Parameter und ' +
    'anschließend, eingeschlossen in geschweiften Klammern, die Anweisungen. Mit dem Schlüsselwort <code>return</code> ' +
    'kann ein Wert zurückgegeben werden. Funktionen kann man Variablen zuodnen. Die Funktion trägt dann den Namen der Variablen. Mit ' +
    '<pre><code>var farbe = function() {<br>  return "grün";<br>};</code></pre> definieren wir eine Funktion <code>farbe</code>, ' +
    'die <code>"grün"</code> zurückgibt. Die Funktion nimmt keine Paramter entgegen (die runde Klammer ist leer) und sie enthält genau ' +
    'eine Anweisung, die Rückgabe.',
        
  task: 'Schreibe eine Funktion <code>hallo</code>, die <code>"Hallo Welt!"</code> zurückgibt.',

  beforeTests: function() {
    if (typeof hallo !== "undefined") {
      hallo = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof hallo === 'function';
      var msg;
      if (ok) {
        msg = '<code>hallo</code> ist eine Funktion.';
      } else {
        msg = '<code>hallo</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
 
    function() {
      var ok, msg;
      try {
        var result = hallo();
        ok = result === "Hallo Welt!";
        if (ok) {
          msg = '<code>hallo()</code> gibt <code>"Hallo Welt!"</code> zurück.';
        } else {
          msg = '<code>hallo()</code> gibt nicht <code>"Hallo Welt!"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(e) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>hallo()</code>.";
      }
      return {
        ok: ok,
        msg: msg
      };
    }
  ]

});
