(function(array) {

jshero.koans.add({

  id: 'arraypush',

  title: 'Array: shift() und push()',

  lesson: 'Arrays besitzen eine Reihe von Methoden. Zwei dieser Methoden sind <code>shift</code> und <code>push</code>. ' +
    'Zur Erinnerung: Methoden sind Funktionen, die auf einem Objekt, hier einem Array, ausgeführt werden. Methoden werden mit einem Punkt ' +
    'an das Objekt angehängt. Wie bei Funktionen üblich folgt dem Methodennamen die runden Klammern, ggf. gefüllt mit Parametern. ' +
    '<code>shift</code> hat keine Parameter und verschiebt die Elemente eines Arrays nach links. ' +
    'Das 1te Element wird zum 0ten, das 2te zum 1ten, das 3te zum 2ten, usw. ' +
    'Das 0te Element wird aus dem Array entfernt und zurückgegeben. Nach dem <code>shift</code> hat das Array ein Element weniger.' +
    '<pre><code>var sprachen = ["C", "Java", "JavaScript"];<br>' +
    'var naechsteSprache = sprachen.shift();</code></pre>' +
    'Das Array <code>sprachen</code> wird mit 3 Programmiersprachen angelegt. Nach dem <code>shift</code> enthält <code>sprachen</code> ' +
    'nur noch 2 Elemente, nämlich <code>["Java", "JavaScript"]</code>. Der Wert <code>"C"</code> ist in der Variablen ' +
    '<code>naechsteSprache</code> gelandet.<br>' +
    'Mit der häufig verwendeten Methode <code>push</code> fügt man dem Array ein neues Element hinzu. ' +
    'Das neue Element wird als Parameter übergeben und an das Ende des Arrays gehängt.' +
    '<pre><code>var sprachen = [];<br>' +
    'sprachen.push("C");<br>' +
    'sprachen.push("Java");<br>' +
    'sprachen.push("JavaScript");</code></pre>' +
    'Hier wird ein leeres Array nacheinander mit den aufgeführten Werten gefüllt. Am Ende erhalten wir das Array ' +
    '<code>["C", "Java", "JavaScript"]</code>. Wir hatten gesehen, dass man ein Array auch per Index füllen kann. ' +
    '<code>sprachen[sprachen.length] = "PHP"</code> ist dasselbe wie <code>sprachen.push("PHP")</code>. Doch schon ' +
    'an der Länge des Codes sieht man, dass die Variante mit <code>push</code> eleganter ist.',
        
  task: 'Schreibe eine Funktion <code>rotiere</code>, die die Elemente eines Arrays rotiert. Alle Elemente des Arrays sollen um eine ' +
    'Position nach links verschoben werden. Das 0te Element soll ans Ende des Arrays gestellt werden. Das rotierte Array soll zurückgegeben werden. ' +
    '<code>rotiere(["a", "b", "c"])</code> sollte <code>["b", "c", "a"]</code> ergeben.',

  beforeTests: function() {
    if (typeof rotiere !== "undefined") {
      rotiere = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof rotiere === 'function';
      var msg;
      if (ok) {
        msg = '<code>rotiere</code> ist eine Funktion.';
      } else {
        msg = '<code>rotiere</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = rotiere.length === 1;
      var msg;
      if (ok) {
        msg = '<code>rotiere</code> hat 1 Parameter.';
      } else {
        msg = '<code>rotiere</code> hat nicht 1, sondern ' + rotiere.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = rotiere([1, 2]);
        ok = array.isEqual(result, [2, 1]);
        if (ok) {
          msg = '<code>rotiere([1, 2])</code> gibt <code>[2, 1]</code> zurück.';
        } else {
          msg = '<code>rotiere([1, 2])</code> gibt nicht <code>[2, 1]</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>rotiere([1, 2])</code>.';
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
        var result = rotiere(["a", "b", "c"]);
        ok = array.isEqual(result, ["b", "c", "a"]);
        if (ok) {
          msg = '<code>rotiere(["a", "b", "c"])</code> gibt <code>["b", "c", "a"]</code> zurück.';
        } else {
          msg = '<code>rotiere(["a", "b", "c"])</code> gibt nicht <code>["b", "c", "a"]</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>rotiere(["a", "b", "c"])</code>.';
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

})(jshero.array);
