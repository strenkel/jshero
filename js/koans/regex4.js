jshero.koans.add({

  id: "regex4",

  title: "Regex: Bereiche",

  lesson: `Möchte man mit der Zeichenauswahl alle Ziffern zulassen, so kann man
dafür <code>/[0123456789]/</code> benutzen. Das ist aber recht umständlich. 
Mit einem Bindestrich kann man größere, zusammenhängende Zeichenbereiche leicht darstellen:

<pre><code>var pruefeZiffer = /[0-9]/;
var pruefe1Bis6 = /[1-6]/;
var pruefeABisZ = /[A-Z]/;
var pruefeaBisz = /[a-z]/; 
var pruefeDeutschesAlphabet = /[a-zäöüß]/;
var pruefeABisz = /[A-Za-z]/;
var pruefeMBisT = /[M-T]/;</code></pre>

<code>/[0-9]/</code> steht wie der Regex oben für genau eine Ziffer.
Den Ziffernbereich kann man, wie <code>/[1-6]/</code> zeigt, leicht auf eine gewünschte Auswahl
(z.B. Schulnote) einschränken. Der Bindestrich funktioniert aber nicht nur für Ziffern,
sondern auch für Buchstaben. Dabei muss man zwischen Klein- und
Großbuchstaben unterscheiden. <code>/[A-Z]/</code> steht für einen der 26 Großbuchstaben und
<code>/[a-z]/</code> für einen Kleinbuchstaben. Wichtig ist, dass hier
ä, ö, ü und ß nicht mit erfasst werden. Möchte man das, so muss man diese Buchstaben gesondert
aufführen. Dazu schreibt man die Umlaute und das Eszett wie bei einer gewöhnlichen Auswahl
einfach vor oder hinter den Bereich (<code>/[a-zäöüß]/</code>). Ebenso kann man zwei Bereiche
hintereinander aufführen. <code>/[A-Za-z]/</code> steht für genau einen Buchstaben,
egal ob in Groß- oder Kleinschreibung. Den Buchstabenbereich kann man wie bei Ziffern
beliebig einschränken (<code>/[M-T]/</code>).`,

  task: `Schreibe eine Funktion <code>pruefe</code>, die feststellt, ob ein String einen
Teilstring wie <code>"Klasse 2b"</code> enthält. Dabei sind Klassen von 1 bis 6 und a bis d
zulässig. <code>pruefe("In Klasse 1a")</code> sollte <code>true</code> ergeben.`,


  beforeTests: function() {
    pruefe = undefined;
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('pruefe');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('pruefe', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('pruefe("Klasse 1a")', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('pruefe("Klasse 6d")', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('pruefe("Klasse 0a")', false);
    },
   
    function() {
      return jshero.testutil.assert_functionReturns('pruefe("Klasse 1e")', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('pruefe("Klasse 7d")', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('pruefe("Kasse 1a")', false);
    }

  ]

});
