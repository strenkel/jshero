jshero.koans.add({

  id: 'break',

  title: 'break und continue',

  lesson: 'Mit <code>break</code> wird eine Schleife beendet. Das Programm wird nach der Schleife fortgesetzt. ' +
    '<pre><code>var satz = "So ist das.";<br>' +
    'for (var i = 0; i < satz.length; i++) {<br>' +
    '  if (satz.charAt(i) === " ") {<br>' +
    '    break;<br>' +
    '  }<br>' +
    '}<br>' +
    'var laengeErstesWort = i;</code></pre>' +
    'Ist das i-te Zeichen in <code>satz</code> das Leerzeichen, ist die <code>if</code> - Bedingung erfüllt ' +
    'und der <code>break</code> - Befehl wird ausgeführt. Die Schleife wird beendet und die Codeausführung ' +
    'nach der Schleife fortgesetzt.<br>' +
    'Mit <code>continue</code> wird der aktuelle Schleifendurchlauf beendet. Die Programmausführung springt zum Schleifenkopf.' +
    '<pre><code>var summe = 0;<br>' +
    'for (var i = 0; i < 10; i++) {<br>' +
    '  if (i % 2 === 0) {<br>' +
    '    continue;<br>' +
    '  }<br>' +
    '  summe = summe + i;<br>' +
    '}<br></code></pre>' +
    'Ist <code>i</code> eine ungerade Zahl, so gilt: i modulo 2 = 1. Die <code>if</code> - Bedingung ist nicht erfüllt. ' +
    'Die Codeausführung wird nach dem <code>if</code> fortgesetzt und <code>i</code> wird zu <code>summe</code> hinzugezählt. ' +
    'Ist <code>i</code> eine gerade Zahl, so gilt: i modulo 2 = 0. Die <code>if</code> - Bedingung ist erfüllt und <code>continue</code> wird ausgeführt. ' +
    'Die Code-Ausführung springt direkt zum Schleifenkopf. <code>i</code> wurde nicht zu <code>summe</code> hinzugezählt. ' +
    'So werden alle ungeraden Zahlen kleiner 10 aufaddiert.<br>' +
    '<code>break</code> und <code>continue</code> kann man in allen Schleifen (for, while, do...while) verwenden.',

  task: 'Schreibe eine Funktion <code>isPrime</code>. Sie soll prüfen, ob eine übergebene Zahl eine Primzahl ist oder nicht. Ist die ' +
    'Zahl prim, so soll <code>true</code> zurückgegeben werden, im anderen Fall <code>false</code>. ' +
    'Der Aufruf <code>isPrime(2)</code> soll <code>true</code> zurückgeben, <code>isPrime(4)</code> soll <code>false</code> ergeben. Beachte: 1 ist keine Primzahl.',

  beforeTests: function() {
    if (typeof isPrime !== "undefined") {
      isPrime = undefined;
    }
  },

  tests: [

    function() {
      var ok = typeof isPrime === 'function';
      var msg;
      if (ok) {
        msg = "<code>isPrime</code> ist eine Funktion.";
      } else {
        msg = "<code>isPrime</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = isPrime.length === 1;
      var msg;
      if (ok) {
        msg = "<code>isPrime</code> hat 1 Parameter.";
      } else {
        msg = "<code>isPrime</code> hat nicht 1, sondern " + isPrime.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = isPrime(1);
        ok = result === false;
        if (ok) {
          msg = '<code>isPrime(1)</code> gibt <code>false</code> zurück.';
        } else {
          msg = '<code>isPrime(1)</code> gibt nicht <code>false</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>isPrime(1)</code>.';
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
        var result = isPrime(2);
        ok = result === true;
        if (ok) {
          msg = '<code>isPrime(2)</code> gibt <code>true</code> zurück.';
        } else {
          msg = '<code>isPrime(2)</code> gibt nicht <code>true</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>isPrime(2)</code>.';
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
        var result = isPrime(3);
        ok = result === true;
        if (ok) {
          msg = '<code>isPrime(3)</code> gibt <code>true</code> zurück.';
        } else {
          msg = '<code>isPrime(3)</code> gibt nicht <code>true</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>isPrime(3)</code>.';
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
        var result = isPrime(4);
        ok = result === false;
        if (ok) {
          msg = '<code>isPrime(4)</code> gibt <code>false</code> zurück.';
        } else {
          msg = '<code>isPrime(4)</code> gibt nicht <code>false</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>isPrime(4)</code>.';
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
        var result = isPrime(11);
        ok = result === true;
        if (ok) {
          msg = '<code>isPrime(11)</code> gibt <code>true</code> zurück.';
        } else {
          msg = '<code>isPrime(11)</code> gibt nicht <code>true</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>isPrime(11)</code>.';
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
