jshero.koans.add({

  id: "numbertostring",

  title: "Number: toString()",

  lesson: 'Die Number-Methode <code>toString</code> wandelt eine Zahl in den entsprechenden String um. Der Dezimalpunkt wird dabei als Punkt dargestellt. ' +
    'Das kann man z.B. dazu verwenden, eine Zahl im deutschen Format, also mit Komma als Dezimalpunkt, auszugeben:' +
    '<code><pre>' +
    'var number = 7.25;<br>' +
    'var numberInEnglish = number.toString();<br>' +
    'var numberInGerman = numberInEnglish.replace(".", ",");' +
    '</code></pre>' +
    '<code>numberInEnglish</code> enthält den String <code>"7.25"</code>. Da wir jetzt unsere Zahl als String vorliegen haben, können wir auf ihr die String-Methode ' +
    '<code>replace</code> anwenden. <code>numberInGerman</code> enthält so den String <code>"7,25"</code>.',
        
  task: 'Schreibe eine Funktion <code>digitLength</code>, die eine natürliche Zahl entgegennimmt und die Anzahl der Ziffern zurückgibt. ' +
    '<code>digitLength(709)</code> sollte 3 zurückgeben.',
 
  beforeTests: function() {
    if (typeof digitLength !== "undefined") {
      digitLength = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof digitLength === 'function';
      var msg;
      if (ok) {
        msg = "<code>digitLength</code> ist eine Funktion.";
      } else {
        msg = "<code>digitLength</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = digitLength.length === 1;
      var msg;
      if (ok) {
        msg = "<code>digitLength</code> hat einen Parameter.";
      } else {
        msg = "<code>digitLength</code> hat nicht 1, sondern " + digitLength.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = digitLength(1);
        ok = result === 1;
        if (ok) {
          msg = '<code>digitLength(1)</code> gibt <code>1</code> zurück.';
        } else {
          msg = '<code>digitLength(1)</code> gibt nicht <code>1</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>digitLength(1)</code>.";
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = digitLength(709);
        ok = result === 3;
        if (ok) {
          msg = '<code>digitLength(709)</code> gibt <code>3</code> zurück.';
        } else {
          msg = '<code>digitLength(709)</code> gibt nicht <code>3</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>digitLength(709)</code>.";
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    }

  ]

});
