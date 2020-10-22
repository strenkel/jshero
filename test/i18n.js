const fs = require('fs');
const assert = require('assert');

// Read in testcode.
eval(fs.readFileSync('src/www_root/js/util/i18n.js').toString());

describe('jshero.i18n', function() {
  describe('#get()', function() {

    it('should translate "hint" into "Hint" if no language is set.', function() {
      assert.strictEqual(jshero.i18n.get('hint'), 'Hint');
    });

    it('should translate "hint" into "Tipp" if "de" is set.', function() {
      jshero.i18n.setLanguage('de');
      assert.strictEqual(jshero.i18n.get('hint'), 'Tipp');
    });

    it('should translate "hint" into "Hint" if "en" is set.', function() {
      jshero.i18n.setLanguage('en');
      assert.strictEqual(jshero.i18n.get('hint'), 'Hint');
    });


  });

});