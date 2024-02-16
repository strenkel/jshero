if (typeof jshero === "undefined") {
  var jshero = {};
}

(function() {

  /**
   * Encapsulates 'eval' so that the code executed by 'eval' does not have any variables defined
   * here in its scope (except the global namespace 'jshero' and 'this'). 
   */
  const myEval = function(code) {
    return eval(code);
  }

  /**
   * User code evaluator.
   * Statefull singleton.
   */
  jshero.evaluator = (function() {

    // {String} User input.
    var userCode;

    /**
     * @param {String} code
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
      return myEval(userCodeWithTest);
    };

    /**
     * Test, if the user code is executable.
     * Throw an error if not.
     * Execute the user code with eval.
     */
    var evalParse = function() {
      myEval(userCode);
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

})();