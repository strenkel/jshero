// Ist fuer das Oeffnen und Schliessen der Navigation (das Menue) zustaendig.

(function() {

  var nav = document.getElementById("nav");
  nav.style.display = "none";
  
  document.getElementById("menu").onclick = function() {
    if (menuIsClosed()) {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  };

  var menuIsClosed = function() {
    return nav.style.display === "none";
  };


})();
