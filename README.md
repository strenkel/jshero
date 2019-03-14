# jshero

JS Hero: JavaScript-Tutorial mit Übungen/Koans

Website: <https://www.jshero.net><br>
Playstore: <https://play.google.com/store/apps/details?id=net.jshero>

Statische Websites: laufen lokal oder in jedem Webserver.
Lokal nur in Browsern, die auch lokal local storage unterstuetzen (Firefix, nicht Chrome, ...).
Die Playstore-App ist ein CORDOVA-Build (<https://cordova.apache.org>) der Website.

## Verzeichnisstruktur

www: das gebaute Projekt
src: Sourcen, um das Projekt zu bauen
Dateien, die nicht gebaut werden müssen, stehen direkt in wwww

## Lokal starten

Die www/index.html im Browser öffnen.

## Bauen

Nach Änderungen an den Koans muss JS Hero mit npm neu gebaut werden.
Die Datei package.json definiert die dazu nötigen Module.

Mit `npm install` die Module einmalig installieren.
Mit `npm run build` das Projekt bauen.
Diesen Befehl immer dann aufrufen, wenn etwas an den Koans geändert wurde.

Dadurch werden die Dateien js/koans-min/koans.js und en/js/koans-min/koans.js neu erstellt.
Erst dann werden die Änderungen im Browser sichtbar.

## Ein neues Koan hinzufügen

1. Kopiere ein vorhandens Koan und passe es an allen Stellen sinnvoll an (was genau sinnvoll ist, wird noch beschrieben).

2. Füge die id des neuen Koans in die Datei zzz-order.js an der richtigen Stelle ein.

3. `npm run build`

4. Browser aktualisieren
