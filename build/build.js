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

const render = function(inPath, outPath, data = {}) {
  ejs.renderFile(inPath, data, function(err, html) {
    if (err) throw err;
    fs.writeFile(outPath, html, function(err) {
      if (err) throw err;
      console.log("Successfully build: " + inPath);
    });
  });
}

render("src/html/de/home.html", "www/home.html");
render("src/html/de/intro.html", "www/intro.html");
render("src/html/de/playground.html", "www/playground.html");
render("src/html/de/links.html", "www/links.html");
render("src/html/de/privacy.html", "www/privacy.html");
render("src/html/de/info.html", "www/info.html");
render("src/html/de/success.html", "www/success.html", { koans: koansDe });


// build en/success.html
ejs.renderFile("src/html/en/success.html", { koans: koansEn }, function(err, successHtml) {
  if (err) throw err;
  fs.writeFile("www/en/success.html", successHtml, function(err) {
    if (err) throw err;
    console.log("Successfully build success.html (en).");
  });
});

// build de/koans html
console.log("Start building HTML koans files (de/en).");
for (var i = 0, l = koansCoreDe.length; i < l; i++) {
  var koan = koansCoreDe[i];

  var prevLink;
  var nextLink;
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

  ejs.renderFile("src/html/de/main.html", { koan: koan, prevLink: prevLink, nextLink: nextLink }, function(err, koanHtml) {
    if (err) throw err;
    fs.writeFile("www/koans/" + koan.id + ".html", koanHtml, function(err) {
      if (err) throw err;
    });
  });

}

for (var i = 0, l = koansDomDe.length; i < l; i++) {
  var koan = koansDomDe[i];

  var prevLink;
  var nextLink;
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

  ejs.renderFile("src/html/de/main-dom.html", { koan: koan, prevLink: prevLink, nextLink: nextLink}, function(err, koanHtml) {
    if (err) throw err;
    fs.writeFile("www/koans/" + koan.id + ".html", koanHtml, function(err) {
      if (err) throw err;
    });
  });

}

// build en/koans html
for (var i = 0, l = koansEn.length; i < l; i++) {
  var koan = koansEn[i];

  var links = {};
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

  ejs.renderFile("src/html/en/main.html", { koan: koan, links: links }, function(err, koanHtml) {
    if (err) throw err;
    fs.writeFile("www/en/koans/" + koan.id + ".html", koanHtml, function(err) {
      if (err) throw err;
    });
  });

}