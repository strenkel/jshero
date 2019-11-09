const fs = require('fs');
const assert = require('assert');

// Read in testcode.
eval(fs.readFileSync('www/js/util/date.js').toString());


describe('jshero.date', function() {
  describe('#isDate()', function() {
    
    const isDate = jshero.date.isDate;

    it('should return true for a normal Date', function() {
      assert.strictEqual(isDate(new Date()), true);
    });

    it('should return true for an invalid Date', function() {
      assert.strictEqual(isDate(new Date('invalid')), true);
    });

    it('should return false when an object is passed', function() {
      assert.strictEqual(isDate({}), false);
    });

    it('should return false when a number is passed', function() {
      assert.strictEqual(isDate(null), false);
    });

    it('should return false when null is passed', function() {
      assert.strictEqual(isDate(null), false);
    });
    
   

  });
});
