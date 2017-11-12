if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * Contains frequently used test cases.
 */
jshero.testutil = (function() {

  /**
   * Example usage:
   *
   * jshero.testutil.assert_de_isFunction(a)
   *
   * We expect a function named "a".
   */
  var assert_de_isFunction = function(f) {
      var ok = typeof f === 'function';
      var msg;
      if (ok) {
        msg = '<code>' + f.name + '</code> ist eine Funktion.';
      } else {
        msg = '<code>' + f.name + '</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    };

    /**
     * We expect that the function f returns the value expectedReturnValue
     */
    var assert_de_functionReturns = function(f, expectedReturnValue) {
      var ok, msg, e;
      try {
        var result = f();
        ok = result === expectedReturnValue;
        if (ok) {
          msg = '<code>' + f.name + '()</code> gibt <code>"' + expectedReturnValue + '"</code> zurück.';
        } else {
          msg = '<code>' + f.name + '()</code> gibt nicht <code>"' + expectedReturnValue + '"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>' + f.name + '()</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    };

    /**
     * Bei der Variable v müssen wir noch mitgeben wie sie heißt (name)
     */
    var assert_de_variableDefined = function(v, name) {
      var ok = typeof v !== 'undefined';
      console.log(v);
      var msg;
      if (ok) {
        msg = '<code>' + name + '</code> hat einen Wert.';
      } else {
        msg = '<code>' + name + '</code> hat keinen Wert.';
      }
      return {
        ok: ok,
        msg: msg
      };
    };

    var assert_de_variableHasValue = function(v, name, expValue) {
      var ok = begruessung === expValue;
      var msg;
      if (ok) {
        msg = '<code>' + name + '</code> hat den Wert <code>' + JSON.stringify(v) + '</code>.';
      } else {
        msg = '<code>' + name + '</code> hat nicht den Wert <code>"' + expValue + '"</code>, sondern den Wert <code>' + JSON.stringify(v) + '</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }

  return {
    assert_de_isFunction: assert_de_isFunction,
    assert_de_functionReturns: assert_de_functionReturns,
    assert_de_variableDefined: assert_de_variableDefined,
    assert_de_variableHasValue: assert_de_variableHasValue
  };

})();
