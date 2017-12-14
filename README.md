# jshero
JS Hero: JavaScript-Tutorial mit Übungen/Koans

Website: <http://www.jshero.net><br>
Playstore: <https://play.google.com/store/apps/details?id=net.jshero>

Statische Website: läuft lokal oder auf jedem Webserver.
Die Playstore-App ist ein CORDOVA-Build (<https://cordova.apache.org>) der Website.

License: GNU Free Documentation License (Text) / GNU General Public License (Code)

## Lokal starten

Die index.html im Browser öffnen.

## Bauen

Nach Änderungen an den Koans muss JS Hero neu gebaut werden.

Die Datei package.json definiert die dazu nötigen Module.

Einmalig muss yarn installiet werden, siehe https://yarnpkg.com/lang/en/docs/install/

Dann mit `$ yarn install` die Module einmalig installieren.

Dann mit `$ yarn run build` das Projekt bauen. Diesen Befehl immer dann aufrufen, wenn etwas an den Koans geändert wurde.

Dadurch werden die Dateien js/koans-min/koans.js und en/js/koans-min/koans.js neu erstellt.
Erst dann werden die Änderungen im Browser sichtbar.

## Ein neues Koan hinzufügen

1. Kopiere ein vorhandens Koan und passe es an allen Stellen sinnvoll an (was genau sinnvoll ist, wird noch beschrieben).

2. Füge die id des neuen Koans in die Datei zzz-order.js an der richtigen Stelle ein.

3. `$ yarn run build`

4. Browser aktualisieren
