var compressor = require('node-minify');

compressor.minify({
  compressor: 'gcc',
  publicFolder: '../js/koans/',
  input: [
    'var.js',
    'var2.js',
    'function.js',
    'parameter.js',
    'string.js',
    'stringlength.js',
    'stringupper.js',
    'stringcharat.js',
    'number.js',
    'modulo.js',
    'mean.js',
    'math.js',
    'pi.js',
    'bool.js',
    'equals.js',
    'equals2.js',
    'notequals.js',
    'greaterthan.js',
    'if.js',
    'else.js',
    'elseif.js',
    'array.js', 
    'array2.js',
    'array3.js',
    'arraylength.js',
    'arraysort.js',
    'arraypush.js',
    'for.js',
    'for2.js',
    'while.js',
    'break.js'
  ],
  output: '../js/koans-min/koans.js',
  callback: function(err, min) {
    // err is always null. I doesn't know why.
    if (err) {
      console.error(err);
    }
  }
});
