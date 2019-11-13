# clean target, tmp
rm -r -f www/*
rm -r -f src/tmp/*
echo "Successfully cleaned target and tmp."

# copy unmodified files from src/www (except js)
cp src/www/*.html www/
cp -r src/www/css/ www/css
cp -r src/www/en/ www/en
cp -r src/www/img www/img
mkdir www/koans
mkdir www/en/koans
echo "Successfully copied base files."

# minify and copy js
babel src/www/js -d www/js

browserify src/js/nodeutil.js -o www/js/util/nodeutil.js
echo "Successfully browserified nodeutil."

babel src/js/koans.js src/koans/de/ -o src/tmp/de/core/koans.js
babel src/js/koans.js src/koans/en/ -o src/tmp/en/core/koans.js
babel src/koans/de/ -d www/js/koans
babel src/koans/en/ -d www/en/js/koans
echo "Successfully create koans.js (de/en) with Babel."