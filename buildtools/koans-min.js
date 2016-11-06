var compressor = require('node-minify');

new compressor.minify({
  type: 'gcc',
  publicFolder: '../js/koans/',
  fileIn: [
    'var.js',
    'var2.js',
    'function.js',
    'parameter.js',
    'string.js',
    'stringlength.js',
    'stringupper.js,'
    'add.js'
  ],
  fileOut: '../js/koans-min/koans.js',
  callback: function(err, min){
    if (err) {
      console.log(err);
    }
    //console.log(min); 
  }
});
