// Run from JS Hero root: node build/build.js
// koans.js has to be build before
// All pathes relative to JS Hero root directory
const fs = require('fs');
const ejs = require('ejs');
const koans = require("../www/js/koans.js");

ejs.renderFile("src/html/success.html", { koans: koans.getKoans() }, function(err, successHtml) {
  if (err) throw err;
  fs.writeFile("www/success.html", successHtml, function(err) {
    if (err) throw err;
    console.log("Build success.html");
  });
});





