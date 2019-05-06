jshero.koans.add({

  id: 'string',

  title: 'Strings',

  lesson: `Wir haben gesehen, dass eine Variable ein Behälter für einen Wert ist. Werte besitzen dabei einen Typ.
So kann ein Wert eine Zahl wie <code>7.12</code> sein. Der Typ von <code>7.12</code> ist Zahl. Oder ein Wert kann
ein Text wie <code>'Hallo Welt!'</code> sein. Der Typ von <code>'Hallo Welt!'</code> ist Text. Diesen Typ bezeichnet
man auch als Zeichenkette oder String. Dabei kann man einfache oder doppelte Anführungszeichen verwenden.
So ist <code>'Hallo Welt!'</code> derselbe String wie <code>"Hallo Welt!"</code>.<br>Mit Strings kann man arbeiten.
Man kann sie zum Beispiel verketten. Dies macht man mit dem <code>+</code> Zeichen. <code>'Blau' + 'meier'</code>
ergibt den String <code>'Blaumeier'</code>.<br>Die folgende Funktion hängt an dem übergebenen Parameter einen Text
an und gibt den zusammengesetzten Text zurück:

<pre><code>var lobe = function(name) {
  return name + ' ist toll!';
};</code></pre>

So liefert <code>lobe('JavaScript')</code> den Wert <code>'JavaScript ist toll!'</code>.`,

  task: `Schreibe eine Funktion <code>begruesse</code>, die einen Parameter entgegennimmt und die
<code>'Hallo &lt;Parameter&gt;!'</code> zurückgibt. Übergibt man der Funktion <code>'Maria'</code>,
so sollte die Funktion <code>'Hallo Maria!'</code> zurückgeben. Übergibt man der Funktion <code>'Franz'</code>,
so sollte die Rückgabe <code>'Hallo Franz!'</code> sein.`,

  hint: `<pre><code>var begruesse = function(name) {
  return ...
};</code></pre>`,

  solution: `<pre><code>var begruesse = function(name) {
  return 'Hallo ' + name + '!';
};</code></pre>`,

  beforeTests: function() {
    begruesse = undefined;
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('begruesse');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('begruesse', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("begruesse('Maria')", 'Hallo Maria!');
    },

    function() {
      return jshero.testutil.assert_functionReturns("begruesse('Franz')", 'Hallo Franz!');
    }
  ]

});
