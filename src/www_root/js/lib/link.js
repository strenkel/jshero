if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.link = (function() {

  const countClick = function(id) {
    fetch(`https://jshero.net/api/count/${id}`)
      .catch(() => {}); // Nothing to catch.
  };

  return {
    countClick: countClick
  }


})();
  