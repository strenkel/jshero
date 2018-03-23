jshero.koans.add({

  id: "log1",

  title: "Logging",

  lesson: `Wenn man Programme schreibt, laufen die Dinge manchmal nicht so wie man will.
Es kommt nicht das gewünschte Ergebnis heraus und man weiß nicht warum.
Eine Möglichkeit hier weiter zu kommen ist das <a href="https://de.wikipedia.org/wiki/Logging">Loggen</a>.
Man macht während der Programmausführung gezielte Ausgaben.
In JavaScript verwendet man dafür die Funktion <code>console.log</code>:

<pre><code>console.log("Hallo Konsole!");</code></pre>

Hier wird der String <code>"Hallo Konsole!"</code> mit <code>console.log</code> ausgegeben.
Wo man die Ausgabe zu sehen bekommt, hängt von der JavaScript-Umgebung ab.
In Browsern sieht man die Log-Ausgabe im normalen Betrieb nicht.
Doch die meisten Desktop-Browser besitzen sogenannte <a href="https://de.wikipedia.org/wiki/Entwicklerwerkzeuge_in_Webbrowsern"> Entwicklerwerkzeuge</a>.
Das sind mächtige Tools zur Unterstützung von Webentwicklern. Eines dieser Tools ist die Konsole.
Dort wird das Log ausgegeben. Wie man die Entwickler-Werkzeuge öffnet hängt vom jeweiligen Browser ab.
Bei vielen Desktop-Browsern wird sie mit der Taste F12 geöffnet.
Die Konsole kannst du dann als Reiter auswählen. Alternativ kann man die Konsole über das Browser-Menü öffnen.
Auf mobilen Geräten stehen die Entwickler-Werkzeuge nicht zur Verfügung.
Deshalb schreibt JS Hero das Log zusätzlich in die Testausgabe.`,

  task: `Schreibe eine Funktion <code>logge</code>, die den String <code>"Hallo Konsole!"</code> loggt.
Arbeitest du mit einem Desktop-Browser öffne zusätzlich die Entwickler-Tools, um auch dort die Ausgabe zu sehen.`,

  beforeTests: function() {
    if (typeof logge !== "undefined") {
      logge = undefined;
    }
  },

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('logge');
    },

    function() {
      var ok, msg, e;
      try {
        logge();
        if (jshero.hasLog("Hallo Konsole!")) {
          ok = true;
          msg = '<code>logge()</code> loggt <code>"Hallo Konsole!"</code>.';
        } else {
          ok = false;
          msg = '<code>logge()</code> loggt nicht <code>"Hallo Konsole!"</code>.';
        }
      } catch (exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>logge()</code>.';
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