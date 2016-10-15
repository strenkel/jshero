jshero.koans.add({

  id: "function",

  title: "Funktionen",

  lesson: "Eine Funktion ist ein Block von Anweisungen, der beliebig oft ausgeführt werden kann. " +
    "Eine Funktion kann Parameter entgegennehmen und eine Funktion kann einen Wert zurückgeben. " +
    "Funktionen werden mit dem Schlüsselwort <code>function</code> definiert. Darauf folgen in runden Klammern eingeschlossen die Parameter und " +
    "anschließend, eingeschlossen in geschweiften Klammern, die Anweisungen. Mit dem Schlüsselwort <code>return</code> " +
    "kann ein Wert zurückgegeben werden. Funktionen kann man Variablen zuodnen. Die Funktion trägt dann den Namen der Variablen. Mit " +
    "<pre><code>var farbe = function() {<br>  return 'grün';<br>};</code></pre> definieren wir eine Funktion <code>farbe</code>, " +
    "die <code>grün</code> zurückgibt. Die Funktion nimmt keine Paramter entgegen (die runde Klammer ist leer) und sie enthält genau " +
    "eine Anweisung, die Rückgabe.",
        
  task: "Schreibe eine Funktion <code>hallo</code>, die <code>Hallo Welt!</code> zurückgibt.",

  beforeTests: function() {
    if (typeof hallo !== "undefined") {
      hallo = undefined;
    }
  },

  tests: [
    "'hallo' ist eine Funktion.",
    function() {
      return typeof hallo === 'function';
    },
    "'hallo' gibt 'Hallo Welt!' zurück.",
    function() {
      return hallo() === "Hallo Welt!";
    }
  ],

});
