if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * User code evaluator.
 * Statefull singleton.
 */
jshero.evaluator = (function() {

  var userCode;

  /**
   * @param {String} myCode
   */
  var init = function(code) {
    userCode = code;
    return this;
  };

  /**
   * @param {String} testCode
   */
  var evalTest = function(testCode) {
    var userCodeWithTest = userCode + ";\n" + testCode;
    return eval(userCodeWithTest);
  };

  /**
   * Test, if the user code is executable.
   * Throw an error if not.
   */
  var evalParse = function() {
    eval(userCode);
  };

  var equalsString = function(myString) {
    return userCode === '"' + myString + '"'
      || userCode === "'" + myString + "'"
      || userCode === "`" + myString + "`";
  };

  var getCode = function() {
    return userCode;
  };

  return {
    init: init,
    evalTest: evalTest,
    evalParse: evalParse,
    equalsString: equalsString,
    getCode: getCode
  };

})();