jshero.koans.add({

  id: 'replace',

  title: 'String: replace()',

  lesson: `Die Methode <code>replace</code> ersetzt einen Teilstring durch einen anderen:

<pre><code>var str = "Hallo Marcel!";
var newstr = str.replace("Marcel", "Robert");</code></pre>

"Marcel" wird durch "Robert" ersetzt. <code>newstr</code> hat also den Wert <code>"Hallo Robert!"</code>.
Der ursprüngliche String bleibt unverändert. Nur das erste Vorkommen wird ersetzt:

<pre><code>var newname = "Peter".replace("e", "a");</code></pre>

<code>newname</code> enthält den Wert <code>"Pater"</code> und nicht <code>"Patar"</code>.
Ein Spezialfall ergibt sich, wenn der ersetzende String der Leerstring ist:

<pre><code>var nurso = "sowie so".replace("wie", "");</code></pre>

Der zu ersetzende String wird entfernt. <code>nurso</code> enthält den Wert <code>"so so"</code>.
Kommt der zu ersetzende String nicht vor, so wird der ursprüngliche String zurückgegeben.`,

  task: `Schreibe eine Funktion <code>convert</code>, die einen Datumsstring in englischer Schreibweise (20-05-2017 oder 20/05/2017) in
deutsche Schreibweise (20.05.2017) umwandet. Sowohl <code>convert("20-05-2017")</code> als auch <code>convert("20/05/2017")</code>
sollten <code>"20.05.2017"</code> ergeben.`,

  hint: `<pre><code>var convert = function(s1, s2) {
// Verwende replace viermal.
};`,

  solution: `<pre><code>var convert = function(dateEn) {
  var dateDe = dateEn.replace("-", ".");
  dateDe = dateDe.replace("-", ".");
  dateDe = dateDe.replace("/", ".");
  dateDe = dateDe.replace("/", ".");
  return dateDe;
};`,

  beforeTests: function() {
    if (typeof convert !== "undefined") {
      convert = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('convert');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('convert', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('convert("10-07-1871")', '10.07.1871');
    },

    function() {
      return jshero.testutil.assert_functionReturns('convert("8/11/1922")', '8.11.1922');
    }

  ]

});
