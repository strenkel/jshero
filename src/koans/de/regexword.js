(function(testutil) {

  jshero.koans.add({

    id: 'regexword',

    title: 'Regex: Wortgrenzen',

    lesson: `Ein weiterer Anker ist <code>\\b</code>. Er steht für eine Wortgrenze. <code>/\\bJa/</code> findet
alle Wörter, die mit <code>Ja</code> beginnen und <code>/tion\\b/</code> alle Wörter, die mit <code>tion</code> enden.
Verwendet man <code>\\b</code> sowohl am Anfang als auch am Ende, so kann man nach ganzen Wörten suchen.

<pre><code>var t1 = /\\bdenke/.test('Wir denken'); // true
var t2 = /\\bdenke/.test('Bedenke'); // false
var t3 = /lauf\\b/.test('der Wettlauf hat'); // true
var t4 = /lauf\\b/.test('laufen'); // false
var t5 = /\\bso\\b/.test('Aber so ist'); // true</code></pre>

Wichtig ist, welche Zeichen als Wortgrenze gelten. In den obigen Beispielen war es das Leerzeichen.
Hinzu kommen alle Satzzeichen wie Punkt, Komma, Ausrufezeichen usw.
Aber auch der Bindestrich gilt als Wortgrenze. <code>/\Anna\\b/</code> findet sich in <code>Anna-Ida</code>.
Tatsächlich gelten alle Zeichen, die nicht zur Zeichenklasse <code>\\w</code> gehören, als Wortgrenze.
Es zählen also alle nicht-alphanumerischen Zeichen ohne den Unterstrich als Wortgrenze.
Das bezieht sich allerdings auf das englische Alphabet.
Alle deutschen Umlaute gelten somit als Wortgrenze. Hier muss man aufpassen.
<code>/bei\\b/</code> findet sich in <code>beißen</code>, da <code>ß</code> als Wortgrenze angesehen wird.`,

    task: `Schreibe eine Funktion <code>hatLauf</code>, die prüft, ob ein String ein Wort enthält, dass mit
<code>lauf</code> beginnt. Dabei soll es keine Rolle spielen, ob <code>lauf</code> mit großem oder kleinem
<code>l</code> beginnt.`,

    tests: [
      function() {
        return testutil.assert_isFunction('hatLauf');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('hatLauf', 1);
      },

      function() {
        return testutil.assert_functionReturns("hatLauf('Lauf!')", true);
      },

      function() {
        return testutil.assert_functionReturns("hatLauf('Wir laufen da lang!')", true);
      },

      function() {
        return testutil.assert_functionReturns("hatLauf('weglaufen')", false);
      },

      function() {
        return testutil.assert_functionReturns("hatLauf('lau')", false);
      },
      

    ]

  });

})(jshero.testutil);
