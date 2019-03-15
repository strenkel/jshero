// Run from JS Hero root: node build/build.js
// koans.js has to be build before
// All pathes relative to JS Hero root directory
const fs = require('fs');
const ejs = require('ejs');
const koansDe = require("../www/js/koans.js");
const koansEn = require("../www/en/js/koans.js");

// build de/success.html
ejs.renderFile("src/html/de/success.html", { koans: koansDe.getKoans() }, function(err, successHtml) {
  if (err) throw err;
  fs.writeFile("www/success.html", successHtml, function(err) {
    if (err) throw err;
    console.log("Build success.html (de)");
  });
});

// build en/success.html
ejs.renderFile("src/html/en/success.html", { koans: koansEn.getKoans() }, function(err, successHtml) {
  if (err) throw err;
  fs.writeFile("www/en/success.html", successHtml, function(err) {
    if (err) throw err;
    console.log("Build success.html (en)");
  });
});





