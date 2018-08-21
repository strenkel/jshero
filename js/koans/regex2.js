jshero.koans.add({

  id: "regex2",

  title: "Regex: Zeichenauswahl",

  lesson: `Die letzte Lektion führte einfache Zeichenketten, sogenannte Zeichenliterale,
als reguläre Ausdrücke ein. Jetzt wollen wir die Zeichenauswahl kennenlernen.
Sie wird durch eckige Klammern definiert:

<pre><code>var pruefeAuf12oder3 = /[123]/;
var t1 = pruefeAuf12oder3.test("917");
var t2 = pruefeAuf12oder3.test("Hauptstr. 2");
var t3 = pruefeAuf12oder3.test("blau");</code></pre>

Der Ausdruck in eckigen Klammern steht dann für genau ein Zeichen aus dieser Auswahl.
Der Regex <code>/[123]/</code> steht also für ein Zeichen, das eine 1, eine 2 oder eine 3 ist.
Da <code>"917"</code> und <code>"Hauptstr. 2"</code> eine 1, 2 oder 3 enthalten,
sind <code>t1</code> und <code>t2</code> beide <code>true</code>. Der String <code>"blau"</code>
enthällt keine 1, 2 oder 3. <code>t3</code> ist also <code>false</code>.`,

task: `Schreibe eine Funktion <code>enthaeltNote</code>, die prüft, ob ein String eine Zahl
zwischen 1 und 6 enthält. <code>enthaeltNote("Latein: 3")</code> sollte <code>true</code> und
<code>enthaeltNote("Klasse 7b")</code> sollte <code>false</code> ergeben.`,


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
