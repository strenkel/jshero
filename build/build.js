// Render all html files with EJS.
// Run from JS Hero root: node build/build.js
// build.sh has to be run before.
// Require pathes relative to build directory.
// Other pathes relative to JS Hero root directory.
const fs = require('fs');
const ejs = require('ejs');
const koansCoreDe = require("../src/tmp/koans-core-de.js").getKoans();
const koansDomDe = require("../src/tmp/koans-dom-de.js").getKoans();
const koansDe = koansCoreDe.concat(koansDomDe);
const koansEn = require("../src/tmp/koans-core-en.js").getKoans();

/**
 * Render a file with EJS and save the result.
 */
const render = function(inPath, outPath, data = {}) {
  ejs.renderFile(inPath, data, function(err, html) {
    if (err) throw err;
    fs.writeFile(outPath, html, function(err) {
      if (err) throw err;
      console.log("Successfully build " + outPath);
    });
  });
}

// de
render("src/html/de/home.html", "www/home.html");
render("src/html/de/intro.html", "www/intro.html");
render("src/html/de/playground.html", "www/playground.html");
render("src/html/de/links.html", "www/links.html");
render("src/html/de/privacy.html", "www/privacy.html");
render("src/html/de/info.html", "www/info.html");
render("src/html/de/success.html", "www/success.html", { koans: koansDe });

// en
render("src/html/en/home.html", "www/en/home.html");
render("src/html/en/success.html", "www/en/success.html", { koans: koansEn });

// build de/koans html
console.log("Start building HTML koans files (de/en).");
for (var i = 0, l = koansCoreDe.length; i < l; i++) {
  
  let prevLink;
  let nextLink;
  if (i === 0) {
    prevLink = "../intro.html";
  } else {
    prevLink = koansCoreDe[i - 1].id + ".html";
  }
  if (i === l - 1) {
    nextLink = koansDomDe[0].id + ".html";
  } else {
    nextLink = koansCoreDe[i + 1].id + ".html";;
  }

  const koan = koansCoreDe[i];
  render("src/html/de/main.html", "www/koans/" + koan.id + ".html", { koan: koan, prevLink: prevLink, nextLink: nextLink });
}

for (var i = 0, l = koansDomDe.length; i < l; i++) {
  
  let prevLink;
  let nextLink;
  if (i === 0) {
    prevLink = koansCoreDe[koansCoreDe.length - 1].id + ".html";
  } else {
    prevLink = koansDomDe[i - 1].id + ".html";
  }
  if (i === l - 1) {
    nextLink = "../success.html"
  } else {
    nextLink = koansDomDe[i + 1].id + ".html";;
  }

  const koan = koansDomDe[i];
  render("src/html/de/main-dom.html", "www/koans/" + koan.id + ".html", { koan: koan, prevLink: prevLink, nextLink: nextLink });
}

// build en/koans html
for (var i = 0, l = koansEn.length; i < l; i++) {
  
  let links = {};
  if (i === 0) {
    links.prev = "../home.html";
  } else {
    links.prev = koansEn[i - 1].id + ".html";
  }
  if (i === l - 1) {
    links.next = "../success.html"
  } else {
    links.next = koansEn[i + 1].id + ".html";;
  }

  const koan = koansEn[i];
  render("src/html/en/main.html", "www/en/koans/" + koan.id + ".html", { koan: koan, links: links });
}