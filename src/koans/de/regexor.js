jshero.koans.add({

  id: 'regexor',

  title: 'Regex: Alternativen',

  lesson: `Möchte man nach Alternativen suchen, kann man dafür den <code>|</code> Operator verwenden.
<code>/Tom|Jerry/</code> sucht nach <code>Tom</code> oder <code>Jerry</code>. Der <code>|</code> Operator
gilt für den kompletten Regex. <code>/\\bTom|Jerry\\b/</code> sucht nach Wörtern, die mit <code>Tom</code>
beginnen oder mit <code>Jerry</code> enden. <code>Tomme</code> wird so auch gefunden.
Möchte man, dass beide Wortgrenzen für beide Namen gelten, kann man Klammern verwenden.
<code>/\\b(Tom|Jerry)\\b/</code> sucht nach den Wörtern <code>Tom</code> oder <code>Jerry</code>. Der 
<code>|</code> Operator gilt jetzt nur für die Klammer. <code>Tomme</code> wird nicht mehr gefunden.`,

  task: `Schreibe eine Funktion <code>isTime</code>, die feststellt, ob ein String eine Zeitangabe der Form
<code>hh:mm</code> ist. Für <code>hh</code> sind alle Werte von <code>00</code> bis <code>23</code> und für
<code>mm</code> alle Werte von <code>00</code> bis <code>59</code> zugelassen.
<code>isTime('23:27')</code> sollte <code>true</code> und <code>isTime('24:12')</code> sollte
<code>false</code> ergeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('isTime');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('isTime', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("isTime('00:00')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("isTime('02:08')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("isTime('12:27')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("isTime('23:59')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("isTime('24:00')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("isTime('02:60')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("isTime('-00:00')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("isTime('00:00-')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("isTime('1:00')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("isTime('00:0')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("isTime('00-00')", false);
    }

  ]

});
