jshero.koans.add({

  id: 'stringsplit',

  title: 'String: split()',

  lesson: 'Die Methode <code>split</code> zerlegt einen String anhand eines Trennstrings in Teilstrings. Die Teilstrings werden als Array zurückgegeben. ' +
    'Der ursprüngliche String wird nicht verändert.' +
    '<pre><code>' +
    'var date = "31-10-2017";<br>' +
    'var parts = date.split("-");<br>' +
    'var day = parts[0]; // "31"<br>' +
    'var month = parts[1]; // "10"<br>' +
    'var year = parts[2]; // "2017"<br>' +
    '</code></pre>' +
    'Der Trennstring ist hier der Bindestrich. Er zerlegt den Datumsstring in drei Teile. Diese drei Teile werden als Array der Variablen <code>parts</code> zugewiesen. ' +
    'Anschließend werden die einzelnen Teile aus dem Array ausgelesen und gesonderten Variablen zugewiesen. Die Variable <code>date</code> hat weiterhin den Wert <code>"31-10-2017"</code>.',

  task: 'Schreibe eine Funktion <code>add</code>, die einen String mit einer Additionsaufgabe entgegennimmt und die das Ergebnis der Addition als Zahl zurückgibt. ' +
    'Es sollen endlich viele natürliche Zahlen addiert werden. Die Additionsaufgabe ist ein String der Form "1+19+...+281". ' +
    'So soll <code>add("7+12+100")</code> die Zahl <code>119</code> zurückgeben.',

  beforeTests: function() {
    if (typeof add !== "undefined") {
      add = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('add');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('add', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('add("1+2")', 3);
    },

    function() {
      return jshero.testutil.assert_functionReturns('add("12+5+1+10")', 28);
    },

    function() {
      return jshero.testutil.assert_functionReturns('add("50000+4000+300+20+1")', 54321);
    },

    function() {
      return jshero.testutil.assert_functionReturns('add("13+2+4+100+3")', 122);
    }
  ]

});
