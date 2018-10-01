# CHANGELOG

## 2.5.0-SNAPSHOT

### Neue Übungen
Folgende Übungen wurden hinzugefügt:
Zwei return-Anweisungen

### Tipp und Lösung
Für folgende Übungen wurden Tipp und Lösung hinzugefügt:
Wahrheitswerte, Strikte Gleichheit, if

## 2.4.0

### let und const
Im Lösungscode kann jetzt auch "let" und "const" verwendet werden.
Der Lösungscode wird nicht mehr mit global-eval, sondern mit eval ausgewertet. Dabei wird der Testaufruf als
String an den Lösungscode gehängt und beides zusammen mit eval ausgewertet.
Positiver Nebeneffekt: Man kann im Lösungscode keine jshero Variable überschreiben.

### Changelog
Einführung des Changelogs.

## 2.3.0

### Endlosschleifen
Endlosschleifen im Lösungscode werden jetzt abgefangen und als Testfehler gemeldet.
Möglich wird das durch die Auswertung des Lösungscodes in separate Worker (pro Test ein Worker).
Für Browser, die Worker nicht unterstützen (z.B.: IE<10), wird der Lösungscode wie bisher im Mainthread ausgewertet.
Endlosschleifen im Lösungscode führen hier wie bisher zum Einfrieren der App.
