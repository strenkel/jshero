jshero.koans.add({

  id: 'textcontent',

  title: 'Text ändern',

  lesson: `Mit der Eigenschaft <code>textContent</code> kann man Text in ein HTML-Element schreiben:

<pre><code>let elm = document.getElementById("content");
elm.textContent = 'New content!';</code></pre>

Der alte Inhalt des HTML-Elements wird mit dem zugewiesenen String überschrieben.`,

  task: `Setze den Text des <code>fixme</code>-Elements auf <code>Hello HTML!</code>.`,

  solution: `<pre><code>let elm = document.getElementById('fixme');
elm.textContent = 'Hello HTML!';</code></pre>`,

  tests: [
    function() {
      let root = document.getElementById("fixme");
      let text = root.textContent;
      if (text === 'Hello HTML!') {
        return {
          ok: true,
          msg: "Das <code>fixme</code>-Element enthält den Text <code>Hello HTML!</code>."
        }
      } else {
        return {
          ok: false,
          msg: `Das <code>fixme</code>-Element enthält nicht den Text <code>Hello HTML!</code>, sondern den Text
<code>${text}</code>.`
        }
      }
    }

  ]

});
