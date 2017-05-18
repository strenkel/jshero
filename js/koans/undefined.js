(function(dateUtil) {

jshero.koans.add({

  id: 'undefined',

  title: 'undefined',

  lesson: 'Bisher hatten wir Variablen bei der Deklaration immer auch initialisiert.' +
     '<pre><code>' +
     '// Deklaration und Initialisierung<br>' +
     'var x = 1;' +
     '</code></pre>' +
     'Man kann eine Varialbe aber auch deklarieren und ihr später einen Wert zuweisen.' +
     '<pre><code>' +
     'var x; // Deklaration<br>' +
     'x = 1; // Initialisierung' +
     '</code></pre>' +
     'Variablen, die nicht initialisiert wurden, haben den Wert <code>undefined</code> (engl.: nicht definiert). ' +
     'In der Praxis kommt das bei Funktionsaufrufen am häufigsten vor. Ruft man eine Funktion, die einen Parameter erwartet, ohne Parameter auf, ' +
     'dann erhält der Funktionsparameter den Wert <code>undefined</code>.' +
     '<pre><code>' +
     'var echo = function(x) {<br>' +
     '  return x;<br>' +
     '};<br>' +
     '// Aufruf ohne Parameter<br>' +
     'var y = echo();' +
     '</code></pre>' +
     '<code>echo</code> wird hier ohne Parameter aufgerufen. Dem Parameter <code>x</code> wird so kein Wert zugewiesen, er erhält den Wert <code>undefined</code>. ' +
     'Da <code>echo</code> den Parameter <code>x</code> einfach nur zurückgibt, erhält auch <code>y</code> den Wert <code>undefined</code>. <br><br>' +
     'Eine Funktion, die einen Parameter erwartet, kann immer auch ohne Parameter aufgerufen werden. Man sollte sich beim Schreiben von Funktionen also immer überlegen, ' +
     'was in diesem Fall passieren soll. Gute Praxis ist es, in einem solchen Fall dem Parameter einen Default-Wert (engl.: Vorgabe) zuzuweisen. ' +
     'Das hatten wir schon bei der String-Methode <code>charAt(index)</code> kennen gelernt. Normalerweise gibt diese Methode den Buchstaben an der Stelle <code>index</code> ' +
     'zurück. Rufen wir <code>charAt</code> ohne Parameter auf, erhält <code>index</code> den Default <code>0</code>. Es wird der Buchstabe an der Stelle <code>0</code> zurückgegeben. ' +
     'Um eine Varaible auf <code>undefined</code> zu überprüfen, verwendet man wie üblich die strikte Gleichkeit. Die Methode <code>charAt</code> könnte also folgenden Code-Ausschnitt enthalten:' +
     '<pre><code>' +
     'if (index === undefined) {<br>' +
     '  index = 0;<br>' +
     '}<br>' +
     '</code></pre>',

  task: 'Schreibe eine Funktion <code>hallo</code>, die einen String als Parameter entgegennimmt und <code>"Hallo &lt;Parameter&gt;!"</code> zurückgibt. ' +
    '<code>hallo("Akgün")</code> sollte <code>"Hallo Akgün!"</code> zurückgeben. Wird <code>hallo</code> ohne Parameter aufgerufen, so soll <code>"Hallo Welt!"</code> zurückgegeben werden.',

  beforeTests: function() {
    if (typeof hallo !== "undefined") {
      hallo = undefined;
    }
  },

  tests: [

    function() {
      var ok = typeof hallo === 'function';
      var msg;
      if (ok) {
        msg = "<code>hallo</code> ist eine Funktion.";
      } else {
        msg = "<code>hallo</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = hallo.length === 1;
      var msg;
      if (ok) {
        msg = "<code>hallo</code> hat 1 Parameter.";
      } else {
        msg = "<code>hallo</code> hat nicht 1, sondern " + hallo.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = hallo();
        ok = result === "Hallo Welt!"
        if (ok) {
          msg = '<code>hallo()</code> gibt <code>"Hallo Welt!"</code> zurück.';
        } else {
          msg = '<code>hallo()</code> gibt nicht <code>"Hallo Welt!"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>hallo()</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = hallo("Melek");
        ok = result === "Hallo Melek!"
        if (ok) {
          msg = '<code>hallo("Melek")</code> gibt <code>"Hallo Melek!"</code> zurück.';
        } else {
          msg = '<code>hallo("Melek")</code> gibt nicht <code>"Hallo Melek!"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>hallo("Melek")</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    }

  ]

});

})(jshero.date);
