// Responsible for the opening and closing of the navigation (the menu).

(function() {

  var menu = document.getElementById("menu");
  var nav = document.getElementById("nav");
  nav.style.display = "none";
  
  menu.onclick = function() {
    if (menuIsClosed()) {
      menu.className = "close";
      nav.style.display = "block";
    } else {
      menu.className = "menu";
      nav.style.display = "none";
    }
  };

  var menuIsClosed = function() {
    return nav.style.display === "none";
  };


})();
