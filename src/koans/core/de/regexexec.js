jshero.koans.add({

  id: 'regexexec',

  title: 'Regex: exec()',

  lesson: `Neben der Methode <code>test</code> besitzen reguläre Ausdrücke noch die Methode <code>exec</code>.
Während <code>test</code> feststellt, ob ein Regex in einem String gefunden wird, gibt <code>exec</code>
auch den gefundenen String und alle gefundenen Gruppen zurück. Das geschiet in Form eines Arrays.
Dieses Array hat darüber hinaus die beiden Eigenschaften <code>index</code> und <code>input</code>.
<code>index</code> enthält den 0-basierten Index des gefundenen Strings und <code>input</code>
den originalen String.<br>

<pre><code>let resultat = /(\\d+):(\\d+)/.exec("Kiel-Flensburg 23:25");
let endstand = resultat[0]; // "23:25"
let toreKiel = resultat[1]; // "23"
let toreFlensburg = resultat[2]; // "25"
let index = resultat.index; // 15</code></pre>

Wird der reguläre Ausdruck nicht gefunden, gibt <code>exec</code> <code>null</code> zurück.`,

  task: `Schreibe eine Funktion <code>parseDate</code>, die einen String mit einem Datum entgegennimmt und die dieses
Datum als Date mit UTC 0:00 Uhr zurückgibt. Das Datum liegt im deutschen Format dd.mm.yyyy vor. Führende Nullen sind
optional. Das Datum kann mitten im String stehen. Enthält der String kein gültiges Datum, soll <code>null</code>
zurückgegeben werden.<br><br>Beispiel:
<code>parseDate("Geburt: 12.07.2001")</code> sollte ein Date-Objekt mit dem Zeitpunkt 12.07.2001 0:00 UTC zurückgeben.`,

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('parseDate');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('parseDate', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturnsType('parseDate("23.10.2019")', 'Date');
    },

    function() {
      return jshero.testutil.assert_functionReturns(
        'parseDate("23.10.2019")',
        new Date(Date.UTC(2019, 9, 23)), {
          'utc': true
        });
    },

    function() {
      return jshero.testutil.assert_functionReturns(
        'parseDate("2.5.1912")',
        new Date(Date.UTC(1912, 4, 2)), {
          'utc': true
        });
    },

    function() {
      return jshero.testutil.assert_functionReturns(
        'parseDate("02.05.1912")',
        new Date(Date.UTC(1912, 4, 2)), {
          'utc': true
        });
    },

    function() {
      return jshero.testutil.assert_functionReturns(
        'parseDate("...31.12.2000...")',
        new Date(Date.UTC(2000, 11, 31)), {
          'utc': true
        });
    },

    function() {
      return jshero.testutil.assert_functionReturns(
        'parseDate("..ab.12.2000...")', null);
    },

    function() {
      return jshero.testutil.assert_functionReturns(
        'parseDate("32.12.2000")', null);
    },

    function() {
      return jshero.testutil.assert_functionReturns(
        'parseDate("01.13.2000")', null);
    }

  ]

});
