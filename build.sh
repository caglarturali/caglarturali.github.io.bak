#! /bin/bash

echo "Running webpack production build"
node ./node_modules/webpack/bin/webpack.js -p --env production
echo "Building index.html"
node ./src/scripts/buildHtml.js
node ./node_modules/prettier/bin-prettier.js --write index.html
echo "Creating 404 file for GitHub pages"
cp index.html 404.html
echo "Done!"