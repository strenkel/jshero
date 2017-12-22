jshero.koans.add({

  id: "xor",

  title: "XOR",

  lesson: 'In der letzten Aufgabe hast du ein sogenanntes NAND-Gatter (engl.: Not AND - nicht und) programmiert. ' +
    'NAND-Gatter sind in der Digitaltechnik ein sogenannter Standardbaustein. Mit ihm lassen sich alle logischen Verknüpfungen zusammenstellen. ' +
    'Hier sollst du ein weiteres wichtiges Gatter, das XOR-Gatter (engl.: eXclusive OR - exklusives Oder), kennen lernen.',

  task: 'Schreibe eine Funktion <code>xor</code>, die zwei boolesche Werte als Parameter entgegennimmt. Die Rückgabe der Funktion soll <code>true</code> sein, ' +
    'wenn beide Paramter verschieden sind. In den anderen Fällen soll die Rückgabe <code>false</code> sein. <code>xor(true, false)</code> und ' +
    '<code>xor(false, true)</code> sollen <code>true</code> liefern, <code>xor(true, true)</code> und <code>xor(false, false)</code> sollen <code>false</code> zurückgeben.',

  beforeTests: function() {
    if (typeof xor !== "undefined") {
      xor = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('xor');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('xor', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('xor(true, true)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('xor(true, false)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('xor(false, true)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('xor(false, false)', false);
    }
  ]

});
