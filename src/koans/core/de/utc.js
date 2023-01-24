jshero.koans.add({

  id: 'utc',

  title: 'Weltzeit',

  lesson: `Wenn man mit Datum und Uhrzeit arbeitet, muss man zwischen
<a href='https://de.wikipedia.org/wiki/Koordinierte_Weltzeit'>koordinierter Weltzeit</a> (UTC, engl. Coordinated Universal Time) und
<a href='https://de.wikipedia.org/wiki/Zonenzeit'>Zonenzeit</a> unterscheiden.
Die koordinierte Weltzeit stellt weltweit eine einheitliche Zeitangabe her.
Die Zonenzeit ist die in einer Zeitzone geltende Zeit.
Von der koordinierten Weltzeit werden die verschiedenen Zonenzeiten abgeleitet.
So ergibt sich die <a href='https://de.wikipedia.org/wiki/Mitteleurop%C3%A4ische_Zeit'>Mitteleuropäische Zeit (MEZ)</a>
aus der koordinierten Weltzeit durch Addition von einer Stunde (kurz UTC+1). Die Mitteleuropäische Sommerzeit (MESZ) entspricht
UTC+2. UTC selbst ist die Zonenzeit der Westeuropäischen Zeit (WEZ).<br><br>
Was wir bisher über das Date-Objekt gelernt haben, bezog sich meist auf die Zonenzeit. So liefert der Ausdruck
<code>new Date(2018, 4, 5)</code> ein Date-Objekt, das dem Zeitpunkt 5.5.2018, 0:00 Uhr in lokaler Zeit entspricht.
Macht man diesen Aufruf in Deutschland, erhält man den 5.5.2018, 0:00 UTC+2 (Sommerzeit). In Japan liefert derselbe Aufruf
den 5.5.2018, 0:00 UTC+9. Zwischen beiden Zeitpunkten liegt eine Differenz von 7 Stunden.
Möchte man weltweit einen einheitlichen Zeitpunkt erzeugen, so muss man die koordinierte Weltzeit verwenden. Leider kann man nicht
direkt ein Date aus den UTC-Daten erzeugen. Man muss einen Umweg über die Millisekunden seit dem 1.1.1970 machen:
<pre><code>let millis = Date.UTC(2018, 4, 5);
let datum = new Date(millis);</code></pre>
Mit <code>Date.UTC()</code> erhält man zunächst die vergangenen Millisekunden seit dem 1.1.1970, 0:00 UTC.
Mit dieser Zahl und <code>new Date()</code> erzeugt man anschließend das gewünschte Date-Objekt.
Der Konstruktor-Aufruf mit den Millisekunden als Parameter bezieht sich nämlich auch auf den 1.1.1970, 0:00 UTC.
Die Variable <code>datum</code> repräsentiert den 5.5.2018, 0:00 UTC. <code>Date.UTC()</code> kann analog zu <code>new Date()</code> mit bis zu sieben Parametern
(Jahr, Monat, Tag, Stunden, Minuten, Sekunden und Millisekunden) aufgerufen werden. Es gelten dieselben Regeln wie bei <code>new Date()</code>:
Bei Jahreszahlen zwischen 0 und 99 wird 1900 hinzuaddiert und die Monate werden beginnend mit 0 durchnummeriert.`,

  task: `Schreibe eine Funktion <code>nikolausUTC</code>, die eine Jahresangabe als Zahl entgegennimmt und die ein
Date-Objekt mit dem 6. Dezember des übergebenen Jahres, 0:00 UTC, zurückgibt.<br><br>Beispiel:
<code>nikolaus(2017)</code> sollte ein Date-Objekt mit dem Zeitpunkt 6.12.2017, 0:00 UTC zurückgeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('nikolausUTC');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('nikolausUTC', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturnsType('nikolausUTC(2017)', 'Date');
    },

    function() {
      return jshero.testutil.assert_functionReturns(
        'nikolausUTC(2017)',
        new Date(Date.UTC(2017, 11, 6)), {
          'utc': true
        });
    },

    function() {
      return jshero.testutil.assert_functionReturnsType('nikolausUTC(1960)', 'Date');
    },

    function() {
      return jshero.testutil.assert_functionReturns(
        'nikolausUTC(1960)',
        new Date(Date.UTC(1960, 11, 6)), {
          'utc': true
        });
    }
  ]

});

