const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('src/www_root/js/util/object.js').toString()); // load koans.js

describe('jshero.object', function() {
  
  describe('#flatEquals', function() {

    const flatEquals = jshero.object.flatEquals;

    // Test objects

    const object = {
      a: 1,
      b: "string",
      c: true
    };

    const sameObject = {
      a: 1,
      b: "string",
      c: true
    };

    const differentValues = [];

    differentValues.push({
      a: 1,
      b: "string"
    });

    differentValues.push({
      a: 1,
      b: "string",
      c: true,
      d: "new"
    });

    differentValues.push(undefined);
    differentValues.push(null);
    differentValues.push(true);
    differentValues.push(1);
    differentValues.push("x");
    differentValues.push([1]);
    differentValues.push(Symbol("x"));
    
    it('should return true for two empty ojects.', function() {
      assert.strictEqual(flatEquals({}, {}), true);
    });

    it('should return true for two ojects with same own, enumerable properties.', function() {
      assert.strictEqual(flatEquals(object, sameObject), true);
    });

    it('should return false for two objects/values with diffferent own, enumerable properties.', function() {
      differentValues.forEach(function(differentValue) {
        assert.strictEqual(flatEquals(object, differentValue), false);
      });
    });

  });
});