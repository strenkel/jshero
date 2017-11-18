jshero.koans.add({

  id: 'array2',

  title: 'Array-Elemente lesen',

  lesson: 'Die Elemente eines Arrays werden mit einem Index beginnend mit 0 ausgelesen. ' +
    '<pre><code>var sprachen = ["C", "C++", "Java", "JavaScript"];<br>' +
    'var c = sprachen[0];<br>' +
    'var cPlusPlus = sprachen[1];<br>' +
    'var java = sprachen[2];<br>' +
    'var javaScript = sprachen[3];',

  task: 'Schreibe eine Funktion <code>getFirstElement</code>, die ein Array entgegennimmt und die das erste Element des Arrays zurückgibt. ' +
    '<code>getFirstElement([1, 2])</code> sollte <code>1</code> zurückgeben.',

  beforeTests: function() {
    if (typeof getFirstElement !== "undefined") {
      getFirstElement = undefined;
    }
  },

  tests: [

    function() {
      var ok = typeof getFirstElement === 'function';
      var msg;
      if (ok) {
        msg = '<code>getFirstElement</code> ist eine Funktion.';
      } else {
        msg = '<code>getFirstElement</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = getFirstElement.length === 1;
      var msg;
      if (ok) {
        msg = '<code>getFirstElement</code> hat 1 Parameter.';
      } else {
        msg = '<code>getFirstElement</code> hat nicht 1, sondern ' + getFirstElement.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = getFirstElement([1, 2]);
        ok = result === 1;
        if (ok) {
          msg = '<code>getFirstElement([1, 2])</code> gibt <code>1</code> zurück.';
        } else {
          msg = '<code>getFirstElement([1, 2])</code> gibt nicht <code>1</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>getFirstElement([1, 2])</code>.';
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
        var result = getFirstElement(["Hänsel", "Gretel"]);
        ok = result === "Hänsel";
        if (ok) {
          msg = '<code>getFirstElement(["Hänsel", "Gretel"])</code> gibt <code>"Hänsel"</code> zurück.';
        } else {
          msg = '<code>getFirstElement(["Hänsel", "Gretel"])</code> gibt nicht <code>"Hänsel"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>getFirstElement(["Hänsel", "Gretel"])</code>.';
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
