(function(testutil) {

  jshero.koans.add({

    id: 'regexi',

    title: 'Regex: case-insensitive',

    lesson: `Reguläre Ausdrücke kann man durch Flags ergänzen. Eines dieser Flags ist <code>i</code>.
Ist es gesetzt, unterscheidet das Pattern nicht zwischen Groß- und Kleinschreibung. Der Regex ist case-insensitive.
Flags werden dem Regex einfach angehängt:

<pre><code>var t1 = /es/i.test("Was es"); // true
var t2 = /es/i.test("Es war"); // true
var t3 = /es/i.test("ES"); //  true</code></pre>`,

    task: `Schreibe eine Funktion <code>test</code>, die feststellt, ob ein String das Wort <code>JavaScript</code>
oder <code>JS</code> enthält. Dabei soll Groß- oder Kleinschreibung keine Rolle spielen.`,

    tests: [
      function() {
        return testutil.assert_isFunction('test');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('test', 1);
      },

      function() {
        return testutil.assert_functionReturns("test('JAVASCRIPT')", true);
      },

      function() {
        return testutil.assert_functionReturns("test('hello javascript')", true);
      },

      function() {
        return testutil.assert_functionReturns("test('JavaScript Hero')", true);
      },

      function() {
        return testutil.assert_functionReturns("test('JS')", true);
      },

      function() {
        return testutil.assert_functionReturns("test('hello js')", true);
      },

      function() {
        return testutil.assert_functionReturns("test('JS Hero')", true);
      },


      function() {
        return testutil.assert_functionReturns("test('HelloJavaScript')", false);
      },

      function() {
        return testutil.assert_functionReturns("test('JavaScriptHero')", false);
      },

      function() {
        return testutil.assert_functionReturns("test('Java')", false);
      },

      function() {
        return testutil.assert_functionReturns("test('JSF')", false);
      },

      function() {
        return testutil.assert_functionReturns("test('JJS')", false);
      }

    ]

  });

})(jshero.testutil);
