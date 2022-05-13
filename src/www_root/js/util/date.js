if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.date = (function() {

  "use strict";

  /**
   * Check whether obj is a Date object.
   * 
   * @param obj {*}
   */
  function isDate(obj) {
    return Object.prototype.toString.call(obj) === "[object Date]";
  };

  /**
   * Check whether obj is a valid Date object.
   * 
   * @param obj {*}
   */
  function isValidDate(obj) {
    return isDate(obj) && !isNaN(obj.getTime());
  };

  /**
   * Returns true if d1 and d2 are Date objects and represent the same (valid) timestamp.
   * 
   * @param d1 {*}
   * @param d2 {*}
   */
  function isEqual(d1, d2) {
    return isValidDate(d1) && isValidDate(d2) && d1.getTime() === d2.getTime();
  };

  /**
   * Actually only support for local de-DE!
   *
   * @param {Date} date
   * @param {Object} format
   */
  function toString(date, format) {

    if (format.utc) {
      return date.toLocaleString("de-DE", { "timeZone": "UTC" }) + " UTC";
    }

    // default
    return date.toLocaleString();
  };

  return Object.freeze({
    isDate: isDate,
    isValidDate: isValidDate,
    isEqual: isEqual,
    toString: toString
  });

})();