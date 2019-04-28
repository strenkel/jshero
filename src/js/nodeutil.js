/**
 * Provides the Node.js module 'util'.
 * Being built with browserify (see package.json).
 * 
 * util.inspect is used to log test results.
 * Node.js use util.inspect to log console outputs.
 * util.inspect has better log results compared to JSON.stringify.
 */
if (typeof jshero === "undefined") {
  jshero = {};
}

jshero.nodeutil = require('util');