jshero.koans.add({

  id: 'join',

  title: 'Array: join()',

  lesson: `Mit <code>join</code> verbindet man alle Elemente eines Arrays zu einem String:

<pre><code>var words = ['Sex', 'Drugs', 'Rock', 'Roll'];
var l1 = words.join();
var l2 = words.join(' & ');
var l3 = words.join(' and ');</code></pre>

Ohne Argument fügt <code>join</code> die Elemente kommasepariert zusammen.
<code>l1</code> ergibt <code>'Sex,Drugs,Rock,Roll'</code>.
Ansonsten gibt das übergebene Argument das Trennzeichen vor.
<code>l2</code> ergibt <code>'Sex & Drugs & Rock & Roll'</code> und
<code>l3</code> den String <code>'Sex and Drugs and Rock and Roll'</code>.`,

  task: `Schreibe eine Funktion <code>list</code>, die Wörter in einem Array zu einer Aufzählung zusammenführt.
Ein leeres Array soll den Leerstring ergeben.
<br><br>Beispiel: <code>list(['Sonne', 'Mond', 'Sterne'])</code> soll <code>'Sonne, Mond und Sterne'</code> ergeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('list');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('list', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("list(['Ernie', 'Bert'])", 'Ernie und Bert');
    },

    function() {
      return jshero.testutil.assert_functionReturns("list(['Sonne', 'Mond', 'Sterne'])", 'Sonne, Mond und Sterne');
    },

    function() {
      return jshero.testutil.assert_functionReturns("list(['C', 'C++', 'Python', 'PHP'])", 'C, C++, Python und PHP');
    },

    function() {
      return jshero.testutil.assert_functionReturns("list(['Apfel'])", 'Apfel');
    },

    function() {
      return jshero.testutil.assert_functionReturns("list([])", '');
    }

  ]

});