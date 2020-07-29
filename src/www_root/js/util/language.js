if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * Just include this script in your page before all other scripts.
 * It works because every page has a defined language.
 * If you change the language, you change the page and reload this script.
 */
jshero.language = {

  //Constant language string like "en", "de", ...
  LANGUAGE: document.URL.indexOf("/en/") === -1 ? "de" : "en"
};