if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * User code evaluator.
 * Statefull singleton.
 */
jshero.evaluator = (function() {

  // {String} User input.
  var userCode;

  /**
   * @param {String} myCode
   */
  var init = function(code) {
    userCode = code;
    return this;
  };

  /**
   * Run testCode against the user code.
   * Returns the result of testCode. 
   * 
   * @param {String} testCode
   */
  var evalTest = function(testCode) {
    var userCodeWithTest = userCode + ";\n" + testCode;
    return eval(userCodeWithTest);
  };

  /**
   * Test, if the user code is executable.
   * Throw an error if not.
   * Execute the user code with eval.
   */
  var evalParse = function() {
    eval(userCode);
  };

  /**
   * Test, if the user code is the specified string.
   * The user code can use ", ' or `.
   * 
   * @param {String} myString 
   */
  var equalsString = function(myString) {
    return userCode === '"' + myString + '"'
      || userCode === "'" + myString + "'"
      || userCode === "`" + myString + "`";
  };

  /**
   * Test, if the user code is identical with the passed value.
   * 
   * @param {String} myValue 
   */
  var equalsValue = function(myValue) {
    return userCode === myValue;
  };

  var getCode = function() {
    return userCode;
  };

  return {
    init: init,
    evalTest: evalTest,
    evalParse: evalParse,
    equalsString: equalsString,
    equalsValue: equalsValue,
    getCode: getCode
  };

})();