# jshero
JS Hero: JavaScript-Tutorial mit Übungen/Koans

Website: http://www.jshero.net
Playstore: https://play.google.com/store/apps/details?id=net.jshero

Statische Website: läuft lokal oder auf jeden Webserver.
Die Playstore-App ist ein CORDOVA-Build (https://cordova.apache.org) der Website.

Das File js/koans-min/koans.js ist das gepackte JavaScript aller Dateien in js/koans.
Dazu muss man mit nodejs und dem Modul node-minify die Datei koans-min.js im Verzeichnis buildtools ausführen.

License: GNU Free Documentation License (Text) / GNU General Public License (Code)

## buildtools

Die Datei package.json definiert die nötigen Module, die für koans-min.js verwendet werden.

Mit `$ yarn install` (oder `$ npm install`) werden diese Module einmalig installiert.

Das Script kann dann mit `$ yarn run build` (oder `$ node koans-min.js`) ausgeführt werden.

In der koans-min.js-Datei wird die Reihenfolge der Koans definiert, so wie sie
im Tutorial erscheinen.
