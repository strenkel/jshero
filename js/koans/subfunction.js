jshero.koans.add({

  id: 'subfunction',

  title: 'Funktionen benutzen Funktionen',

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
    'Schreibe eine Funktion <code>mean</code>, die ein Array gefüllt mit Zahlen entgegennimmt und den Durchschnitt dieser Zahlen zurückgibt. ' +
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
      return jshero.testutil.assert_isFunction('sum');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('sum', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sum([0])', 0);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sum([1, 2])', 3);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sum([1, 4, 10, 85])', 100);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sum([-2, -4, 17, 34])', 45);
    },

    // mean
    function() {
      return jshero.testutil.assert_isFunction('mean');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('mean', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('mean([0])', 0);
    },

    function() {
      return jshero.testutil.assert_functionReturns('mean([1, 2])', 1.5);
    },

    function() {
      return jshero.testutil.assert_functionReturns('mean([1, 4, 10, 85])', 25);
    },

    function() {
      return jshero.testutil.assert_functionReturns('mean([-2, -4, 17, 34])', 11.25);
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
    }
  ]

});
