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

  return {
    assert_de_isFunction: assert_de_isFunction,
    assert_de_functionReturns: assert_de_functionReturns,
  };

})();
