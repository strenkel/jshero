(function(testutil) {

  jshero.koans.add({

    id: 'log1',

    title: 'Logging',

    lesson: `Programmieren beinhaltet immer auch die Suche nach Fehlern.
Eine Möglichkeit Fehler zu finden ist das <a href='https://de.wikipedia.org/wiki/Logging'>Loggen</a>.
Man macht während der Programmausführung gezielte Ausgaben.
In JavaScript verwendet man dafür die Funktion <code>console.log</code>:

<pre><code>console.log('Hallo Konsole!');</code></pre>

Hier wird der String <code>'Hallo Konsole!'</code> mit <code>console.log</code> ausgegeben.
Wo man die Ausgabe zu sehen bekommt, hängt von der JavaScript-Umgebung ab.
In Browsern sieht man die Log-Ausgabe im normalen Betrieb nicht.
Doch die meisten Desktop-Browser besitzen sogenannte <a href='https://de.wikipedia.org/wiki/Entwicklerwerkzeuge_in_Webbrowsern'> Entwicklerwerkzeuge</a>.
Das sind mächtige Tools zur Unterstützung von Webentwicklern. Eines dieser Tools ist die Konsole.
Dort wird das Log ausgegeben. Wie man die Entwickler-Werkzeuge öffnet hängt vom jeweiligen Browser ab.
Bei vielen Desktop-Browsern wird sie mit der Taste F12 geöffnet.
Die Konsole kannst du dann als Reiter auswählen. Alternativ kann man die Konsole über das Browser-Menü öffnen.
Auf mobilen Geräten stehen die Entwickler-Werkzeuge nicht zur Verfügung.
Deshalb schreibt JS Hero das Log zusätzlich in die Testausgabe.`,

    task: `Schreibe eine Funktion <code>logge</code>, die den String <code>'Hallo Konsole!'</code> loggt.
Arbeitest du mit einem Desktop-Browser öffne zusätzlich die Entwickler-Tools, um auch dort die Ausgabe zu sehen.`,

    hint: `<pre><code>function logge() {
  console.log(...);
};</code></pre>`,

    solution: `<pre><code>function logge() {
  console.log('Hallo Konsole!');
};</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isFunction('logge');
      },

      function() {
        return testutil.assert_functionLogs('logge()', 'Hallo Konsole!');
      }

    ]

  });

})(jshero.testutil);