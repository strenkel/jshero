if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * For usuage in koan pages. These pages are build from main.html or main-dom.html!
 * 
 * @param {String} pageUrl e.g. https://www.jshero.net/koans/var.html
 * @param {String} nextPageUrl e.g. var2.html 
 */
jshero.actualKoan = (function(pageUrl, nextPageUrl) {

  "use strict";

  const id = pageUrl.split("/").pop().split(".")[0];

  return Object.freeze({
    id: id,
    nextPageUrl: nextPageUrl
  });

})(window.location.href, document.getElementById("next-button").href);