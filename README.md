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
build: Build-Skrite
test: Unit tests

## Deployen

Das Verzeichnis www (nur statische Webseiten) in einem Webserver hinterlegen.

## Lokal starten

www/index.html im Browser öffnen. Funktioniert nur eingeschränkt.

## Bauen

Voraussetzung: node
Nach Änderungen an den Koans muss JS Hero mit npm neu gebaut werden.
Die Datei package.json definiert die dazu nötigen Schritte und Module.

Mit `npm install` die Module einmalig installieren.
Mit `npm run build` das Projekt bauen.
Diesen Befehl immer dann aufrufen, wenn etwas geändert wurde (Details siehe package.json)
Erst dann werden die Änderungen im Browser sichtbar.

`npm run build` ist (leider) vom Betriebssystem abhänigig. Es läuft nur unter Linux (ggf. iOS).
Lässt sich aber leicht für Windows anpassen.

## Ein neues Koan hinzufügen

1. Kopiere ein vorhandens Koan und passe es an allen Stellen sinnvoll an (was genau sinnvoll ist, wird noch beschrieben).

2. Füge die id des neuen Koans in die Datei zzz-order.js an der richtigen Stelle ein.

3. `npm run build`

4. Browser aktualisieren
