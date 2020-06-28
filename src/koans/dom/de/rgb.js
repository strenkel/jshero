jshero.koans.add({

  id: 'rgb',

  title: 'RGB-Farben',

  lesson: `Bisher haben wir Farben über Schlüsselwörter wie <code>blue</code>, <code>red</code> oder
<code>yellow</code> festgelegt. Es gibt viele weitere solcher Schlüsselwörter wie <code>darkblue</code>
oder <code>forestgreen</code>. Eine vollständige Liste aller Farb-Schlüsselwörter findest du bei
<a href="https://developer.mozilla.org/de/docs/Web/CSS/Farben">MDN web docs</a>.
Mit diesen Schlüsselwörtern kann man viele, aber bei weitem nicht alle möglichen Farben darstellen.
Um jede mögliche Farbe darzustellen, muss man zu dem in CSS verwendeten
<a href="https://de.wikipedia.org/wiki/SRGB-Farbraum">sRGB-Farbraum</a> übergehen.
Dort wird jede Farbe durch ihren Rot-, Grün- und Blau-Anteil beschrieben.
Der Anteil ist eine ganze Zahl zwischen 0 und 255. Mischfarben ergeben sich durch die
<a href="https://de.wikipedia.org/wiki/Additive_Farbmischung">additive Farbmischung</a>.

<pre><code>let rot = 'rgb(255, 0, 0)';
let gruen = 'rgb(0, 255, 0)';
let blau = 'rgb(0, 0, 255)';
let weiss = 'rgb(255, 255, 255)';
let schwarz = 'rgb(0, 0, 0)';
let lila = 'rgb(255, 0, 255);'
let dunkelrot = 'rgb(150, 0, 0)';
let hellrot = 'rgb(255, 50, 50)';
let grau = 'rgb(120, 120, 120)';</code></pre>`,

  task: `Setze die Hintergrundfarbe des <code>fixme</code>-Elements auf <code>rgb(190, 220, 200)</code>
und die Textfarbe auf <code>rgb(10, 30, 230)</code>.`,

  solution: `<pre><code>let style = document.getElementById('fixme').style;
style.backgroundColor = 'rgb(190, 220, 200)';
style.color = 'rgb(10, 30, 230)';</code></pre>`,

  tests: [

    function() {
      let root = document.getElementById("fixme");
      let color = root.style.backgroundColor;
      if (color === 'rgb(190, 220, 200)') {
        return {
          ok: true,
          msg: "Die Hintergrundfarbe ist <code>'rgb(190, 220, 200)'</code>."
        }
      } else {
        return {
          ok: false,
          msg: `Die Hintergrundfarbe ist nicht <code>'rgb(190, 220, 200)'</code>, sondern <code>'${color}'</code>.`
        }
      }
    },

    function() {
      let root = document.getElementById("fixme");
      let color = root.style.color;
      if (color === 'rgb(10, 30, 230)') {
        return {
          ok: true,
          msg: "Die Textfarbe ist <code>'rgb(10, 30, 230)'</code>."
        }
      } else {
        return {
          ok: false,
          msg: `Die Textfarbe ist nicht <code>'rgb(10, 30, 230)'</code>, sondern <code>'${color}'</code>.`
        }
      }
    }

  ]

});
