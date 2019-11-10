const fs = require('fs');
const assert = require('assert');

// Read in testcode.
eval(fs.readFileSync('src/www/js/util/array.js').toString());

describe('jshero.array', function() {
  describe('#isEqual()', function() {
    
    const isEqual = jshero.array.isEqual;

    it('should return true for two empty arrays', function() {
      assert.strictEqual(isEqual([], []), true);
    });
    
    it('should return true for arrays with equal numbers', function() {
      assert.strictEqual(isEqual([1, 2, 3], [1, 2, 3]), true);
    });

    it('should return false for arrays with unequal numbers', function() {
      assert.strictEqual(isEqual([1, 2, 3], [1, 2, 4]), false);
    });

    it('should return false when arrays differ in length', function() {
      assert.strictEqual(isEqual([1, 2, 3], [1, 2]), false);
    });

    it('should return false when null is passed', function() {
      assert.strictEqual(isEqual(null, []), false);
    });

    it('should return false when an object is passed', function() {
      assert.strictEqual(isEqual([], {}), false);
    });

    it('should return false when nothing is passed', function() {
      assert.strictEqual(isEqual(null, []), false);
    });

  });
});
