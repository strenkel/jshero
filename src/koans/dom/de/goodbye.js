jshero.koans.add({

  id: 'goodbye',

  title: 'Good bye!',

  lesson: `Nach über 100 Lektionen ist es Zeit 'Good bye' zu sagen.
Ich hoffe, dir hat das Tutorial gefallen!`,

  task: `Setze die Hintergrundfarbe des <code>fixme</code>-Elements auf <code>rgb(20, 166, 44)</code>.
Setze den Text auf <code>Good bye!</code>.`,

  tests: [

    function() {
      let root = document.getElementById("fixme");
      let color = root.style.backgroundColor;
      if (color === 'rgb(20, 166, 44)') {
        return {
          ok: true,
          msg: "Die Hintergrundfarbe ist <code>'rgb(20, 166, 44)'</code>."
        }
      } else {
        return {
          ok: false,
          msg: `Die Hintergrundfarbe ist nicht <code>'rgb(20, 166, 44)'</code>, sondern <code>'${color}'</code>.`
        }
      }
    },

    function() {
      let root = document.getElementById("fixme");
      let text = root.textContent;
      if (text === 'Good bye!') {
        return {
          ok: true,
          msg: "Das <code>fixme</code>-Element enthält den Text <code>Good bye!</code>."
        }
      } else {
        return {
          ok: false,
          msg: `Das <code>fixme</code>-Element enthält nicht den Text <code>Good bye!</code>, sondern den Text
<code>${text}</code>.`
        }
      }
    }

  ]

});
