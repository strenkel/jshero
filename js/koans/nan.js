jshero.koans.add({

  id: "nan",

  title: "NaN",

  lesson: '<code>NaN</code> repräsentiert den Wert Not-A-Number (engl.: Keine-Zahl). Numerische Operationen oder Funktionen geben <code>NaN</code> zurück, ' +
    'wenn sie keinen Wert berechnen können. Wir hatten dies bei <code><a href="main.html?koan=parseint">parseInt</a></code> kennengelernt. ' +
    '<code>parseInt</code> gibt <code>NaN</code> zurück, wenn es keine Zahl parsen kann. Ein weiteres Beispiel ist die Berechnung der Wurzel aus einer negativen Zahl. ' +
    '<pre><code>' +
    'var age = parseInt("Babylon");<br>' +
    'var length = Math.sqrt(-1);' +
    '</code></pre>' +
    'Sowohl <code>age</code> als auch <code>length</code> haben den Wert <code>NaN</code>. ' +
    'Möchte man testen, ob <code>NaN</code> vorliegt, kann man leider nicht <code>===</code> verwenden. <code>age === NaN</code> ergibt auch dann <code>false</code>, ' +
    'wenn <code>age</code> den Wert <code>NaN</code> besitzt. <code>NaN</code> ist der einzige Wert in JavaScript, der nicht mit sich selbst ' +
    'gleich ist. Stattdessen verwendet man die Funktion <code>isNaN</code>.' +
    '<pre><code>' +
    'var message;<br>' +
    'var age = parseInt("Babylon");<br>' +
    'if ( isNaN(alter) ) {<br>' +
    '  message = "Du hast keine Zahl eingegeben.";<br>' +
    '}' +
    '</code></pre>',
        
  task: 'Schreibe eine Funktion <code>parseFirstInt</code>, die einen String entgegennimmt und die die erste in dem String vorkommende ganze Zahl zurückgibt. ' +
    '<code>parseFirstInt("Sonnebornstr. 27")</code> sollte <code>27</code> zurückgeben. <code>parseFirstInt("Babylon")</code> sollte <code>NaN</code> ergeben.',

  beforeTests: function() {
    if (typeof parseFirstInt !== "undefined") {
      parseFirstInt = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof parseFirstInt === 'function';
      var msg;
      if (ok) {
        msg = "<code>parseFirstInt</code> ist eine Funktion.";
      } else {
        msg = "<code>parseFirstInt</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = parseFirstInt.length === 1;
      var msg;
      if (ok) {
        msg = "<code>parseFirstInt</code> hat 1 Parameter.";
      } else {
        msg = "<code>parseFirstInt</code> hat nicht 1, sondern " + parseFirstInt.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = parseFirstInt("Sonnebornstr. 27");
        ok = result === 27;
        if (ok) {
          msg = '<code>parseFirstInt("Sonnebornstr. 27")</code> ergibt <code>27</code>.';
        } else {
          msg = '<code>parseFirstInt("Sonnebornstr. 27")</code> ergibt nicht <code>27</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>parseFirstInt("Sonnebornstr. 27")</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = parseFirstInt("28 Jahre");
        ok = result === 28;
        if (ok) {
          msg = '<code>parseFirstInt("28 Jahre")</code> ergibt <code>28</code>.';
        } else {
          msg = '<code>parseFirstInt("28 Jahre")</code> ergibt nicht <code>28</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>parseFirstInt("28 Jahre")</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = parseFirstInt("Ohnezahl");
        ok = Number.isNaN(result);
        if (ok) {
          msg = '<code>parseFirstInt("Ohnezahl")</code> ergibt <code>NaN</code>.';
        } else {
          msg = '<code>parseFirstInt("Ohnezahl")</code> ergibt nicht <code>NaN</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>parseFirstInt("Ohnezahl")</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    }

  ]

});
