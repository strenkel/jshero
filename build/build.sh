# clean target
rm -r -f www/

# copy unmodified files
cp -r src/www/ www/

browserify src/js/nodeutil.js -o www/js/util/nodeutil.js
babel src/js/koans.js src/koans/de/ -o www/js/koans.js
babel src/js/koans.js src/koans/en/ -o www/en/js/koans.js