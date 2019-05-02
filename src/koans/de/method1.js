(function(testutil) {

  jshero.koans.add({

    id: 'method1',

    title: 'Methoden',

    lesson: `Bisher waren die Werte von Objekt-Eigenschaften Daten wie Strings oder Zahlen.
Objekt-Eigenschaften können aber auch Funktionen sein. Solche Objekt-Eigenschaften nennt man
Methoden. Methoden operieren auf den Daten eines Objekts.

<pre><code>var ware = {
  name: 'Äpfel',
  preis: 2.15,
  erhoehePreis: function(erhoehung) {
    this.preis = this.preis + erhoehung;
  };
};

var alterPreis = ware.preis;
ware.erhoehePreis(0.05);
var neuerPreis = ware.preis;</code></pre>

Das Objekt <code>ware</code> besitzt die Methode <code>erhoehePreis</code>. Diese Methode greift Mithilfe von
<code>this</code> auf die Objekt-Eigenschaft <code>preis</code> zu. <code>this</code> steht innerhalb eines Objekts für
das Objekt selbst. Mit der bekannten Punkt-Notation kann man nun auf die Objekt-Eigenschaften zugreifen.<br>
Von außen wird eine Methode über die zugeordnete Variable und der Punkt-Notation aufgerufen. `,

    task: `Schreibe eine Funktion <code>moveX</code>, die einen Punkt um 1 nach rechts verschiebt.
<code>moveX({x:&nbsp;2,&nbsp;y:&nbsp;5})</code> sollte <code>{x:&nbsp;3,&nbsp;y:&nbsp;5}</code> zurückgeben.`,

    hint: `<pre><code>var moveX = function(point) {
  ...
  return point;
};</code></pre>`,

    solution: `<pre><code>var moveX = function(point) {
  point.x = point.x + 1;
  return point;
};</code></pre>`,

    beforeTests: function() {
      if (typeof moveX !== 'undefined') {
        moveX = undefined;
      }
    },

    tests: [

      function() {
        return testutil.assert_isFunction('moveX');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('moveX', 1);
      },

      function() {
        return testutil.assert_functionReturnsObject('moveX({x: 2, y: 0})', {x: 3, y: 0});
      },

      function() {
        return testutil.assert_functionReturnsObject('moveX({x: 3, y: 5})', {x: 4, y: 5});
      }

    ]

  });

})(jshero.testutil);