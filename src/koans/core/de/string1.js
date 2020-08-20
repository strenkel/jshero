jshero.koans.add({

  id: 'string1',

  title: 'Strings',

  lesson: `Wir haben gesehen, dass eine Variable ein Behälter für einen Wert ist. Werte besitzen dabei einen Typ.
So kann ein Wert eine Zahl wie <code>7.12</code> sein. Der Typ von <code>7.12</code> ist Zahl. Oder ein Wert kann
ein Text wie <code>'Hallo Welt!'</code> sein. Der Typ von <code>'Hallo Welt!'</code> ist Text. Diesen Typ bezeichnet
man auch als Zeichenkette oder String. Dabei kann man einfache oder doppelte Anführungszeichen verwenden.
So ist <code>'Hallo Welt!'</code> derselbe String wie <code>"Hallo Welt!"</code>.<br>Mit Strings kann man arbeiten.
Man kann sie zum Beispiel verketten. Dies macht man mit dem <code>+</code> Zeichen. <code>'Blau' + 'meier'</code>
ergibt den String <code>'Blaumeier'</code>.<br>Die folgende Funktion hängt an dem übergebenen Parameter einen Text
an und gibt den zusammengesetzten Text zurück:

<pre><code>function praise(name) {
  return name + ' ist toll!';
}</code></pre>

So liefert <code>praise('JavaScript')</code> den Wert <code>'JavaScript ist toll!'</code>.`,

  task: `Schreibe eine Funktion <code>welcome</code>, die einen Parameter entgegennimmt und die
<code>'Hallo &lt;Parameter&gt;!'</code> zurückgibt.<br><br>
Beispiel: Übergibt man der Funktion <code>welcome</code> den Wert <code>'Ada'</code>,
so sollte die Funktion <code>'Hallo Ada!'</code> zurückgeben.`,

  hint: `<pre><code>function welcome(name) {
  return ...
}</code></pre>`,

  solution: `<pre><code>function welcome(name) {
  return 'Hallo ' + name + '!';
}</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('welcome');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('welcome', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("welcome('Ada')", 'Hallo Ada!');
    },

    function() {
      return jshero.testutil.assert_functionReturns("welcome('Marianne')", 'Hallo Marianne!');
    },

    function() {
      return jshero.testutil.assert_functionReturns("welcome('Mitchell')", 'Hallo Mitchell!');
    }
  ]

});
