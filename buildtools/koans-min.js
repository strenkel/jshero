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
    'mean.js'
    
  ],
  output: '../js/koans-min/koans.js',
  callback: function(err, min){
    if (err) {
      console.log(err);
    }
    //console.log(min); 
  }
});
