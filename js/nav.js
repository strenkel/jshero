(function() {

  var nav = $("#nav");
  
  $("#menu").click(function() {
    if (menuIsClosed()) {
      nav.show();
    } else {
      nav.hide();
    }
  });

  var menuIsClosed = function() {
    return nav.css("display") === "none";
  };


})();
