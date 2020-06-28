(function(testutil) {

  jshero.koans.add({

    id: 'arraypush',

    title: 'Array: shift() und push()',

    lesson: `Arrays besitzen eine Reihe von Methoden. Zwei dieser Methoden sind <code>shift</code> und <code>push</code>.
Zur Erinnerung: Methoden sind Funktionen, die auf einem Objekt, hier einem Array, ausgeführt werden. Methoden werden mit einem Punkt
an das Objekt angehängt. Wie bei Funktionen üblich folgt dem Methodennamen die runden Klammern, ggf. gefüllt mit Parametern.
<code>shift</code> hat keine Parameter und verschiebt die Elemente eines Arrays nach links.
Das 1te Element wird zum 0ten, das 2te zum 1ten, das 3te zum 2ten, usw.
Das 0te Element wird aus dem Array entfernt und zurückgegeben. Nach dem <code>shift</code> hat das Array ein Element weniger.

<pre><code>let sprachen = ['C', 'Java', 'JavaScript'];
let naechsteSprache = sprachen.shift();</code></pre>

Das Array <code>sprachen</code> wird mit 3 Programmiersprachen angelegt.
Nach dem <code>shift</code> enthält <code>sprachen</code> nur noch 2 Elemente,
nämlich <code>['Java', 'JavaScript']</code>. Der Wert <code>'C'</code> ist in der Variablen
<code>naechsteSprache</code> gelandet.<br>
Mit der häufig verwendeten Methode <code>push</code> fügt man dem Array ein neues Element hinzu.
Das neue Element wird als Parameter übergeben und an das Ende des Arrays gehängt.

<pre><code>let sprachen = [];
sprachen.push('C');
sprachen.push('Java');
sprachen.push('JavaScript');</code></pre>

Hier wird ein leeres Array nacheinander mit den aufgeführten Werten gefüllt. Am Ende erhalten wir das Array
<code>['C', 'Java', 'JavaScript']</code>. Wir hatten gesehen, dass man ein Array auch per Index füllen kann.
<code>sprachen[sprachen.length] = 'PHP'</code> ist dasselbe wie <code>sprachen.push('PHP')</code>. Doch schon
an der Länge des Codes sieht man, dass die Variante mit <code>push</code> eleganter ist.`,

    task: `Schreibe eine Funktion <code>rotiere</code>, die die Elemente eines Arrays rotiert.
Alle Elemente des Arrays sollen um eine Position nach links verschoben werden.
Das 0te Element soll ans Ende des Arrays gestellt werden. Das rotierte Array soll zurückgegeben werden.<br><br>Beispiel:
<code>rotiere(['a', 'b', 'c'])</code> sollte <code>['b', 'c', 'a']</code> ergeben.`,

    hint: `<pre><code>Entferne mit shift das 0te Element.
Füge mit push das 0te Element wieder hinzu.
</code></pre>`,

    solution: `<pre><code>let rotiere = function(einArray) {
  let element0 = einArray.shift();
  einArray.push(element0);
  return einArray;
};</code></pre>`,

    tests: [
      function() {
        return testutil.assert_isFunction('rotiere');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('rotiere', 1);
      },

      function() {
        return testutil.assert_functionReturns('rotiere([1, 2])', [2, 1]);
      },

      function() {
        return testutil.assert_functionReturns("rotiere(['a', 'b', 'c'])", ['b', 'c', 'a']);
      },

      function() {
        return testutil.assert_functionReturns("rotiere([1, 'b', 'c', 37])", ['b', 'c', 37, 1]);
      }
    ]

  });

})(jshero.testutil);