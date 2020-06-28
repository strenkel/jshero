jshero.koans.add({

  id: 'color',

  title: 'Textfarbe',

  lesson: `Die Textfarbe wird mit der <code>style</code> Eigenschaft <code>color</code> gesetzt:

<pre><code>let elm = document.getElementById("content");
elm.style.color = 'green';</code></pre>`,

  task: `Setze die Textfarbe des <code>fixme</code>-Elements auf gelb.`,

hint: `Setze <code>color</code> auf <code>'yellow'</code>.`,

solution: `<pre><code>let elm = document.getElementById('fixme');
elm.style.color = 'yellow';</code></pre>`,

  tests: [
    function() {
      let root = document.getElementById("fixme");
      let color = root.style.color;
      if (color === 'yellow') {
        return {
          ok: true,
          msg: "Die Textfarbe ist <code>'yellow'</code>."
        }
      } else {
        return {
          ok: false,
          msg: `Die Textfarbe ist nicht <code>'yellow'</code>, sondern <code>'${color}'</code>.`
        }
      }
    }

  ]

});
