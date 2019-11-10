const fs = require('fs');
const assert = require('assert');

// Read in testcode.
eval(fs.readFileSync('src/www/js/util/date.js').toString());


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
      assert.strictEqual(isDate(1), false);
    });

    it('should return false when null is passed', function() {
      assert.strictEqual(isDate(null), false);
    });
  });

  describe('#isValidDate()', function() {

    const isValidDate = jshero.date.isValidDate;

    it('should return true for a normal Date', function() {
      assert.strictEqual(isValidDate(new Date()), true);
    });

    it('should return false for an invalid Date', function() {
      assert.strictEqual(isValidDate(new Date('invalid')), false);
    });

    it('should return false when an object is passed', function() {
      assert.strictEqual(isValidDate({}), false);
    });

    it('should return false when a number is passed', function() {
      assert.strictEqual(isValidDate(1), false);
    });

    it('should return false when null is passed', function() {
      assert.strictEqual(isValidDate(null), false);
    });
  });

  describe('#isInvalidDate()', function() {

    const isInvalidDate = jshero.date.isInvalidDate;

    it('should return false for a normal Date', function() {
      assert.strictEqual(isInvalidDate(new Date()), false);
    });

    it('should return true for an invalid Date', function() {
      assert.strictEqual(isInvalidDate(new Date('invalid')), true);
    });

    it('should return false when an object is passed', function() {
      assert.strictEqual(isInvalidDate({}), false);
    });

    it('should return false when a number is passed', function() {
      assert.strictEqual(isInvalidDate(1), false);
    });

    it('should return false when null is passed', function() {
      assert.strictEqual(isInvalidDate(null), false);
    });
  });

  describe('#isEqual()', function() {

    const isEqual = jshero.date.isEqual;

    it('should return true for two equal Dates', function() {
      assert.strictEqual(isEqual(new Date(2019, 10, 10), new Date(2019, 10, 10)), true);
    });

    it('should return true for two invalid Dates', function() {
      assert.strictEqual(isEqual(new Date('i'), new Date('i')), true);
    });

    it('should return false for two unequal Dates', function() {
      assert.strictEqual(isEqual(new Date(2019, 10, 10), new Date(2019, 10, 11)), false);
    });

    it('should return false when a Numder is passed', function() {
      assert.strictEqual(isEqual(new Date(2019, 10, 10), 1), false);
    });

    it('should return false when undefined is passed', function() {
      assert.strictEqual(isEqual(new Date(2019, 10, 10)), false);
    });
    
  });

  describe('#toString()', function() {

    const toString = jshero.date.toString;

    it('should return the correct UTC Date string in local de when utc is passed', function() {
      // The format is wrong. It should be german but is iso.
      // Maybe node doesn't know the local 'de-DE'. Firefox returns the correct german date.
      assert.strictEqual(toString(new Date(Date.UTC(2019, 11, 31)), {utc: true}), '2019-12-31 0:00:00 UTC');
    });

  });

});
