jshero.koans.add({

  id: 'regexescape',

  title: 'Regex: Escape',

  lesson: `Wie wir gesehen haben, besitzen reguläre Ausdrücke eine Reihe von Zeichen mit besonderer Bedeutung.
So steht <code>.</code> nicht für einen Punkt, sondern für ein beliebiges Zeichen.
Möchte man nach einen Punkt suchen, so muss man die besondere Bedeutung gewissermaßen
ausschalten. Das macht man mit einen vorangestellten Backslash:

<pre><code>let t1 = /\\./.test('Z. B.');
let t2 = /\\./.test('ZB');</code></pre>

Der erste Ausdruck ergibt <code>true</code>, der zweite <code>false</code>.
Ohne den Backslash würden beide Ausdrücke <code>true</code> ergeben.
Ein solches 'Ausschalten' nennt man maskieren oder escapen.

Möchte man nach dem Backslash suchen, so muss man diesen ebenfalls maskieren:

<pre><code>let t = /\\\\/.test('A \\ B');
// t ist true</code></pre>

Insgesamt gibt es 15 Zeichen, die man maskieren muss, wenn man nach ihnen suchen möchte:
<code>* + ? . ( ) [ ] { } \\ / | ^ $</code>`,

  task: `Schreibe eine Funktion <code>pruefe</code>, die feststellt, ob ein String den Teilstring <code>'(x)'</code>
enhält.<br><br>Beispiel: <code>pruefe('f(x)')</code> sollte <code>true</code> und
<code>pruefe('f(n)')</code> sollte <code>false</code> ergeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('pruefe');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('pruefe', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('f(x)')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('g(x)')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('x')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('f(n)')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('f()')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('(x')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("pruefe('x)')", false);
    }

  ]

});
