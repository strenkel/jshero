jshero.koans.add({

  id: "string",

  title: "Strings",

  lesson: `Wir haben gesehen, dass eine Variable ein Behälter für einen Wert ist. Werte besitzen dabei einen Typ. So kann ein Wert eine Zahl
    wie <code>7.12</code> sein. Der Typ von <code>7.12</code> ist Zahl. Oder ein Wert kann ein Text wie <code>"Hallo Welt!"</code> sein.
    Der Typ von <code>"Hallo Welt!"</code> ist Text. Diesen Typ
    bezeichnet man auch als Zeichenkette oder String. Strings schreibt man immer in einfachen oder doppelten Anführungszeichen. So ist "Hallo Welt!" derselbe String
    wie \'Hallo Welt!\'.<br>Mit Strings kann man arbeiten. Man kann sie zum Beispiel verketten. Dies macht man mit dem <code>+</code> Zeichen.
    So liefert <code>"Blau" + "meier"</code> den String <code>"Blaumeier"</code>.<br>Die folgende Funktion hängt an dem übergebenen Parameter einen Text an und
    gibt den zusammengesetzten Text zurück: <pre><code>var lobe = function(name) {<br>  return name + " ist toll!";<br>};</code></pre>
    So liefert <code>lobe("JavaScript")</code> den Wert <code>"JavaScript ist toll!"</code>.`,

  task: `Schreibe eine Funktion <code>begruesse</code>, die einen Parameter entgegennimmt und die <code>"Hallo &lt;Parameter&gt;!"</code> zurückgibt.
    Übergibt man der Funktion <code>"Maria"</code>, so sollte die Funktion <code>"Hallo Maria!"</code> zurückgeben. Übergibt man der Funktion <code>"Franz"</code>,
    so sollte die Rückgabe <code>"Hallo Franz!"</code> sein.`,

  beforeTests: function() {
      begruesse = undefined;
  },

  tests: [

    function() {
        return jshero.testutil.assert_de_isFunction('begruesse');
    },

    function() {
      var ok = begruesse.length === 1;
      var msg;
      if (ok) {
        msg = "<code>begruesse</code> hat 1 Parameter.";
      } else {
        msg = "<code>begruesse</code> hat nicht 1, sondern " + begruesse.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
        return jshero.testutil.assert_de_functionReturns('begruesse("Maria")', 'Hallo Maria!');
    },

    function() {
        return jshero.testutil.assert_de_functionReturns('begruesse("Franz")', 'Hallo Franz!');
    }
  ]

});
