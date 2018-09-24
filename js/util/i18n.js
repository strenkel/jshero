if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * Singleton.
 */
jshero.i18n = (function() {

  var dic;

  var dic_de = {

    hint: "Tipp",
    solution: "Lösung",
    writeCode: "Schreibe deinen Code in das Eingabefeld.",
    noSyntaxError: "Code erfolgreich eingelesen.",
    testError: "Test-Fehler! Korrigiere den Fehler und führe die Tests erneut aus!",
    testsPassed: "Alle Tests bestanden!",
    syntaxError: "Fehler beim Einlesen des Codes!",
    unknownError: "Unbekannter Testfehler!",
    goon: "Weiter",
    line: "Zeile",
    column: "Spalte",
    isAFunction: "ist eine Funktion",
    isNotAFunction: "ist keine Funktion",
    errorAtCallOf: "Fehler beim Aufruf von",
    endlessLoopOnRead: "Es kommt zu einer Endlosschleife. Fehler beim Einlesen des Codes!",

    endlessLoopOnTest: "Es kommt zu einer Endlosschleife. Fehler beim Testen des Codes!",
    functionReturns: "<code>%0</code> gibt <code>%1</code> zurück.",
    functionNotReturns: "<code>%0</code> gibt nicht <code>%1</code>, sondern <code>%2</code> zurück.",
    functionReturnsDate: "<code>%0</code> gibt den %1 zurück.",
    functionNotReturnsDate: "<code>%0</code> gibt nicht den %1, sondern den %2 zurück.",
    correctNumOfParam: "<code>%0</code> hat %1 Parameter.",
    wrongNumOfParam: "<code>%0</code> hat nicht %1 Parameter, sondern %2.",
    varHasValue: "<code>%0</code> hat einen Wert.",
    varHasNoValue: "<code>%0</code> hat keinen Wert.",
    varHasValueOf: "<code>%0</code> hat den Wert <code>%1</code>.",
    varHasWrongValue: "<code>%0</code> hat nicht den erwarteten Wert <code>%1</code>, sondern den Wert <code>%2</code>.",
    functionReturnsAnArray: "<code>%0</code> gibt ein Array zurück.",
    functionNotReturnsAnArray: "<code>%0</code> gibt kein Array zurück.",
    functionReturnsADate: "<code>%0</code> gibt ein Date zurück.",
    functionNotReturnsADate: "<code>%0</code> gibt kein Date zurück."
  };

  var dic_en = {

    hint: "Hint",
    solution: "Solution",
    writeCode: "Write your code in the input field.",
    noSyntaxError: "Reading your code successfully.",
    testError: "Test-Error! Correct the error and re-run the tests!",
    testsPassed: "All tests passed!",
    syntaxError: "Error reading your code!",
    unknownError: "Unknown test error!",
    goon: "Continue",
    line: "line",
    column: "column",
    isAFunction: "is a function",
    isNotAFunction: "is not a function",
    errorAtCallOf: "Error on call of",
    endlessLoopOnRead: "Endless loop. Error reading your code!",

    endlessLoopOnTest: "Endless loop. Error testing your code!",
    functionReturns: "<code>%0</code> returns <code>%1</code>.",
    functionNotReturns: "<code>%0</code> does not return <code>%1</code>, but <code>%2</code>.",
    functionReturnsDate: "<code>%0</code> returns %1.",
    functionNotReturnsDate: "<code>%0</code> does not return %1, but %2 zurück.",
    correctNumOfParam: "<code>%0</code> has %1 parameter.",
    wrongNumOfParam: "<code>%0</code> has not %1, but %2 parameter.",
    varHasValue: "<code>%0</code> has a value.",
    varHasNoValue: "<code>%0</code> has no value.",
    varHasValueOf: "<code>%0</code> has value of <code>%1</code>.",
    varHasWrongValue: "<code>%0</code> has not expected value <code>%1</code>, but the value <code>%2</code>.",
    functionReturnsAnArray: "<code>%0</code> returns an Array.",
    functionNotReturnsAnArray: "<code>%0</code> does not return an Array.",
    functionReturnsADate: "<code>%0</code> returns a Date.",
    functionNotReturnsADate: "<code>%0</code> does not return a Date."
  };

  dic = dic_en; // default

  /**
     * @param {String} lang, e.g. "de", "en" 
     */
  var setLanguage = function(language) {
    if (language === "de") {
      dic = dic_de;
    } else {
      dic = dic_en;
    }
  };

  var get = function(key) {
    return dic[key];
  };

  return {
    setLanguage: setLanguage,
    get: get
  };

})();
