# clean target
rm -r -f www/*
echo "Successfully cleaned target (www)."

# copy unmodified files from src/www (except js)
cp src/www/*.html www/
cp -r src/www/css/ www/css
cp -r src/www/en/ www/en
cp -r src/www/img www/img
cp -r src/www/koans www/koans
echo "Successfully copied base files."

# minify and copy js
babel src/www/js -d www/js

browserify src/js/nodeutil.js -o www/js/util/nodeutil.js
echo "Successfully browserified nodeutil."

babel src/js/koans.js src/koans/de/ -o www/js/koans.js
babel src/js/koans.js src/koans/en/ -o www/en/js/koans.js
echo "Successfully create koans.js (de/en) with Babel."