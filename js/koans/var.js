jshero.koans.add({

  id: "var",

  title: "Variablen",

  lesson: 
    'JavaScript-Programme bestehen aus einer Reihe von Anweisungen. Jede Anweisung führt eine elementare Operation durch. ' +
    'Durch das Ausführen vieler Anweisungen kann man schließlich komplexe Aufgaben lösen. Große Programme bestehen aus Tausenden von Anweisungen. ' + 
    'Normalerweise schreibt man jede Anweisung in eine Zeile und schließt die Anweisung mit einem Semikolon ab. <br><br>' +
    'Eine elementare Anweisung ist die Deklaration und Initialisierung einer Variablen. ' +
    'In der Programmierung ist eine Variable ein Behälter für einen Wert. ' + 
    'Mit der Anweisung <pre><code>var stadt = "Prag";</code></pre> deklariert man eine Variable mit dem Namen <code>stadt</code> und initialisiert sie mit dem Wert <code>"Prag"</code>. ' +
    'Mit dem Schlüsselwort <code>var</code> wird die Variable deklariert. ' +
    'Mit dem Gleichheitszeichen, dem Zuweisungsoperator, weist man der Variablen einen Wert zu.',
        
  task: 'Deklariere eine Variable <code>vorname</code> und initialisiere sie mit dem Wert <code>"Franz"</code>.',

  beforeTests: function() {
    if (typeof vorname !== "undefined") {
      vorname = undefined;
    }
  },

  tests: [
  
    function() {
      var ok = typeof vorname !== 'undefined';
      var msg;
      if (ok) {
        msg = "<code>vorname</code> hat einen Wert.";
      } else {
        msg = "<code>vorname</code> hat keinen Wert.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
 
    
    function() {
      var ok = vorname === "Franz";
      var msg;
      if (ok) {
        msg = '<code>vorname</code> hat den Wert "Franz".';
      } else {
        msg = '<code>vorname</code> hat nicht den Wert <code>"Franz"</code>, sondern den Wert <code>' + JSON.stringify(vorname) + '</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }
  ]

});
