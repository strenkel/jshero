jshero.koans.add({

  id: 'stringindexof2',

  title: 'String: indexOf(), 2. Parameter',

  lesson: `Der Methode <code>indexOf</code> kann man als zweiten Parameter noch die Stelle mitgeben,
ab der der Suchstring im aufrufenden String gesucht werden soll.

<pre><code>let n1 = "Fred Feuerstein".indexOf("e", 2);
let n2 = "Fred Feuerstein".indexOf("e", 3);
let n3 = "Fred Feuerstein".indexOf("e", 7);</code></pre>

Das erste <code>"e"</code> befindet sich in <code>"Fred Feuerstein"</code> an 2. Stelle. Es wird bei einer Suche ab der 2. Stelle gefunden. <code>n1</code>
ist also 2. Das zweite <code>"e"</code> in <code>"Fred Feuerstein"</code> befindet sich an der 6. Stelle. Es wird bei der Suche ab der 3. Stelle gefunden.
<code>n2</code> ist <code>6</code>. Mit der dritten Codezeile wird das dritte <code>"e"</code> in <code>"Fred Feuerstein"</code> gefunden.
<code>n3</code> ist <code>8</code>.`,

  task: `Schreibe eine Funktion <code>secondIndexOf</code>, die zwei Strings entgegennimmt und die zweite Position des
zweiten Strings im ersten String bestimmt. Kommt der Suchstring nicht zweimal vor, so soll <code>-1</code> zurückgegeben werden.
<br><br>Beispiel: <code>secondIndexOf("Ida-Ida", "Ida")</code> soll <code>4</code> zurückgeben.
<br><br>Tipp: Falls Du Hilfe brauchst, lies dir auch die Beschreibung in
<a href="https://wiki.selfhtml.org/wiki/JavaScript/Objekte/String/indexOf">SELFHTML</a> durch.`,

  hint: `<pre><code>function secondIndexOf(s1, s2) {
// Verwende indexOf zweimal.
// Zuerst ohne, dann mit
// zweitem Parameter.
}</code></pre>`,

  solution: `<pre><code>function secondIndexOf(s1, s2) {
  let firstIndex = s1.indexOf(s2);
  return s1.indexOf(s2, firstIndex + 1);
}</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('secondIndexOf');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('secondIndexOf', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('secondIndexOf("AA", "A")', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('secondIndexOf("Ida-Ida", "Ida")', 4);
    },

    function() {
      return jshero.testutil.assert_functionReturns('secondIndexOf("a rose is a rose", "rose")', 12);
    },

    function() {
      return jshero.testutil.assert_functionReturns('secondIndexOf("There is no there there.", "there")', 18);
    },

    function() {
      return jshero.testutil.assert_functionReturns('secondIndexOf("There is no there there.", "There")', -1);
    }

  ]

});
