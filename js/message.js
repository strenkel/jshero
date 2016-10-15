if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.message = (function() {

  var messageRoot = document.getElementById('messages');

  var log = function(message, type) {
    var paragraph = document.createElement('p');
    paragraph.innerHTML =  message;
    paragraph.className = type ? 'green' : 'red';
    messageRoot.appendChild(paragraph);
  };

  var clear = function() {
    messageRoot.innerHTML = null;
  };

  return {
    log: log,
    clear: clear
  };

})();
