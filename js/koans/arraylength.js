jshero.koans.add({

  id: 'arraylength',

  title: 'Array: length',

  lesson: 'Die Eigenschaft <code>length</code> hatten wird schon bei Strings kennengelernt. Dort gab sie die Anzahl ' +
    'der Zeichen eines Strings zurück. Bei Arrays gibt sie die Anzahl der Elemente zurück. ' +
    '<pre><code>var sprachen = [];<br>' +
    'var l0 = sprachen.length;<br>' +
    'sprachen[0] = "C";<br>' +
    'var l1 = sprachen.length;<br>' +
    'sprachen[1] = "C++";<br>' +
    'var l2 = sprachen.length;</code></pre>' +
    'Das leere Array zu Anfang enthällt keine Elemente. <code>l0</code> ist also <code>0</code>. ' +
    'Nun füllen wir das Array nach und nach. <code>l1</code> und <code>l2</code> haben dann die Werte <code>1</code> und <code>2</code>. ' +
    'Beachte: Die Länge eines Arrays ist immer um 1 größer als der höchste Index des Arrays.',
        
  task: 'Schreibe ein Funktion <code>getLastElement</code>, die ein Array entgegennimmt und die das letzte Element des Arrays zurückgibt. ' +
    '<code>getLastElement([1, 2])</code> sollte <code>2</code> zurückgeben.',

  beforeTests: function() {
    if (typeof setFirstElement !== "undefined") {
      setFirstElement = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof getLastElement === 'function';
      var msg;
      if (ok) {
        msg = '<code>getLastElement</code> ist eine Funktion.';
      } else {
        msg = '<code>getLastElement</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = getLastElement.length === 1;
      var msg;
      if (ok) {
        msg = '<code>getLastElement</code> hat 1 Parameter.';
      } else {
        msg = '<code>getLastElement</code> hat nicht 1, sondern ' + getLastElement.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
   
    function() {
      var ok, msg, e;
      try {
        var result = getLastElement(["a", "b", "c"]);
        ok = result === "c";
        if (ok) {
          msg = '<code>getLastElement(["a", "b", "c"])</code> gibt <code>"c"</code> zurück.';
        } else {
          msg = '<code>getLastElement(["a", "b", "c"])</code> gibt nicht <code>"c"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>getLastElement(["a", "b", "c"])</code>.';
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
        var result = getLastElement([1, 2]);
        ok = result === 2;
        if (ok) {
          msg = '<code>getLastElement([1, 2])</code> gibt <code>2</code> zurück.';
        } else {
          msg = '<code>getLastElement([1, 2])</code> gibt nicht <code>2</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>getLastElement([1, 2])</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

  ]

});
