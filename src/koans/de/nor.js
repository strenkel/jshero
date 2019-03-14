jshero.koans.add({

  id: "nor",

  title: "NOR",

  lesson: `In der letzten Aufgabe hast du ein sogenanntes NAND-Gatter (engl.: Not AND - nicht und) programmiert.
NAND-Gatter sind in der Digitaltechnik ein sogenannter Standardbaustein.
Mit ihm lassen sich alle logischen Verknüpfungen zusammenstellen.
Hier sollst du einen weiteren Standardbaustein, das NOR-Gatter (engl.: Not OR - nicht oder), kennen lernen.`,

  task: `Schreibe eine Funktion <code>nor</code>, die zwei boolesche Werte als Parameter entgegennimmt.
Die Rückgabe der Funktion soll genau dann <code>true</code> sein, wenn beide Paramter <code>false</code> sind.
In den anderen Fällen soll die Rückgabe <code>false</code> sein. <code>nor(false, false)</code> soll <code>true</code> liefern,
<code>nor(false, true)</code>, <code>nor(true, false)</code> und <code>nor(true, true)</code> sollen <code>false</code> zurückgeben.`,

  beforeTests: function() {
    if (typeof nor !== "undefined") {
      nor = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('nor');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('nor', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('nor(false, false)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('nor(false, true)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('nor(true, false)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('nor(true, true)', false);
    }
  ]

});
