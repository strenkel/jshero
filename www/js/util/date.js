if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.date = (function() {

  /**
     * Check whether obj is a Date object.
     */
  var isDate = function(obj) {
    return Object.prototype.toString.call(obj) === "[object Date]";
  };

  /**
   * Check whether obj is a valid Date object.
   */
  var isValidDate = function(obj) {
    return isDate(obj) && !isNaN(obj.getTime());
  };

  /**
   * Check whether obj is an invalid Date object.
   */
  var isInvalidDate = function(obj) {
    return isDate(obj) && isNaN(obj.getTime());
  };

  /**
   * Returns true if d1 and d2 are Date objects and represent the same timestamp.
   */
  var isEqual = function(d1, d2) {
    return isDate(d1) && isDate(d2) &&
      (d1.getTime() === d2.getTime() || (isNaN(d1.getTime()) && isNaN(d2.getTime())));
  };

  /**
   * Actually only support for local de-DE!
   *
   * @param {Date} date
   * @param {Object} format
   */
  var toString = function(date, format) {

    if (format.utc) {
      return date.toLocaleString("de-DE", { "timeZone": "UTC" }) + " UTC";
    }

    // default
    return date.toLocaleString();
  };

  return {
    isDate: isDate,
    isValidDate: isValidDate,
    isInvalidDate: isInvalidDate,
    isEqual: isEqual,
    toString: toString
  };

})();
