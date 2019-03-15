if (typeof jshero === "undefined") {
  var jshero = {};
}

// Note for hosting: local storage is regulated by the same origin police. http://www.jshero.net and http://jshero.net
// are different origins. The local storage under www.jshero.net and jshero.net will not be shared.
// Therefore (and due to other reasons) it is recomended to redirect non-www to www (or vice versa).
// See: https://stackoverflow.com/questions/12050590/redirect-non-www-to-www-in-htaccess

jshero.storage = (function(LANGUAGE) {

  // --- handle solutions ---

  /**
   * Save the correct solution.
   * 
   * @param {Koan} koan not null
   * @param {String} solution not null, not empty 
   */
  var setSolution = function(koan, solution) {
    setItem(getSolutionKey(koan), solution);
    removeShot(koan);
  };

  var getSolution = function(koan) {
    return getItem(getSolutionKey(koan));
  };

  // --- handle shots ---

  /**
   * Save a shot.
   * 
   * @param {Koan} koan not null
   * @param {String} shot can be null or empty 
   */
  var setShot = function(koan, shot) {
    if (!getSolution(koan)) {
      if (shot) {
        setItem(getShotKey(koan), shot);
      } else {
        removeShot(koan);
      }
    }
  };

  var getShot = function(koan) {
    return getItem(getShotKey(koan));
  };

  var removeShot = function(koan) {
    removeItem(getShotKey(koan));
  };

  // --- clear storage ---

  var clear = function() {
    localStorage.clear();
  };

  // --- handle playground ---

  var setPlaygroundCode = function(code) {
    setItem(getPlaygroundKey(), code);
  };

  var getPlaygroundCode = function(code) {
    return getItem(getPlaygroundKey());
  };

  var removePlaygroundCode = function(code) {
    removeItem(getPlaygroundKey());
  };

  // --- private methods ---

  /**
   * See MDN.
   */
  var localStorageAvailable = function() {
    try {
      var x = '__storage_test__';
      localStorage.setItem(x, x);
      localStorage.removeItem(x);
      return true;
    }
    catch (e) {
      return false;
    }
  };

  var checkLocalStorage = function() {
    if (!localStorageAvailable()) {
      var elm = document.getElementById("no-storage-warning");
      if (elm) {
        elm.style.display = "block";
      }
    }
  };

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
    if (LANGUAGE !== "de") {
      key = key + "_" + LANGUAGE;
    }
    if (id) {
      key = key + "_" + id;
    }
    return key;
  };

  var setItem = function(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // nothing to do
    }
  };

  var getItem = function(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return undefined;
    }
  };

  var removeItem = function(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      // nothing to do
    }
  };

  // Code
  checkLocalStorage();

  return {
    setSolution: setSolution,
    getSolution: getSolution,
    setShot: setShot,
    getShot: getShot,
    removeShot: removeShot,
    clear: clear,
    setPlaygroundCode: setPlaygroundCode,
    getPlaygroundCode: getPlaygroundCode,
    removePlaygroundCode: removePlaygroundCode,
  };

})(jshero.language.LANGUAGE);
