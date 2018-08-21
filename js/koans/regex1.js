jshero.koans.add({

  id: "regex1",

  title: "Regex: test()",

  lesson: `<a href="https://de.wikipedia.org/wiki/Regul%C3%A4rer_Ausdruck">Reguläre Ausdrücke</a>,
kurz Regex (engl.: regular expression), sind Suchmuster für Strings.
Sie bilden eine kleine, eigenständige Sprache, die Teil von JavaScript
und vielen weiteren Sprachen (Python, Perl, ...) und Programmen (LibreOffice, Emacs, ...) ist.
Reguläre Ausdrücke sind leistungsstark, aber auch sehr kryptisch.
<br><br>
In JavaScript werden reguläre Ausdrücke zwischen Schrägstrichen notiert:

<pre><code>var pruefeAufOF = /OF/;</code></pre>

Hier ist OF der regulärer Ausdruck. Er steht für sich selbst. Mit ihm kann man testen,
ob ein anderer String die Zeichenfolge OF enthält:

<pre><code>var t1 = /OF/.test("OF-C 79");
var t2 = /OF/.test("B-OF 61")
var t3 = /OF/.test("HB-F 42");</code></pre>

<code>test()</code> ist eine Regex-Methode. Sie gibt <code>true</code> zurück, wenn
der ihr übergebene String das durch den Regex beschriebene Muster enthält.
In unserem Fall ist das Muster die Zeichenfolge OF. <code>"OF-C 79"</code> und
<code>"B-OF 61"</code> enthalten OF, also erhalten <code>t1</code> und <code>t2</code>
den Wert <code>true</code>. Der String <code>"HB-F 42"</code> enthält nicht OF.
<code>t3</code> ist <code>false</code>.`,

  task: `Schreibe eine Funktion <code>enthaeltRose</code>, die prüft, ob ein String den Teilstring
<code>"Rose"</code> enthält. <code>enthaeltRose("eine Rose")</code> sollte <code>true</code> und
<code>enthaeltRose("ein Blatt")</code> sollte <code>false</code> ergeben.`,

  beforeTests: function() {
    begruesse = undefined;
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('enthaeltRose');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('enthaeltRose', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('enthaeltRose("eine Rose")', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('enthaeltRose("zwei Rosen")', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('enthaeltRose("ein Blatt")', false);
    },
    function() {
      return jshero.testutil.assert_functionReturns('enthaeltRose("zwei Blätter")', false);
    }
    
  ]

});
