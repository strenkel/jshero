if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.link = (function() {

  const countClick = function(id) {
    navigator.sendBeacon(`https://www.jshero.net/api/count/${id}`);
    // fetch(`https://www.jshero.net/api/count/${id}`)
    //   .catch(() => {}); // Nothing to catch.
  };

  return {
    countClick: countClick
  }


})();
  