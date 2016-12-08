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
    'arraylength.js' 
  ],
  output: '../js/koans-min/koans.js',
  callback: function(err, min){
    if (err) {
      console.err(err);
    }
    //console.log(min); 
  }
});
