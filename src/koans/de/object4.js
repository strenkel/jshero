(function(testutil) {

  jshero.koans.add({

    id: "object4",

    title: "Eigenschaften setzen",

    lesson: `Um Objekt-Eigenschaften zu ändern, verwendet man ebenfalls die Punkt-Notation:

<pre><code>var ware = {
  name: "Äpfel",
  preis: 2.15
};

// irgendwann später
ware.preis = 2.25;</code></pre>

Zunächst legen wir eine Ware mit dem Preis <code>2.15</code> an. Irgendwann später wird dieser Preis auf
<code>2.25</code> erhöht.`,

    task: `Schreibe eine Funktion <code>moveX</code>, die einen Punkt um 1 nach rechts verschiebt.
<code>moveX({x:&nbsp;2,&nbsp;y:&nbsp;5})</code> sollte <code>{x:&nbsp;3,&nbsp;y:&nbsp;5}</code> zurückgeben.`,

    hint: `<pre><code>var moveX = function(point) {
  ...
  return point;
};</code></pre>`,

    solution: `<pre><code>var moveX = function(point) {
  point.x = point.x + 1;
  return point;
};</code></pre>`,

    beforeTests: function() {
      if (typeof moveX !== "undefined") {
        moveX = undefined;
      }
    },

    tests: [

      function() {
        return testutil.assert_isFunction('moveX');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('moveX', 1);
      },

      function() {
        return testutil.assert_functionReturnsObject('moveX({x: 2, y: 0})', {x: 3, y: 0});
      },

      function() {
        return testutil.assert_functionReturnsObject('moveX({x: 3, y: 5})', {x: 4, y: 5});
      }

    ]

  });

})(jshero.testutil);