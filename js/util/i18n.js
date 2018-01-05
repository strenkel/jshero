if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.i18n = (function() {

  var dictionary_de = {
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

    functionReturns: "<code>%0</code> gibt <code>%1</code> zurück.",
    functionNotReturns: "<code>%0</code> gibt nicht <code>%1</code>, sondern <code>%2</code> zurück.",
    correctNumOfParam: "<code>%0</code> hat %1 Parameter.",
    wrongNumOfParam: "<code>%0</code> hat nicht %1 Parameter, sondern %2.",
    varHasValue: "<code>%0</code> hat einen Wert.",
    varHasNoValue: "<code>%0</code> hat keinen Wert.",
    varHasValueOf: "<code>%0</code> hat den Wert <code>%1</code>.",
    varHasWrongValue: "<code>%0</code> hat nicht den erwarteten Wert <code>%1</code>, sondern den Wert <code>%2</code>.",
    functionReturnsType: "<code>%0</code> gibt ein <code>%1</code>-Objekt zurück.",
    functionReturnsWrongType: "<code>%0</code> gibt kein <code>%1</code>-Objekt, sondern <code>%2</code> zurück."
  };

  var dictionary_en = {
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

    functionReturns: "<code>%0</code> returns <code>%1</code>.",
    functionNotReturns: "<code>%0</code> does not return <code>%1</code>, but <code>%2</code>.",
    correctNumOfParam: "<code>%0</code> has %1 parameter.",
    wrongNumOfParam: "<code>%0</code> has not %1, but %2 parameter.",
    varHasValue: "<code>%0</code> has a value.",
    varHasNoValue: "<code>%0</code> has no value.",
    varHasValueOf: "<code>%0</code> has value of <code>%1</code>.",
    varHasWrongValue: "<code>%0</code> has not expected value <code>%1</code>, but the value <code>%2</code>.",
    functionReturnsType: "<code>%0</code> returns <code>%1</code>-object.",
    functionReturnsWrongType: "<code>%0</code> does not return <code>%1</code>-object, but  <code>%2</code>."
  };

  var getLang = function() {
    return document.URL.indexOf("/en/") === -1 ? "de" : "en";
  };

  var get = function(key) {
    return getDictionary()[key];
  };

  var getDictionary = function() {
    if (getLang() === "de") {
      return dictionary_de;
    }
    return dictionary_en;
  };

  return {
    getLang: getLang,
    get: get
  };

})();
