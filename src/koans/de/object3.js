(function(testutil) {

  jshero.koans.add({

    id: "object3",

    title: "Eigenschaften auslesen",

    lesson: `Auf Objekt-Eigenschaften kann man mit der Punkt-Notation zugreifen:

<pre><code>var person = {
  name: "Constanze Kurz",
  geburtstag: new Date(1974, 2, 2),
  geburtsort: "Ost-Berlin"
};
var pName = person.name;
var pGeburtstag = person.geburtstag;
var pGeburtsort = person.geburtsort;</code></pre>

Hier werden die drei Eigenschaften des Objekts <code>person</code> in drei Variablen gespeichert.<br><br>
Die Punkt-Notation haben wir schon bei Strings und Arrays kennengelernt. Dort konnte man mit <code>aString.length</code>
auf die Anzahl der Zeichen eines Strings und mit <code>anArray.length</code> auf die Anzahl der Elemente in einem Array
zugreifen. Das ist kein Zufall. String und Array sind ebenfalls Objekte. Diese Objekte werden nicht
wie oben <code>person</code> von uns definiert, sondern sind Teil der Programmiersprache JavaScript.`,

    task: `Schreibe eine Funktion <code>distance</code>, die den Abstand eines Punkts zum Nullpunkt berechnet.
<code>distance({x:&nbsp3,&nbspy:&nbsp;4})</code> sollte <code>5</code> zurückgeben.`,

    hint: `Der Abstand eines  Punkts (x, y) zum Nullpunkt berechnet sich wie folgt: %radic;(x&sup2;+y&sup2;)</code></pre>`,

    solution: `<pre><code>var distance = function(point) {
  var xSquare = point.x ** 2;
  var xSquare = point.y ** 2;
  return Math.sqrt(xSquare + ySquare);
};</code></pre>`,

    beforeTests: function() {
      if (typeof distance !== "undefined") {
        distance = undefined;
      }
    },

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