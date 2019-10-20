if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * Contains frequently used test cases.
 */
jshero.testutil = (function(I18N, jsheroDate, jsheroUtil, jsheroArray, jsheroObject, evaluator, stringify) {

  'use strict';

  /** ------------- copied and adpated from escape-html/index.js
   *  BEGIN ------------- */

  /*!
   * escape-html
   * Copyright(c) 2012-2013 TJ Holowaychuk
   * Copyright(c) 2015 Andreas Lubbe
   * Copyright(c) 2015 Tiancheng "Timothy" Gu
   * MIT Licensed
   */

  var matchHtmlRegExp = /["'&<>\s]/;

  /**
   * Escape special characters in the given string of html.
   *
   * @param  {string} string The string to escape for inserting into HTML
   * @return {string}
   * @public
   */

  function escapeHtml(string) {
    var str = '' + string;
    var match = matchHtmlRegExp.exec(str);

    if (!match) {
      return str;
    }

    var escape;
    var html = '';
    var index = 0;
    var lastIndex = 0;

    for (index = match.index; index < str.length; index++) {
      switch (str.charCodeAt(index)) {
        case 32: // space
          escape = '&nbsp;';
          break;
        case 34: // "
          escape = '&quot;';
          break;
        case 38: // &
          escape = '&amp;';
          break;
        case 39: // '
          escape = '&#39;';
          break;
        case 60: // <
          escape = '&lt;';
          break;
        case 62: // >
          escape = '&gt;';
          break;
        default:
          continue;
      }

      if (lastIndex !== index) {
        html += str.substring(lastIndex, index);
      }

      lastIndex = index + 1;
      html += escape;
    }

    return lastIndex !== index ?
      html + str.substring(lastIndex, index) :
      html;
  }

  /** ------------- copied and adpated from escape-html/index.js
   *  END ------------- */

  /**
   * Example usage:
   *
   * jshero.testutil.assert_isFunction('a')
   *
   * We expect a function named "a".
   *
   * @param {String} f_name
   * @returns {TestResult}
   */
  var assert_isFunction = function(f_name) {
    var ok = evaluator.evalTest("typeof " + f_name + "=== 'function';");
    var msg;
    if (ok) {
      msg = '<code>' + f_name + '</code> ' + I18N("isAFunction") + ".";
    } else {
      msg = '<code>' + f_name + '</code> ' + I18N("isNotAFunction") + ".";
    }
    return {
      ok: ok,
      msg: msg
    };
  };

  /**
   * Assert true, if the user input is the passed string.
   * The user input can use ", ' or `.
   * Designed for "What is x?" excersices.
   * 
   * @param {String} value
   * @returns {TestResult}
   */
  var assert_isString = function(value) {
    var ok = evaluator.equalsString(value);
    return createXHasValueResult(ok);
  };

  /**
   * Assert true, if the user input is value.
   * Designed for "What is x?" excersices.
   * 
   * @param {String} value
   * @returns {TestResult}
   */
  var assert_isValue = function(value) {
    var ok = evaluator.equalsValue(value);
    return createXHasValueResult(ok);
  };

  /**
   * We expect that calling a function
   * with the call f_call (e.g. 'f()' or 'f("Hallo")')
   * returns a value of type expectedReturnType.
   * expectedReturnType can be a JavaScript data type or some picked object-types.
   * See switch-case for details. Watch out for upper/lower case.
   *
   * @param {String} f_call
   * @param {String} expectedReturnType
   * @returns {TestResult}
   */
  var assert_functionReturnsType = function(f_call, expectedReturnType) {
    var ok, msg, e;
    var fCallEscaped = escapeHtml(f_call);
    try {
      var result = evaluator.evalTest(f_call);
      switch (expectedReturnType) {
        case 'Array':
          ok = Array.isArray(result);
          if (ok) {
            msg = jsheroUtil.formatMessage(I18N("functionReturnsAnArray"), [fCallEscaped]);
          } else {
            msg = jsheroUtil.formatMessage(I18N("functionNotReturnsAnArray"), [fCallEscaped]);
          }
          break;
        case 'Date':
          ok = jsheroDate.isDate(result);
          if (ok) {
            msg = jsheroUtil.formatMessage(I18N("functionReturnsADate"), [fCallEscaped]);
          } else {
            msg = jsheroUtil.formatMessage(I18N("functionNotReturnsADate"), [fCallEscaped]);
          }
          break;
        default:
          ok = false;
          msg = I18N("unknownError");
          console.error('testutil.assert_functionReturnsType: unkwown type');
          break;
      }
    } catch (exc) {
      ok = false;
      msg = I18N("errorAtCallOf") + ' <code>' + fCallEscaped + '</code>.';
      e = exc;
    }
    return {
      ok: ok,
      msg: msg,
      e: e
    };
  };

  var assert_functionLogs = function(f_call, expectedLog) {
    var ok, msg, e;
    var fCallEscaped = escapeHtml(f_call);
    try {
      evaluator.evalTest(f_call);
      var expectedLogExcaped = escapeHtml(stringify(expectedLog));
      if (jshero.log.hasLog(expectedLog)) {
        ok = true;
        msg = jsheroUtil.formatMessage(I18N("doesLog"), [fCallEscaped, expectedLogExcaped]);
      } else {
        ok = false;
        msg = jsheroUtil.formatMessage(I18N("doesNotLog"), [fCallEscaped, expectedLogExcaped]);
      }
    } catch (exc) {
      ok = false;
      msg = I18N("errorAtCallOf") + ' <code>' + fCallEscaped + '</code>.';
      e = exc;
    }
    return {
      msg: msg,
      ok: ok,
      e: e
    };
  };

  /**
   * We expect that calling a function
   * with the call f_call (e.g. 'f()' or 'f("Hallo")')
   * returns the value expectedReturnValue.
   *
   * @param {String} f_call
   * @param {Object} expectedReturnValue
   * @param {Object} options
   * @returns {TestResult}
   */
  var assert_functionReturns = function(f_call, expectedReturnValue, options) {

    options = options || {};

    var ok, msg, e;
    var fCallEscaped = escapeHtml(f_call);
    try {
      var result = evaluator.evalTest(f_call);
      if (Array.isArray(expectedReturnValue)) {
        ok = jsheroArray.isEqual(result, expectedReturnValue);
      } else if (jsheroDate.isValidDate(expectedReturnValue)) {
        ok = jsheroDate.isEqual(result, expectedReturnValue);
      } else if (Number.isNaN(expectedReturnValue)) {
        ok = Number.isNaN(result);
      } else {
        ok = result === expectedReturnValue;
      }
      if (jsheroDate.isValidDate(expectedReturnValue)) {
        if (ok) {
          msg = jsheroUtil.formatMessage(I18N("functionReturnsDate"),
            [fCallEscaped, jsheroDate.toString(expectedReturnValue, options)]);
        } else {
          if (jsheroDate.isValidDate(result)) {
            msg = jsheroUtil.formatMessage(I18N("functionNotReturnsDate"),
              [fCallEscaped, jsheroDate.toString(expectedReturnValue, options), jsheroDate.toString(result, options)]);
          } else {
            msg = jsheroUtil.formatMessage(I18N("functionNotReturnsValidDate"),
              [fCallEscaped, jsheroDate.toString(expectedReturnValue, options), escapeHtml(stringify(result))]);
          }
        }
      } else {
        if (ok) {
          msg = jsheroUtil.formatMessage(I18N("functionReturns"),
            [fCallEscaped, escapeHtml(stringify(expectedReturnValue))]);
        } else {
          msg = jsheroUtil.formatMessage(I18N("functionNotReturns"),
            [fCallEscaped, escapeHtml(stringify(expectedReturnValue)), escapeHtml(stringify(result))]);
        }
      }
    } catch (exc) {
      ok = false;
      msg = I18N("errorAtCallOf") + ' <code>' + fCallEscaped + '</code>.';
      e = exc;
    }
    return {
      ok: ok,
      msg: msg,
      e: e
    };
  };

  var assert_functionReturnsObject = function(f_call, expectedReturnValue) {
    var ok, msg, e;
    var fCallEscaped = escapeHtml(f_call);
    try {
      var result = evaluator.evalTest(f_call);
      ok = jsheroObject.flatEquals(result, expectedReturnValue);
      if (ok) {
        msg = jsheroUtil.formatMessage(I18N("functionReturns"),
          [fCallEscaped, escapeHtml(stringify(expectedReturnValue))]);
      } else {
        msg = jsheroUtil.formatMessage(I18N("functionNotReturns"),
          [fCallEscaped, escapeHtml(stringify(expectedReturnValue)), escapeHtml(stringify(result))]);
      }
    } catch (exc) {
      ok = false;
      msg = I18N("errorAtCallOf") + ' <code>' + fCallEscaped + '</code>.';
      e = exc;
    }
    return {
      ok: ok,
      msg: msg,
      e: e
    };
  };

  /**
   * Test if a variable with the name 'name' is not undefined.
   *
   * @param {String} name
   * @returns {TestResult}
   */
  var assert_variableDefined = function(name) {

    var ok = evaluator.evalTest("typeof " + name + " !== 'undefined';");
    var msg;
    if (ok) {
      msg = jsheroUtil.formatMessage(I18N("varHasValue"), [name]);
    } else {
      msg = jsheroUtil.formatMessage(I18N("varHasNoValue"), [name]);
    }
    return {
      ok: ok,
      msg: msg
    };
  };

  /**
   * Prüft, ob eine Variable den erwarteten Wert hat.
   * Es wird auf strikte Gleichheit ueberprueft.
   * expValue ist i.d.R. ein elementarer Typ wie String, Number oder Boolean.
   *
   * @param v {Object}
   * @param name {String}
   * @param expValue {Object}
   * @returns {TestResult}
   */
  var assert_variableHasValue = function(name, expValue) {
    var actValue = evaluator.evalTest(name);
    var ok = actValue === expValue;
    return createVariableHasValueResult(ok, name, actValue, expValue);
  };

  var assert_variableIsObject = function(name, expObject) {
    var actObject = evaluator.evalTest(name);
    var ok = jsheroObject.flatEquals(actObject, expObject);
    return createVariableHasValueResult(ok, name, actObject, expObject);
  };

  /**
   * Prüfen, ob die Function die geforderte Anzahl Parameter hat.
   *
   * @param {String} f_name Name der Funktion.
   * @param {int} numOfParam Anzahl der geforderten Parameter.
   * @returns {TestResult}
   */
  var assert_functionHasNumOfParameter = function(f_name, expectedNumOfParam) {
    var actualNumOfParam = evaluator.evalTest(f_name + ".length;");
    var ok = actualNumOfParam === expectedNumOfParam;
    var msg;
    if (ok) {
      msg = jsheroUtil.formatMessage(I18N("correctNumOfParam"), [f_name, expectedNumOfParam]);
    } else {
      msg = jsheroUtil.formatMessage(I18N("wrongNumOfParam"), [f_name, expectedNumOfParam, actualNumOfParam]);
    }
    return {
      ok: ok,
      msg: msg
    };
  };

  // --- PRIVATE ---

  var createXHasValueResult = function(ok) {
    var msg;
    if (ok) {
      msg = '<code>x</code> ' + I18N("hasValue") + ' <code>' + evaluator.getCode()  + '</code>.';
    } else {
      msg = '<code>x</code> ' + I18N("hasNotValue") + ' <code>' + evaluator.getCode()  + '</code>.';
    }
    return {
      ok: ok,
      msg: msg
    };
  };

  var createVariableHasValueResult = function(ok, name, actValue, expValue) {
    var msg;
    if (ok) {
      msg = jsheroUtil.formatMessage(I18N("varHasValueOf"), [name, escapeHtml(stringify(expValue))]);
    }
    else {
      msg = jsheroUtil.formatMessage(I18N("varHasWrongValue"), [name, escapeHtml(stringify(expValue)), escapeHtml(stringify(actValue))]);
    }
    return {
      ok: ok,
      msg: msg
    };
  }

  return {
    assert_isFunction: assert_isFunction,
    assert_functionReturnsType: assert_functionReturnsType,
    assert_functionReturns: assert_functionReturns,
    assert_functionReturnsObject: assert_functionReturnsObject,
    assert_functionHasNumOfParameter: assert_functionHasNumOfParameter,
    assert_functionLogs: assert_functionLogs,
    assert_variableDefined: assert_variableDefined,
    assert_variableHasValue: assert_variableHasValue,
    assert_variableIsObject: assert_variableIsObject,
    assert_isString: assert_isString,
    assert_isValue: assert_isValue
  };

})(jshero.i18n.get,
  jshero.date,
  jshero.util,
  jshero.array,
  jshero.object,
  jshero.evaluator,
  jshero.nodeutil.inspect);


