// Responsible for the opening and closing of the navigation (the menu).
// Open menu on click on with Hamburger menu.
// Close menu on click on page.

(function() {

  var menu = document.getElementById("menu");
  var nav = document.getElementById("nav");

  nav.style.display = "none";

  var openMenu = function() {
    menu.className = "close";
    nav.style.display = "block";
    setTimeout(function() {
      document.body.onclick = closeMenu;
    }, 0);
    menu.onclick = undefined;
  };

  var closeMenu = function() {
    menu.className = "menu";
    nav.style.display = "none";
    setTimeout(function() {
      menu.onclick = openMenu;
    }, 0);
    document.body.onclick = undefined;
  };

  menu.onclick = openMenu;

})();
