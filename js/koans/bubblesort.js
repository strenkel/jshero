(function(ArrayUtil) {

jshero.koans.add({

  id: 'bubblesort',

  title: 'Bubblesort',

  lesson: 'Häufig möchte man Daten der Größe nach sortieren. Hierfür gibt es verschiedene Sortierverfahren. Ein bekanntes, ' +
    'einfaches, aber auch langsames Verfahren ist <a href="https://de.wikipedia.org/wiki/Bubblesort" target="_blank">Bubblesort</a>. Liegen die zu sortierenden Daten in einem Array der Länge n vor ' +
    'und sollen die Daten aufsteigend sortiert werden, so wird in einer sogenannten Bubble-Phase das Array vom 0 &apos;ten bis zum n-1 &apos;ten Element durchlaufen. ' +
    'Dabei wird in jedem Schritt das aktuelle Element an der Stelle i mit dem nachfolgenden Element an der Stelle i+1 verglichen. Ist das Element an der Stelle i größer als das ' +
    'Element an der Stelle i+1, so vertauscht man beide Elemente. Hat man so eine Bubble-Phase durchlaufen, ist das größte Element am Ende des Arrays angekommen. ' +
    'Wiederholt man nun eine Bubble-Phase, so steht auch das zweitgrößte Element an der richtigen Stelle. Hat man n-1 Bubble-Phasen durchlaufen, ist das komplette Array sortiert. ' +
    'Um ein Array mit 4 Zahlen zu sortieren, benötigt man also drei Bubble-Phasen:' +
    '<pre><code>' +
    'Erste Bubble-Phase:<br>' +
    '[4, 2, 3, 1] -> [2, 4, 3, 1] Das erste Element wird mit dem zweiten verglichen. Sie werden vertauscht, da 4>2 ist.<br>' +
    '[2, 4, 3, 1] -> [2, 3, 4, 1] Das zweite Element wird mit dem dritten verglichen. Sie werden vertauscht, da 4>3 ist.<br>' +
    '[2, 3, 4, 1] -> [2, 3, 1, 4] Das dritte Element wird mit dem vierten verglichen. Sie werden vertauscht, da 4>1 ist.<br>' +
    'Das größte Element ist an die richtige Stelle geblubbert.<br><br>' +
    'Zweite Bubble-Phase:<br>' +
    '[2, 3, 1, 4] -> [2, 3, 1, 4] Das erste Element wird mit dem zweiten verglichen. Sie werden nicht vertauscht, da 2<3 ist.<br>' +
    '[2, 3, 1, 4] -> [2, 1, 3, 4] Das zweite Element wird mit dem dritten verglichen. Sie werden vertauscht, da 3>1 ist.<br>' +
    '[2, 1, 3, 4] -> [2, 1, 3, 4] Das dritte Element wird mit dem vierten verglichen. Sie werden nicht vertauscht, da 3<4 ist.<br>' +
    'Das zweitgrößte Element ist an die richtige Stelle geblubbert.<br><br>' +
    'Dritte Bubble-Phase:<br>' +
    '[2, 1, 3, 4] -> [1, 2, 3, 4] Das erste Element wird mit dem zweiten verglichen. Sie werden vertauscht, da 2>1 ist.<br>' +
    '[1, 2, 3, 4] -> [1, 2, 3, 4] Das zweite Element wird mit dem dritten verglichen. Sie werden nicht vertauscht, da 2<3 ist.<br>' +
    '[1, 2, 3, 4] -> [1, 2, 3, 4] Das dritte Element wird mit dem vierten verglichen. Sie werden vertauscht, da 3<4 ist.<br>' +
    'Das drittgrößte Element ist an die richtige Stelle geblubbert.<br>' +
    'Damit ist automatisch auch das kleinste Element an der richten Stelle.<br>' +
    'Das Array ist aufsteigend sortiert.' +
    '</code></pre>',
        
  task: 'Schreibe eine Funktion <code>sort</code>, die ein mit Zahlen gefülltes Array entgegennimmt und die diese Zahlen aufsteigend sortiert als Array zurückgibt. ' +
    'Wird ein leeres Array übergeben, so soll auch ein leeres Array zurückgegeben werden. <code>sort([4,&nbsp;2,&nbsp;3,&nbsp;1])</code> sollte <code>[1,&nbsp;2,&nbsp;3,&nbsp;4]</code> ergeben.',

  beforeTests: function() {
    if (typeof sort !== "undefined") {
      sort = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof sort === 'function';
      var msg;
      if (ok) {
        msg = '<code>sort</code> ist eine Funktion.';
      } else {
        msg = '<code>sort</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = sort.length === 1;
      var msg;
      if (ok) {
        msg = '<code>sort</code> hat 1 Parameter.';
      } else {
        msg = '<code>sort</code> hat nicht 1, sondern ' + sort.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

   function() {
      var ok, msg, e;
      try {
        var result = sort([]);
        ok = ArrayUtil.isEqual(result, []);
        if (ok) {
          msg = '<code>sort([])</code> gibt <code>[]</code> zurück.';
        } else {
          msg = '<code>sort([])</code> gibt nicht <code>[]</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>sort([])</code>.';
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
        var result = sort([1]);
        ok = ArrayUtil.isEqual(result, [1]);
        if (ok) {
          msg = '<code>sort([1])</code> gibt <code>[1]</code> zurück.';
        } else {
          msg = '<code>sort([1])</code> gibt nicht <code>[1]</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>sort([1])</code>.';
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
        var result = sort([2, 1]);
        ok = ArrayUtil.isEqual(result, [1, 2]);
        if (ok) {
          msg = '<code>sort([2, 1])</code> gibt <code>[1, 2]</code> zurück.';
        } else {
          msg = '<code>sort([2, 1])</code> gibt nicht <code>[1, 2]</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>sort([2, 1])</code>.';
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
        var result = sort([2, 3, 1]);
        ok = ArrayUtil.isEqual(result, [1, 2, 3]);
        if (ok) {
          msg = '<code>sort([2, 3, 1])</code> gibt <code>[1, 2, 3]</code> zurück.';
        } else {
          msg = '<code>sort([2, 3, 1])</code> gibt nicht <code>[1, 2, 3]</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>sort([2, 3, 1])</code>.';
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
        var result = sort([5, 4, 3, 2, 1]);
        ok = ArrayUtil.isEqual(result, [1, 2, 3, 4, 5]);
        if (ok) {
          msg = '<code>sort([5, 4, 3, 2, 1])</code> gibt <code>[1, 2, 3, 4, 5]</code> zurück.';
        } else {
          msg = '<code>sort([5, 4, 3, 2, 1])</code> gibt nicht <code>[1, 2, 3, 4, 5]</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>sort([5, 4, 3, 2, 1])</code>.';
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
