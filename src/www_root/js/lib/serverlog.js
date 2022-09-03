if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.serverlog = (function() {

  /**
   * Send a POST to the server just to log an action (e.g. click on a link).
   * The server response is irrelevant.
   * 
   * @param {string} id 
   */
  const log = function(id) {
    navigator.sendBeacon(`https://www.jshero.net/api/log/${id}`);
  };

  return {
    log: log
  }

})();
  