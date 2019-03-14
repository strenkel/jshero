// IE10 does not support Number.isNaN. Copied from MDN.
Number.isNaN = Number.isNaN || function(value) {
    return value !== value;
};

// IE8 does not support trim. Copied form MDN.
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
