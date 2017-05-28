jshero.koans.add({

  id: 'bubblesort',

  title: 'Bubblesort',

  lesson: '',
        
  task: 'Schreibe ein Funktion <code>sort</code>, die ein mit Zahlen gefülltes Array entgegennimmt und die diese Zahlen aufsteigend sortiert als Array zurückgibt. ' +
    '<code>sort([4,&nbsp;2,&nbsp;3,&nbsp;1])</code> sollte <code>[1,&nbsp;2,&nbsp;3,&nbsp;4]</code> ergeben.',

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
        var result = sort([3, 2, 1]);
        ok = Array.isArray(result) && result.length === 3 && result[0] === 1 && result[1] === 2 && result[2] === 3;
        if (ok) {
          msg = '<code>sort([3, 2, 1])</code> gibt <code>[1, 2, 3]</code> zurück.';
        } else {
          msg = '<code>sort([3, 2, 1])</code> gibt nicht <code>[1, 2, 3]</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>sort([3, 2, 1])</code>.';
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
        ok = Array.isArray(result) && result.length === 3 && result[0] === 1 && result[1] === 2 && result[2] === 3;
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
    }

  ]

});
