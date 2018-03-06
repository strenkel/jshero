if (typeof jshero === "undefined") {
  var jshero = {};
}

// Note for hosting: local storage is regulated by the same origin police. http://www.jshero.net and http://jshero.net
// are different origins. The local storage under www.jshero.net and jshero.net will not be shared.
// Therefore (and due to other reasons) it is recomended to redirect non-www to www (or vice versa).
// See: https://stackoverflow.com/questions/12050590/redirect-non-www-to-www-in-htaccess

jshero.storage = (function(lang) {

  // --- handle solutions ---

  var setSolution = function(koan, solution) {
    localStorage.setItem(getSolutionKey(koan), solution);
    removeShot(koan);
  };

  var getSolution = function(koan) {
    return localStorage.getItem(getSolutionKey(koan));
  };

  var removeSolution = function(koan) {
    localStorage.removeItem(getSolutionKey(koan));
  };

  // --- handle shots ---

  var setShot = function(koan, solution) {
    if (solution) {
      localStorage.setItem(getShotKey(koan), solution);
    } else {
      removeShot(koan);
    }
  };

  var getShot = function(koan) {
    return localStorage.getItem(getShotKey(koan));
  };

  var removeShot = function(koan) {
    localStorage.removeItem(getShotKey(koan));
  };

  // --- handle playground ---

  var setPlaygroundCode = function(code) {
    localStorage.setItem(getPlaygroundKey(), code);
  };

  var getPlaygroundCode = function(code) {
    return localStorage.getItem(getPlaygroundKey());
  };

  var removePlaygroundCode = function(code) {
    localStorage.removeItem(getPlaygroundKey());
  };

  // --- private methods ---

  var getSolutionKey = function(koan) {
    return getKey("solution", koan.id);
  };

  var getShotKey = function(koan) {
    return getKey("shot", koan.id);
  };

  var getPlaygroundKey = function() {
    return getKey("playground");
  };

  /**
   *@param {String} prefix ; not null/undefined
   * @param {String} id; can be null/undefined
   */
  var getKey = function(prefix, id) {
    var key = prefix;
    if (lang !== "de") {
      key = key + "_" + lang;
    }
    if (id) {
      key = key + "_" + id;
    }
    return key;
  };

  return {
    setSolution: setSolution,
    getSolution: getSolution,
    removeSolution: removeSolution,
    setShot: setShot,
    getShot: getShot,
    removeShot: removeShot,
    setPlaygroundCode: setPlaygroundCode,
    getPlaygroundCode: getPlaygroundCode,
    removePlaygroundCode: removePlaygroundCode
  };

})(jshero.i18n.getLang());
