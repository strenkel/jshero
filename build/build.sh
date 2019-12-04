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

babel src/js/koans.js src/koans/core/de/ src/koans/core/order-de.js -o src/tmp/koans-core-de.js
babel src/js/koans.js src/koans/dom/de/ src/koans/dom/order-de.js -o src/tmp/koans-dom-de.js
babel src/js/koans.js src/koans/core/en/ src/koans/core/order-en.js -o src/tmp/koans-core-en.js
babel src/koans/core/de/ -d www/js/koans
babel src/koans/dom/de/ -d www/js/koans
babel src/koans/core/en/ -d www/en/js/koans
echo "Successfully create js koans files with Babel."