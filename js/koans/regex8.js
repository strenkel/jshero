(function(testutil) {

  jshero.koans.add({

    id: "regex8",

    title: "Regex: {n, m}",

    lesson: `Mit einen Ausdruck der Form <code>{n}</code>, <code>{n,m}</code> oder <code>{n,}</code> kann man die
Anzahl der Wiederholungen genauer festlegen. <code>{n}</code> steht für genau n Wiederholungen, <code>{n,m}</code>
für mindestens n und höchstens m Wiederholungen und <code>{n,}</code> für mindestens n Wiederholungen.
So steht <code>/\\d{5}/</code> für genau 5 aufeinanderfolgende Ziffern, <code>/.{6,20}/</code> für mindestens 6 und
höchsten 20 beliebige Zeichen und <code>/\\[a-zA-Z]{5,}/</code> für mindestens 5 aufeinanderfolgende Buchstaben.`,

    task: `Schreibe eine Funktion <code>pruefe</code>, die feststellt, ob ein String ein deutsches
Kfz-Kennzeichen ist. Ein solches Kennzeichen soll dem Schema 'XXX YY NNNN' genügen. Dabei steht XXX für 1 bis 3
beliebige Großbuchstaben, YY für 1 bis 2 beliebige Großbuchstaben und NNNN für eine maximal 4stellige Zahl. Führende
Nullen sind bei der Zahl nicht zugelassen. <code>pruefe("OF C 709")</code> sollte <code>true</code> und
<code>pruefe("OF 709")</code> sollte <code>false</code> ergeben.`,

    hint: `<pre><code>var pruefe = function(s) {
  return /^[A-Z]{1,3}...
};</code></pre>`,

    solution: `<pre><code>var pruefe = function(s) {
  return /^[A-Z]{1,3} [A-Z]{1,2} [1-9][0-9]{0,3}$/.test(s);
};</code></pre>`,

    beforeTests: function() {
      hasQuote = undefined;
    },

    tests: [
      function() {
        return testutil.assert_isFunction('pruefe');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('pruefe', 1);
      },

      function() {
        return testutil.assert_functionReturns('pruefe("F A 1")', true);
      },

      function() {
        return testutil.assert_functionReturns('pruefe("F A 9999")', true);
      },

      function() {
        return testutil.assert_functionReturns('pruefe("F AA 1")', true);
      },

      function() {
        return testutil.assert_functionReturns('pruefe("LUP A 1")', true);
      },

      function() {
        return testutil.assert_functionReturns('pruefe("F A 0")', false);
      },

      function() {
        return testutil.assert_functionReturns('pruefe("F A 01")', false);
      },

      function() {
        return testutil.assert_functionReturns('pruefe("F A 12345")', false);
      },

      function() {
        return testutil.assert_functionReturns('pruefe("F A")', false);
      },

      function() {
        return testutil.assert_functionReturns('pruefe("F 1")', false);
      },

      function() {
        return testutil.assert_functionReturns('pruefe("F AAA 1")', false);
      },

      function() {
        return testutil.assert_functionReturns('pruefe("FFFF A 1")', false);
      }

    ]

  });

})(jshero.testutil);