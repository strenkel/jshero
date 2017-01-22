jshero.koans.add({

  id: "string",

  title: "Strings",

  lesson: 'Wir haben gesehen, dass eine Variable ein Behälter für einen Wert ist. Werte besitzen dabei einen Typ. So kann ein Wert eine Zahl ' +
    'wie <code>7.12</code> sein. Der Typ von <code>7.12</code> ist Zahl. Oder ein Wert kann ein Text wie <code>"Hallo Welt!"</code> sein. ' +
    'Der Typ von <code>"Hallo Welt!"</code> ist Text. Diesen Typ ' +
    'bezeichnet man auch als Zeichenkette oder String. Strings schreibt man immer in einfachen oder doppelten Anführungszeichen. So ist "Hallo Welt!" derselbe String ' +
    'wie \'Hallo Welt!\'.<br>Mit Strings kann man arbeiten. Man kann sie zum Beispiel verketten. Dies macht man mit dem <code>+</code> Zeichen. ' +
    'So liefert <code>"Java" + "Script"</code> den String <code>"JavaScript"</code>.<br>Die folgende Funktion hängt an dem übergebenen Parameter einen Text an und ' +
    'gibt den zusammengesetzten Text zurück: <pre><code>var lobe = function(name) {<br>  return name + " ist toll!";<br>}</code></pre>' + 
    'So liefert <code>lobe("JavaScript")</code> den Wert <code>"JavaScript ist toll!"</code>.', 
        
  task: 'Schreibe eine Funktion <code>begruesse</code>, die einen Parameter entgegennimmt und die <code>"Hallo &lt;Parameter&gt;!"</code> zurückgibt. ' +
    'Übergibt man der Funktion <code>"Maria"</code>, so sollte die Funktion <code>"Hallo Maria!"</code> zurückgeben. Übergibt man der Funktion <code>"Franz"</code>, ' +
    'so sollte die Rückgabe <code>"Hallo Franz!"</code> sein.',

  beforeTests: function() {
    if (typeof begruesse !== "undefined") {
      begruesse = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof begruesse === 'function';
      var msg;
      if (ok) {
        msg = "<code>begruesse</code> ist eine Funktion.";
      } else {
        msg = "<code>begruesse</code> ist keine Funktion."
      }
      return {
        msg: msg,
        ok: ok
      };
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
      var ok, msg, e;
      try {
        var result = begruesse('Maria');
        if (result === "Hallo Maria!") {
          ok = true;
          msg = '<code>begruesse("Maria")</code> gibt <code>"Hallo Maria!"</code> zurück.';
        } else {
          ok = false;
          msg = '<code>begruesse("Maria")</code> gibt nicht <code>"Hallo Maria!"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>hallo("Maria")</code>.';
        e = exc;
      }
      return {
        msg: msg,
        ok: ok,
        e: e
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = begruesse('Franz');
        if (result === "Hallo Franz!") {
          ok = true;
          msg = '<code>begruesse("Franz")</code> gibt <code>"Hallo Franz!"</code> zurück.';
        } else {
          ok = false;
          msg = '<code>begruesse("Franz")</code> gibt nicht <code>"Hallo Franz!"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>hallo("Franz")</code>.';
        e = exc;
      }
      return {
        msg: msg,
        ok: ok,
        e: e
      };
    }
    
  ]

});
