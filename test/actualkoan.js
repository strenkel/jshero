const fs = require('fs');
const assert = require('assert');

// Mock window.location.href
const window = {
  location: {
    href: "https://www.jshero.net/koans/pageid.html"
  }
};

// Mock document.getElementById("next-button").href
const document = {
  getElementById: function(id) {
    if (id === "next-button") {
      return {
        href: "nextpage.html"
      }
    }
    return undefined;
  }
};

// Read in testcode.
eval(fs.readFileSync('src/www_root/js/lib/actualkoan.js').toString());

describe('jshero.actualKoan', function() {
  
  describe('#id', function() {

    it('should contain the id of the koan', function() {
      assert.strictEqual(jshero.actualKoan.id, "pageid");
    });

  });

  describe('#nextPageUrl', function() {

    it('should contain the next page url', function() {
      assert.strictEqual(jshero.actualKoan.nextPageUrl, "nextpage.html");
    });

  });
});
