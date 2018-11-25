# 2.8.1
Add code week link

# 2.8.0
en: add playground
Layout: cahnge font-size to 20px
Shorten text on start page

# 2.7.2
Fix small isues
Change html-head-title to JS Hero
Add serlo link

# 2.7.1

Kleinere Textkorrekturen / Textverbesserungen

# 2.7.0

### New koans
de/fakultaet.js: Fakultät
de/regex5a.js: Regex: Anfangs- und Endezeichen
de/regex8.js: Regex: {n,m}

### Add hint and solution
de: mean.js, math.js, array.js, arraypush.js, for1.js, regex1.js
en: mean.js, math.js, minmax.js, for1.js

# 2.6.0

### New koans
de/regex7.js: Regex: beliebige Wiederholung

### Add hint and solution
en: equals.js, bool.js

# 2.5.1
Bugfix Koan "Zwei return-Anweisungen" (DE)

# 2.5.0

### Neue Übungen
Folgende Übungen wurden hinzugefügt:<br>
DE: Zwei return-Anweisungen

### Tipp und Lösung
Für folgende Übungen wurden Tipp und Lösung hinzugefügt:<br>
DE: Wahrheitswerte, Strikte Gleichheit, if<br>
EN: Numbers, Modulo

# 2.4.0

### let und const
Im Lösungscode kann jetzt auch "let" und "const" verwendet werden.
Der Lösungscode wird nicht mehr mit global-eval, sondern mit eval ausgewertet. Dabei wird der Testaufruf als
String an den Lösungscode gehängt und beides zusammen mit eval ausgewertet.
Positiver Nebeneffekt: Man kann im Lösungscode keine jshero Variable überschreiben.

### Changelog
Einführung des Changelogs.

# 2.3.0

### Endlosschleifen
Endlosschleifen im Lösungscode werden jetzt abgefangen und als Testfehler gemeldet.
Möglich wird das durch die Auswertung des Lösungscodes in separate Worker (pro Test ein Worker).
Für Browser, die Worker nicht unterstützen (z.B.: IE<10), wird der Lösungscode wie bisher im Mainthread ausgewertet.
Endlosschleifen im Lösungscode führen hier wie bisher zum Einfrieren der App.
