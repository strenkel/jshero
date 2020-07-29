const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('src/www_root/js/lib/koans.js').toString()); // load koans.js

testKoanIdsIn("src/koans/core/de/");
testKoanIdsIn("src/koans/core/en/");
testKoanIdsIn("src/koans/dom/de/");

function testKoanIdsIn(koansDirName) {

  describe('koans id and filenames are identical in ' + koansDirName, function() {

    // Array containing filenames. E.g.: [array.js, bool.js, ...]
    let koansDir = fs.readdirSync(koansDirName);
    koansDir.forEach(function(koanFileName) {

      describe(koanFileName, function() {

        it('should have had proper id', function() {
          eval(fs.readFileSync(koansDirName + koanFileName).toString());
          let idFromFilename = koanFileName.split(".")[0];
          let koanId = jshero.koans.get().id;
          assert.equal(koanId, idFromFilename);
        });

      });
    });
  });
}