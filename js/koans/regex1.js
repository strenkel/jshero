jshero.koans.add({

  id: "regex1",

  title: "Regex: Zeichenliterale",

  lesson: `<a href="https://de.wikipedia.org/wiki/Regul%C3%A4rer_Ausdruck">Reguläre Ausdrücke</a>,
kurz Regex (engl.: regular expression), sind Muster zum Beschreiben von Zeichenketten.
Sie bilden eine kleine, eigenständige Sprache, die Teil von JavaScript
und vielen weiteren Sprachen (Python, Perl, ...) und Programmen (LibreOffice, Emacs, ...) ist.
Reguläre Ausdrücke sind leistungsstark, aber auch sehr kryptisch.
<br><br>
In JavaScript werden reguläre Ausdrücke zwischen Schrägstrichen notiert:

<pre><code>var pruefeAufOF = /OF/;</code></pre>

Hier ist <code>OF</code> der regulärer Ausdruck. Es ist ein sogenanntes Zeichenliteral und steht für sich selbst.
Mit ihm kann man testen, ob ein anderer String die Zeichenfolge <code>OF</code> enthält:

<pre><code>var t1 = /OF/.test("OF-C 79");
var t2 = /OF/.test("B-OF 61")
var t3 = /OF/.test("HB-F 42");
var t4 = /OF/.test("Ofen");</code></pre>

<code>test()</code> ist eine Regex-Methode. Sie gibt <code>true</code> zurück, wenn
der ihr übergebene String das durch den Regex beschriebene Muster enthält.
In unserem Fall ist das Muster die Zeichenfolge <code>OF</code>. <code>"OF-C 79"</code> und
<code>"B-OF 61"</code> enthalten <code>OF</code>, also erhalten <code>t1</code> und <code>t2</code>
den Wert <code>true</code>. Der String <code>"HB-F 42"</code> enthält nicht <code>OF</code>.
<code>t3</code> ist <code>false</code>.
<br>
Reguläre Ausdrücke unterscheiden zwischen Groß- und Kleinschreibung.
<code>"Ofen"</code> enthält zwar <code>Of</code>, aber nicht <code>OF</code>.
<code>t4</code> ist <code>false</code>.
`,

  task: `Schreibe eine Funktion <code>enthaeltRose</code>, die prüft, ob ein String den Teilstring
<code>"Rose"</code> enthält. <code>enthaeltRose("eine Rose")</code> sollte <code>true</code> und
<code>enthaeltRose("ein Blatt")</code> sollte <code>false</code> ergeben.`,

  beforeTests: function() {
    enthaeltRose = undefined;
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
