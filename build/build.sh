# clean target
rm -r -f www/*

# copy unmodified files from src/www (except js)
cp src/www/* www/
cp -r src/www/css/ www/css
cp -r src/www/en/ www/en
cp -r src/www/img www/img
cp -r src/www/koans www/koans

# minify and copy js
babel src/www/js -d www/js

browserify src/js/nodeutil.js -o www/js/util/nodeutil.js
babel src/js/koans.js src/koans/de/ -o www/js/koans.js
babel src/js/koans.js src/koans/en/ -o www/en/js/koans.js