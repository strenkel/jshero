(function(util) {

  if (util.isPhoneGap()) {
    document.getElementById("playstore-link").style.display = "none";
  } else {
    document.getElementById("webapp-link").style.display = "none";
  }


})(jshero.util);
