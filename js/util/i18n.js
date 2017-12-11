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
    isAFunction: "ist eine Funktion",
    isNotAFunction: "ist keine Funktion"
  };

  var dictionary_en = {
    writeCode: "Write your code in the input field.",
    noSyntaxError: "Reading your code successfully.",
    testError: "Test-Error! Correct the error and re-run the tests!",
    testsPassed: "All tests passed!",
    syntaxError: "Error reading your code!",
    unknownError: "Unknown test error!",
    goon: "Continue",
    isAFunction: "is a funktion",
    isNotAFunction: "is not a function"
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
