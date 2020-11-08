jshero.koans.add({

  id: 'join',

  title: 'Array: join()',

  lesson: `Mit <code>join</code> verbindet man alle Elemente eines Arrays zu einem String:

<pre><code>let words = ['Sex', 'Drugs', 'Rock', 'Roll'];
let l1 = words.join();
let l2 = words.join(' & ');
let l3 = words.join(' and ');</code></pre>

Ohne Argument fügt <code>join</code> die Elemente kommasepariert zusammen.
<code>l1</code> ergibt <code>'Sex,Drugs,Rock,Roll'</code>.
Ansonsten gibt das übergebene Argument das Trennzeichen vor.
<code>l2</code> ergibt <code>'Sex & Drugs & Rock & Roll'</code> und
<code>l3</code> den String <code>'Sex and Drugs and Rock and Roll'</code>.`,

  task: `Schreibe eine Funktion <code>list</code>, die Wörter in einem Array zu einer Aufzählung zusammenführt.
Ein leeres Array soll den Leerstring ergeben.
<br><br>Beispiel: <code>list(['Sonne', 'Mond', 'Sterne'])</code> soll <code>'Sonne, Mond und Sterne'</code> ergeben.`,

  hint: `Erzeuge aus dem übergebenen Array ein neues Array ohne das letzte Element.
Verkette die Elemente des neuen Arrays mit Komma und Leerzeichen.
Füge das letztes Element des übergebene Array mit <code>' und '</code> hinzu.
Behandle Sonderfälle getrennt.`,

  solution: `<pre><code>function list(words) {

  if (words.length === 0) {
    return '';
  }

  if (words.length === 1) {
    return words[0];
  }

  let wordsExLast = words.slice(0, words.length - 1);
  let lastWord = words[words.length - 1];
  return wordsExLast.join(', ') + ' und ' + lastWord;
}</code></pre>`,

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