jshero.koans.add({

  id: 'arraypush',

  title: 'Array.shift und Array.push',

  lesson: 'Arrays besitzen eine Reihe von Methoden. Zwei dieser Methoden möchte ich jetzt vorstellen: <code>shift</code> und <code>push</code>. ' +
    'Zur Erinnerung: Methoden sind Funktionen, die auf einem Objekt, hier Array, ausgeführt werden. Methoden werden mit einem Punkt ' +
    'an das Objekt angehängt. Wie bei Funktionen üblich folgt dem Methodennamen die runden Klammern, ggf. gefüllt mit Parametern. ' +
    '<code>Array.shift</code> hat keine Parameter und verschiebt die Elemente eines Arrays nach links. ' +
    'Das 1te Element wird zum 0ten, das 2te zum 1ten, das 3te zum 2ten, usw. ' +
    'Das 0te Element wird aus dem Array entfernt und zurückgegeben. Nach dem <code>shift</code> hat das Array ein Element weniger.' +
    '<pre><code>var sprachen = ["C", "Java", "JavaScript"];<br>' +
    'var naechsteSprache = sprachen.shift();</code></pre>' +
    'Das Array <code>sprachen</code> wird mit 3 Programmiersprachen angelegt. Nach dem <code>shift</code> enthält <code>sprachen</code> ' +
    'nur noch 2 Elemente, nämlich <code>["Java", "JavaScript"]</code>. Der Wert <code>"C"</code> ist in der Variablen ' +
    '<code>naechsteSprache</code> gelandet.<br>' +
    'Mit der häufig verwendeten Methode <code>Array.push</code> fügt man dem Array ein neues Element hinzu.' +
    '<pre><code>var sprachen = [];<br>' +
    'sprachen.push("C");<br>' +
    'sprachen.push("Java");<br>' +
    'sprachen.push("JavaScript");</code></pre>',
        
  task: '',

  beforeTests: function() {
    if (typeof sortiere !== "undefined") {
      sortieren = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof sortiere === 'function';
      var msg;
      if (ok) {
        msg = '<code>sortiere</code> ist eine Funktion.';
      } else {
        msg = '<code>sortiere</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = sortiere.length === 1;
      var msg;
      if (ok) {
        msg = '<code>sortiere</code> hat 1 Parameter.';
      } else {
        msg = '<code>sortiere</code> hat nicht 1, sondern ' + sortiere.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = sortiere([3, 2, 1]);
        ok = Array.isArray(result) && result.length === 3 && result[0] === 1 && result[1] === 2 && result[2] === 3;
        if (ok) {
          msg = '<code>sortiere([3, 2, 1])</code> gibt <code>[1, 2, 3]</code> zurück.';
        } else {
          msg = '<code>sortiere([3, 2, 1])</code> gibt nicht <code>[1, 2, 3]</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>sortiere([3, 2, 1])</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
   
    function() {
      var ok, msg;
      try {
        var result = sortiere([2, 3, 1]);
        ok = Array.isArray(result) && result.length === 3 && result[0] === 1 && result[1] === 2 && result[2] === 3;
        if (ok) {
          msg = '<code>sortiere([2, 3, 1])</code> gibt <code>[1, 2, 3]</code> zurück.';
        } else {
          msg = '<code>sortiere([2, 3, 1])</code> gibt nicht <code>[1, 2, 3]</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>sortiere([2, 3, 1])</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }

  ]

});
