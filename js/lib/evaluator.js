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
   * @param {String} testCode
   */
  var evalTest = function(testCode) {
    var userCodeWithTest = userCode + ";\n" + testCode;
    return eval(userCodeWithTest);
  };

  var evalNumOfCalls = function(fCall, fToCall) {
    var numOfCallsCode = "var numOfCalls=0; var originalFToCall=" + fToCall + ";" +
      fToCall + "=function() {numOfCalls++; originalFToCall.apply(null,arguments);};";
    var userCodeWithCallNumber = userCode + ";\n" + numOfCallsCode + fCall + ";numOfCalls;"
    return eval(userCodeWithCallNumber);
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
    evalNumOfCalls: evalNumOfCalls,
    equalsString: equalsString,
    equalsValue: equalsValue,
    getCode: getCode
  };

})();