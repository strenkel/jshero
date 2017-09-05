jshero.koans.add({

  id: 'subfunction',

  title: 'Mehrere Funktionen',

  lesson: 'Funktionen können weitere Funktionen aufrufen:' +
    '<pre><code>' +
    'var brutto = function(netto) {<br>' +
    '  var steuersatz = 19;<br>' +
    '  var steuer = netto * steuersatz / 100;<br>' +
    '  return netto + steuer;<br>' +
    '};<br><br>' +
    'var addiereMitMehrwertsteuer = function(nettoX, nettoY) {<br>' +
    '  var bruttoX = brutto(nettoX);<br>' +
    '  var bruttoY = brutto(nettoY);<br>' +
    '  return bruttoX + bruttoY;<br>' +
    '};</code></pre>' +
    '<code>addiereMitMehrwertsteuer</code> nimmt 2 Nettobeträge entgegen und gibt die Summe der Bruttobeträge zurück. <code>brutto</code> ' +
    'berechnet aus einem Nettobetrag den Bruttobetrag. Dabei wird eine Mehrwertsteuer von 19% zugrunde gelegt. ' +
    'Anstatt den Bruttobetrag selbst zu berechnen, ruft <code>addiereMitMehrwertsteuer</code> die Funktion ' +
    '<code>brutto</code> auf. Das hat zwei Vorteile: Der Code ist besser lesbar und die Bruttoberechnung wird zentral an einer Stelle durchgeführt.',
        
  task: 'Schreibe eine Funktion <code>sum</code>, die ein Array gefüllt mit Zahlen entgegennimmt und die Summe dieser Zahlen zurückgibt. ' +
    'Schreibe eine Funktion <code>mean</code>, die ein Array gefüllt mit Zahlen entgegennimmt und den Mittelwert dieser Zahlen zurückgibt. ' +
    'Die Funktion <code>mean</code> soll dabei die Funktion <code>sum</code> benutzen.',

  beforeTests: function() {
    if (typeof sum !== "undefined") {
      mean = undefined;
    }
    if (typeof mean !== "undefined") {
      mean = undefined;
    }
  },

  tests: [
    
    // sum

    function() {
      var ok = typeof sum === 'function';
      var msg;
      if (ok) {
        msg = '<code>sum</code> ist eine Funktion.';
      } else {
        msg = '<code>sum</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = sum.length === 1;
      var msg;
      if (ok) {
        msg = '<code>sum</code> hat 1 Parameter.';
      } else {
        msg = '<code>sum</code> hat nicht 1, sondern ' + sum.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = sum([0]);
        ok = result === 0;
        if (ok) {
          msg = '<code>sum([0])</code> gibt <code>0</code> zurück.';
        } else {
          msg = '<code>sum([0])</code> gibt nicht <code>0</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>sum([0])</code>.';
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
        var result = sum([1, 2, 3]);
        ok = result === 6;
        if (ok) {
          msg = '<code>sum([1, 2, 3])</code> gibt <code>6</code> zurück.';
        } else {
          msg = '<code>sum([1, 2, 3])</code> gibt nicht <code>6</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>sum([1, 2, 3])</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

    // mean

    function() {
      var ok = typeof mean === 'function';
      var msg;
      if (ok) {
        msg = '<code>mean</code> ist eine Funktion.';
      } else {
        msg = '<code>mean</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = mean.length === 1;
      var msg;
      if (ok) {
        msg = '<code>mean</code> hat 1 Parameter.';
      } else {
        msg = '<code>mean</code> hat nicht 1, sondern ' + mean.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = mean([0]);
        ok = result === 0;
        if (ok) {
          msg = '<code>mean([0])</code> gibt <code>0</code> zurück.';
        } else {
          msg = '<code>mean([0])</code> gibt nicht <code>0</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>mean([0])</code>.';
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
        var result = mean([1, 2, 9]);
        ok = result === 4;
        if (ok) {
          msg = '<code>mean([1, 2, 9])</code> gibt <code>4</code> zurück.';
        } else {
          msg = '<code>mean([1, 2, 9])</code> gibt nicht <code>4</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>mean([1, 2, 9])</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

    // mean calls sum

    function() {
      var msg, e;
      var sumIsCalled = false;
      var oldSum = sum;
      sum = function(x) {
        sumIsCalled = true;
        return oldSum(x);
      };
      mean([1, 2, 9]);
      try {
        if (sumIsCalled) {
          msg = '<code>mean</code> ruft <code>sum</code> auf.';
        } else {
          msg = '<code>mean</code> ruft nicht <code>sum</code> auf.';
        }
      } catch(exc) {
        sumIsCalled = false;
        msg = 'Fehler beim Aufruf von <code>mean([1, 2, 9])</code>.';
        e = exc;
      }
      return {
        ok: sumIsCalled,
        msg: msg,
        e: e
      };
    },

  ]

});

