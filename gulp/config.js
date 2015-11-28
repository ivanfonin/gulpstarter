/*
config.js
=========
Gulp configuration file for the Gulpstarter workflow.
*/

/* Paths
--------
src   - Source files of your project. Edit only in this directory.
build - Working version of your project for testing purposes.
dist  - Distribution version of the project with minified JS, CSS, etc.
*/
var src = "./src/",
    build = "./build/",
    dist = "./dist/";

/* Settings
-----------
*/
module.exports = {
    /* Project
    ----------
    Main project folders
    */
    project: {
        src: src,
        build: build,
        dist: dist
    }
}

