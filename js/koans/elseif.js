jshero.koans.add({

  id: 'elseif',

  title: 'else if',

  lesson: 'Möchte man mehrere Fälle unterscheiden, kann man ein <code>if</code> mit beliebig vielen <code>else if</code> ' +
    'ergänzen. Zum Schluss kann bei Bedarf noch ein einzelnes <code>else</code> stehen.' +
    '<pre><code>var mitteilung;<br>if (betrag > 1000) {<br>  mitteilung = "Zu groß. Keine Auszahlung möglich!";<br>' +
    '} else if (betrag < 10) {<br>  mitteilung = "Zu klein. Keine Auszahlung möglich!";<br>} else {<br>' +
    '  mitteilung = "Der Betrag wird ausgezahlt!";<br>}</code></pre>' +
    'Zuerst wird geprüft, ob <code>betrag</code> größer <code>1000</code> ist. Ist das der Fall, wird die "Zu groß..."-Mitteilung ' +
    'gesetzt und der Code am Ende des gesamten Blocks fortgesetzt. Ist das nicht der Fall, wird die <code>else if</code>-Bedingung ' +
    'geprüft. Ist diese erfüllt, wird die "Zu klein..."-Mitteilung gesetzt und der Code am Ende des gesamten Blocks fortgesetzt. ' +
    'Erst wenn keine Bedingung erfüllt ist, wird der abschließenden <code>else</code>-Block ausgeführt.',
        
  task: 'Schreibe eine Funktion <code>addiereMitZuschlag</code>, die zwei Beträge mit Zuschlag addiert. Für jeden Betrag, der kleiner gleich <code>10</code> ' +
    'ist, beträgt der Zuschlag <code>1</code>. Für jeden Betrag, der größer <code>10</code> und kleiner gleich <code>20</code> ist, beträgt der Zuschlag <code>2</code>. ' +
    'Für jeden Betrag, der größer <code>20</code> ist, beträgt der Zuschlag 3. <code>addiereMitZuschlag(10, 30)</code> sollte <code>44</code> ergeben.',

  beforeTests: function() {
    if (typeof gleich !== "undefined") {
      gleich = undefined;
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
      var ok, msg, e;
      try {
        var result = addiereMitZuschlag(10, 10);
        ok = result === 22;
        if (ok) {
          msg = '<code>addiereMitZuschlag(10, 10)</code> ergibt <code>22</code>.';
        } else {
          msg = '<code>addiereMitZuschlag(10, 10)</code> ergibt nicht <code>22</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>addiereMitZuschlag(10, 10)</code>.';
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
        var result = addiereMitZuschlag(10, 11);
        ok = result === 24;
        if (ok) {
          msg = '<code>addiereMitZuschlag(10, 11)</code> ergibt <code>24</code>.';
        } else {
          msg = '<code>addiereMitZuschlag(10, 11)</code> ergibt nicht <code>24</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>addiereMitZuschlag(10, 11)</code>.';
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
        var result = addiereMitZuschlag(11, 10);
        ok = result === 24;
        if (ok) {
          msg = '<code>addiereMitZuschlag(11, 10)</code> ergibt <code>24</code>.';
        } else {
          msg = '<code>addiereMitZuschlag(11, 10)</code> ergibt nicht <code>24</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>addiereMitZuschlag(11, 10)</code>.';
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
        var result = addiereMitZuschlag(11, 11);
        ok = result === 26;
        if (ok) {
          msg = '<code>addiereMitZuschlag(11, 11)</code> ergibt <code>26</code>.';
        } else {
          msg = '<code>addiereMitZuschlag(11, 11)</code> ergibt nicht <code>26</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>addiereMitZuschlag(11, 11)</code>.';
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
        var result = addiereMitZuschlag(10, 21);
        ok = result === 35;
        if (ok) {
          msg = '<code>addiereMitZuschlag(10, 21)</code> ergibt <code>35</code>.';
        } else {
          msg = '<code>addiereMitZuschlag(10, 21)</code> ergibt nicht <code>35</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>addiereMitZuschlag(10, 21)</code>.';
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
        var result = addiereMitZuschlag(21, 10);
        ok = result === 35;
        if (ok) {
          msg = '<code>addiereMitZuschlag(21, 10)</code> ergibt <code>35</code>.';
        } else {
          msg = '<code>addiereMitZuschlag(21, 10)</code> ergibt nicht <code>35</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>addiereMitZuschlag(21, 10)</code>.';
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
