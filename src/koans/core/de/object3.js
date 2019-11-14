(function(testutil) {

  jshero.koans.add({

    id: 'object3',

    title: 'Eigenschaften auslesen',

    lesson: `Auf Objekt-Eigenschaften kann man mit der Punkt-Notation zugreifen:

<pre><code>var person = {
  name: 'Constanze Kurz',
  geburtstag: new Date(1974, 2, 2),
  geburtsort: 'Ost-Berlin'
};

var pName = person.name;
var pGeburtstag = person.geburtstag;
var pGeburtsort = person.geburtsort;</code></pre>

Die drei Eigenschaften des Objekts <code>person</code> werden in drei Variablen gespeichert.`,

    task: `Schreibe eine Funktion <code>distance</code>, die den Abstand eines Punkts zum Nullpunkt berechnet.
Hier und im Folgenden ist ein Punkt ein Objekt mit den Eigenschaften x und y.
<code>distance({x:&nbsp3,&nbspy:&nbsp;4})</code> sollte <code>5</code> zurückgeben.`,

    hint: `Der Abstand eines  Punkts mit den Koordinaten x und y zum Nullpunkt ist &radic;(x&sup2;&nbsp;+&nbsp;y&sup2;).`,

    solution: `<pre><code>var distance = function(point) {
  var xSquare = Math.pow(point.x, 2);
  var ySquare = Math.pow(point.y, 2);
  return Math.sqrt(xSquare + ySquare);
};</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isFunction('distance');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('distance', 1);
      },

      function() {
        return testutil.assert_functionReturns('distance({x: 2, y: 0})', 2);
      },

      function() {
        return testutil.assert_functionReturns('distance({x: 0, y: -3})', 3);
      },
      
      function() {
        return testutil.assert_functionReturns('distance({x: 3, y: 4})', 5);
      }

    ]

  });

})(jshero.testutil);