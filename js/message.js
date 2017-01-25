if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.message = (function() {

  var messageRoot = document.getElementById('messages');

  var log = function(message, type, e) {
    var paragraph = document.createElement('p');
    var errormessage = "";
    if (e) {
      errormessage = e + " (Zeile: " + e.lineNumber + ", Reihe: " + e.columnNumber + "). ";
    }
    paragraph.innerHTML = errormessage + message;
    paragraph.className = type ? 'green' : 'red';
    messageRoot.appendChild(paragraph);
  };

  var goto = function(url) {
    var link = document.createElement('a');
    link.href = url;
    link.innerHTML = "Weiter";
    link.className = "link-button";
    messageRoot.appendChild(link);
  };

  var clear = function() {
    messageRoot.innerHTML = null;
  };

  return {
    log: log,
    goto: goto,
    clear: clear
  };

})();
