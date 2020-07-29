if (typeof jshero === "undefined") {
  var jshero = {};
}

// Note for hosting: local storage is regulated by the same origin police. https://www.jshero.net and https://jshero.net
// are different origins. The local storage under www.jshero.net and jshero.net will not be shared.
// Therefore (and due to other reasons) it is recomended to redirect non-www to www (or vice versa).
// See: https://stackoverflow.com/questions/12050590/redirect-non-www-to-www-in-htaccess

jshero.storage = (function(LANGUAGE) {

  // --- handle solutions ---

  /**
   * Save the correct solution.
   * 
   * @param {String} koanId not null
   * @param {String} solution not null, not empty 
   */
  var setSolution = function(koanId, solution) {
    setItem(getSolutionKey(koanId), solution);
    removeShot(koanId);
  };

  var getSolution = function(koanId) {
    return getItem(getSolutionKey(koanId));
  };

  // --- handle shots ---

  /**
   * Save a shot.
   * If shot is null or undefined, the shot under koanId will be removed.
   * 
   * @param {String} koanId not null
   * @param {String} shot can be null or empty 
   */
  var setShot = function(koanId, shot) {
    if (!getSolution(koanId)) {
      if (shot != null) {
        setItem(getShotKey(koanId), shot);
      } else {
        removeShot(koanId);
      }
    }
  };

  var getShot = function(koanId) {
    return getItem(getShotKey(koanId));
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

  var removeShot = function(koanId) {
    removeItem(getShotKey(koanId));
  };

  var getSolutionKey = function(koanId) {
    return getKey("solution", koanId);
  };

  var getShotKey = function(koanId) {
    return getKey("shot", koanId);
  };

  var getPlaygroundKey = function() {
    return getKey("playground");
  };

  /**
   * @param {String} prefix not null/undefined
   * @param {String} id can be null/undefined
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
    clear: clear,
    setPlaygroundCode: setPlaygroundCode,
    getPlaygroundCode: getPlaygroundCode,
    removePlaygroundCode: removePlaygroundCode,
  };

})(jshero.language.LANGUAGE);
