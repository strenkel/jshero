jshero.koans.add({

  id: 'border',

  title: 'Rahmen',

  lesson: `HTML-Elementen kann man einen Rahmen geben. Ein Rahmen wird durch drei Eigenschaften beschrieben:
seine Breite, seine Farbe und sein Aussehen:

<pre><code>let elm = document.getElementById("content");
elm.style.borderWidth = '1px';
elm.style.borderColor = 'purple';
elm.style.borderStyle = 'dotted';</code></pre>

Die Breite des Rahmens wird über die style-Eigenschaft <code>borderWidth</code> festgelegt. Um die Breite anzugeben,
benötigt man neben einer Zahl noch eine Einheit. Eine einfache Einheit ist
<a href="https://de.wikipedia.org/wiki/Pixel">Pixel</a> (px). Ein Pixel ist meist einem Bildpunkt
auf dem Bildschirm. Je nach Bildschirm entspricht 1 px etwa 0,3 mm.<br><br>

Die Farbe des Rahmens wird über die style-Eigenschaft <code>borderColor</code> angegben. Hier kann man ein
Farbschlüsselwort oder eine RGB-Farbe angeben.<br><br>

Das Aussehen des Rahmens wird über die style-Eigenschaft
<code>borderStyle</code> festgelegt.
Hier stehen die Schlüsselwörter <code>dotted</code> (gepunkted), <code>dashed</code> (gestrichelt),
<code>solid</code> (durchgezogem), <code>double</code> (doppelt), <code>groove</code>, <code>ridge</code>,
<code>inset</code> und <code>outset</code> zur Verfügung. Die letzten 4 Werte beschreiben verschiedene 3-D Effekte.`,

  task: `Versehe das <code>fixme</code>-Element mit einem Rahmen. Der Rahmen soll durchgezogen und indigo sein sowie
eine Breite von 5 Pixel besitzen.`,

solution: `<pre><code>let style = document.getElementById('fixme').style;
style.borderWidth = '5px';
style.borderColor = 'indigo';
style.borderStyle = 'solid';</code></pre>`,

  tests: [
    function() {
      let root = document.getElementById("fixme");
      let actual = root.style.borderStyle;
      if (actual === 'solid') {
        return {
          ok: true,
          msg: "Der Rahmen-Style ist <code>'solid'</code>."
        }
      } else {
        return {
          ok: false,
          msg: `Der Rahmen-Style ist nicht <code>'solid'</code>, sondern <code>'${actual}'</code>.`
        }
      }
    },

    function() {
      let root = document.getElementById("fixme");
      let actual = root.style.borderColor;
      if (actual === 'indigo') {
        return {
          ok: true,
          msg: "Die Rahmen-Farbe ist <code>'indigo'</code>."
        }
      } else {
        return {
          ok: false,
          msg: `Die Rahmen-Farbe ist nicht <code>'indigo'</code>, sondern <code>'${actual}'</code>.`
        }
      }
    },

    function() {
      let root = document.getElementById("fixme");
      let actual = root.style.borderWidth;
      if (actual === '5px') {
        return {
          ok: true,
          msg: "Die Rahmen-Breite beträgt <code>'5px'</code>."
        }
      } else {
        return {
          ok: false,
          msg: `Die Rahmen-Breite beträgt nicht <code>'5px'</code>, sondern <code>'${actual}'</code>.`
        }
      }
    }

  ]

});
