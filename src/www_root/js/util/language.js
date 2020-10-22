if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * Just include this script in every page before all other scripts.
 * Every page (except german pages) has a defined language identifier in their path.
 * Pages in german doesn't have a language identifier in their path.
 * If you change the language, you change the page and this script is reloaded.
 */
jshero.language = {

  // English pages contains '/en/' in their path.
  LANGUAGE: document.URL.indexOf("/en/") === -1 ? "de" : "en"
};