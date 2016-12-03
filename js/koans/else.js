jshero.koans.add({

  id: 'else',

  title: 'if ... else',

  lesson: 'Möchte man, dass ein Codeblock nur dann ausgeführt wird, wenn eine <code>if</code>-Bedingung nicht erfüllt ist, verwendet man ' +
    'zusätzlich zum <code>if</code> ein <code>else</code> (engl.: sonst).' +
    '<pre><code>var mitteilung;<br>if (betrag > 1000) {<br>  mitteilung = "Keine Auszahlung möglich!";<br>} else {<br>' +
    '  mitteilung = "Der Betrag wird ausgezahlt!";<br>}</code></pre>' +
    'Je nachdem, ob <code>betrag</code> größer oder kleiner <code>1000</code> ist, wird entweder der <code>if</code>-Zweig oder ' +
    'der <code>else</code>-Zweig ausgeführt.',
        
  task: 'Schreibe eine Funktion <code>addiereMitZuschlag</code>, die zwei Beträge mit Zuschlag addiert. Für jeden Betrag, der kleiner gleich <code>10</code> ' +
    'ist, beträgt der Zuschlag <code>1</code>. Für jeden Betrag, der größer <code>10</code> ist, beträgt der Zuschlag <code>2</code>. ' +
    '<code>addiereMitZuschlag(10, 20)</code> sollte <code>33</code> ergeben.',

  beforeTests: function() {
    if (typeof addiereMitZuschlag !== "undefined") {
      addiereMitZuschlag = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof addiereMitZuschlag === 'function';
      var msg;
      if (ok) {
        msg = '<code>addiereMitZuschlag</code> ist eine Funktion.';
      } else {
        msg = '<code>addiereMitZuschlag</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = addiereMitZuschlag.length === 2;
      var msg;
      if (ok) {
        msg = '<code>addiereMitZuschlag</code> hat 2 Parameter.';
      } else {
        msg = '<code>addiereMitZuschlag</code> hat nicht 2, sondern ' + addiereMitZuschlag.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg;
      try {
        var result = addiereMitZuschlag(10, 10);
        ok = result === 22;
        if (ok) {
          msg = '<code>addiereMitZuschlag(10, 10)</code> ergibt <code>22</code>.';
        } else {
          msg = '<code>addiereMitZuschlag(10, 10)</code> ergibt nicht <code>22</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>addiereMitZuschlag(10, 10)</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = addiereMitZuschlag(10, 11);
        ok = result === 24;
        if (ok) {
          msg = '<code>addiereMitZuschlag(10, 11)</code> ergibt <code>24</code>.';
        } else {
          msg = '<code>addiereMitZuschlag(10, 11)</code> ergibt nicht <code>24</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>addiereMitZuschlag(10, 11)</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = addiereMitZuschlag(11, 10);
        ok = result === 24;
        if (ok) {
          msg = '<code>addiereMitZuschlag(11, 10)</code> ergibt <code>24</code>.';
        } else {
          msg = '<code>addiereMitZuschlag(11, 10)</code> ergibt nicht <code>24</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>addiereMitZuschlag(11, 10)</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = addiereMitZuschlag(11, 11);
        ok = result === 26;
        if (ok) {
          msg = '<code>addiereMitZuschlag(11, 11)</code> ergibt <code>26</code>.';
        } else {
          msg = '<code>addiereMitZuschlag(11, 11)</code> ergibt nicht <code>26</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>addiereMitZuschlag(11, 11)</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }

  ]

});
