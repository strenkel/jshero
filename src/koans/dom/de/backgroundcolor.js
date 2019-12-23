jshero.koans.add({

  id: 'backgroundcolor',

  title: 'Dynamische Webseiten',

  lesson: `Webseiten basieren auf HTML, der Hypertext Markup Language. HTML-Seiten bestehen aus Text und werden
durch sogenannte Tags strukturiert. Tags stellen meist einen rechteckigen Bereich der Webseite dar.
Diese Bereiche können mit CSS, den Cascading Style Sheets, formatiert werden. Mit CSS kann man die
Position, die Größe, die Farbe und vieles mehr der einzelnen Tags festlegen. Eine Einführung in HTML
und CSS findest du auf <a href="https://wiki.selfhtml.org">SELFHTML</a>.<br><br>

Hier lernst du exemplarisch, wie man Webseiten mit Hilfe von JavaScript verändern kann.
Solche Webseiten nennt man auch dynamische Webseiten. Ein gutes Beispiel für eine dynamische Webseite ist JS Hero.
Sind auf einer Seite alle Tests grün, wechselt die Farbe der oberen Titelleiste von rot auf grün.
Das geschiet mit Hilfe von JavaScript. Einen solchen Farbwechsel wollen wir jetzt programmieren.<br><br>

Um einzelne Tags einer Webseite verändern zu können, benötigt JavaScript eine gesonderte Bibliothek,
das Document Object Model (DOM). Diese Bibliothek steht in jedem Browser über das
<code>document</code> Objekt zur Verfügung. Um auf ein Tag, auch HTML-Element genannt, zugreifen zu können,
muss man es identifizieren. Das geht am besten, wenn man dem Tag im HTML Code eine ID, einen 
<a href="https://de.wikipedia.org/wiki/Identifikator">Identifikator</a>, zuweist.
Hat ein Tag die ID <code>content</code>, so sieht der Zugriff wie folgt aus:  

<pre><code>var elm = document.getElementById("content");</code></pre>

<code>document</code> besitzt die Methode <code>getElementById</code>. Übergibt man dieser Methode eine ID,
so liefert sie ein Objekt zurück, dass das entsprechende HTML-Element repräsentiert.
Dieses Objekt besitzt nun Eigenschaften und Methoden, mit denen man das HTML-Element verändern kann.
Eine dieser Eigenschaften ist <code>style</code>. Es ist ein Objekt, dass alle CSS-Eigenschaften
des HTML-Elements repräsentiert. Mit diesem Objekt können wir nun die Hintergrundfarbe eines HTML-Elements
verändern:

<pre><code>var elm = document.getElementById("content");
elm.style.backgroundColor = 'blue';</code></pre>

Im ersten Schritt holen wir uns mit der bekannten Methode <code>getElementById</code> das HTML-Element.
Im zweiten Schritt setzen wir die Eigenschaft <code>backgroundColor</code> des <code>style</code>-Objekts
auf <code>'blue'</code>. Das HTML-Element wir augenblicklich blau.`,

  task: `Unterhalb der Aufgabe befindet sich ein grauer Streifen. Der Streifen ist ein HTML-Element
mit der ID <code>fixme</code>. Setze die Hintergrundfarbe dieses Streifens auf orange.`,

hint: `Setze <code>backgroundColor</code> auf <code>'orange'</code>.`,

solution: `<pre><code>var elm = document.getElementById('fixme');
elm.style.backgroundColor = 'orange';</code></pre>`,

  tests: [
    function() {
      var root = document.getElementById("fixme");
      var backgroundColor = root.style.backgroundColor;
      if (backgroundColor === 'orange') {
        return {
          ok: true,
          msg: "Die Hintergrundfarbe des Streifens ist <code>'orange'</code>."
        }
      } else {
        return {
          ok: false,
          msg: `Die Hintergrundfarbe des Streifens ist nicht <code>'orange'</code>,
sondern <code>'${backgroundColor}'</code>.`
        }
      }
    }

  ]

});
