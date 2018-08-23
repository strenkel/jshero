jshero.koans.add({

  id: "regex3",

  title: "Regex: Zeichenauswahl",

  lesson: `Die letzte Lektion führte einfache Zeichenketten, sogenannte Zeichenliterale,
als reguläre Ausdrücke ein. Jetzt wollen wir die Zeichenauswahl kennenlernen.
Sie wird durch eckige Klammern definiert:

<pre><code>var pruefeAuf12oder3 = /[123]/;
var t1 = pruefeAuf12oder3.test("917");
var t2 = pruefeAuf12oder3.test("Hauptstr. 2");
var t3 = pruefeAuf12oder3.test("blau");</code></pre>

Der Ausdruck in eckigen Klammern steht für genau ein Zeichen aus dieser Auswahl.
Der Regex <code>/[123]/</code> steht also für ein Zeichen, das eine 1, eine 2 oder eine 3 ist.
Da <code>"917"</code> und <code>"Hauptstr. 2"</code> eine 1, 2 oder 3 enthalten,
sind <code>t1</code> und <code>t2</code> beide <code>true</code>. Der String <code>"blau"</code>
enthällt keine 1, 2 oder 3. <code>t3</code> ist also <code>false</code>.`,

  task: `Schreibe eine Funktion <code>enthaeltNote</code>, die prüft, ob ein String eine Zahl
zwischen 1 und 6 enthält. <code>enthaeltNote("Latein: 2)</code> sollte <code>true</code> und
<code>enthaeltNote("Klasse 7b")</code> sollte <code>false</code> ergeben.`,


  beforeTests: function() {
    enthaeltNote = undefined;
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('enthaeltNote');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('enthaeltNote', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('enthaeltNote("Latein: 1")', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('enthaeltNote("Mathe 6")', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('enthaeltNote("Klasse 7")', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('enthaeltNote("0 Grad")', false);
    }

  ]

});
