# jshero
JS Hero: JavaScript-Tutorial mit Übungen/Koans

Website: http://www.jshero.net
Playstore: https://play.google.com/store/apps/details?id=net.jshero

Statische Website: läuft lokal oder auf jeden Webserver.
Die Playstore-App ist ein CORDOVA-Build (https://cordova.apache.org) der Website.

License: GNU Free Documentation License (Text) / GNU General Public License (Code)

## buildtools

Nach Änderungen an den Koans muss JS Hero neu gebaut werden.

Die Datei package.json definiert die dazu nötigen Module.

Mit `$ yarn install` (oder `$ npm install`) werden diese Module einmalig installiert.

Dann mit `$ yarn run build` (oder `$ npm run build`) bauen.

Dadurch werden die Dateien js/koans-min/koans.js und en/js/koans-min/koans.js neu erstellt.
Erst dann werden die Änderungen im Browser sichtbar.

## Ein neues Koan hinzufügen

1. Kopiere ein vorhandens Koan und passe es an allen Stellen sinnvoll an (was genau sinnvoll ist, wird noch beschrieben).

2. Füge die id des neuen Koans in die Datei zzz-order.js an der richtigen Stelle ein.
