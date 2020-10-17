# JS Hero

JS Hero: JavaScript tutorial with exersices/koans.

Website: <https://www.jshero.net><br>
Playstore: <https://play.google.com/store/apps/details?id=net.jshero>

Static websites: run locally (limited) or on any web server (recommended).  
Locally only in browsers that support locally local storage (Firefix, not Chrome, ...).  
The Playstore app is a CORDOVA build (<https://cordova.apache.org>) of the website.

## Folder

www: the built project  
src: Sources to build the project  
build: Build scripts  
test: Unit tests  

## Deploy

Copy the content of the folder `www` in a web server (e.g. apache).

## Local use

Open `www/index.html` in a browser. Works limited.  

## Build

Requirement: node  

After changes JS Hero has to be rebuilt with npm.
`package.json` together with `build.js` and `build.sh` defines the necessary steps and modules.

Use `npm install` to install the modules once.
Use `npm run build` to (re)build the project.

`npm run build` depends (unfortunately) on the operating system. It only runs with a Linux shell. Use `Git Bash` or `WSL` on windows systems.

## Add a new koan

1. Copy an existing koan and modify it.
2. Insert the id of the new koan in the file order-de.js or order-en.js at the desired position.
3. Execute `npm run build` in a linux shell.
4. Refresh your browser
