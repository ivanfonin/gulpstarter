/*
gulpfile.js
===========
Rather than manage one giant configuration file responsible
for creating multiple tasks, each task has been broken out into
its own file in 'gulp/tasks'. Any files in that directory get
automatically required below.
*/

var reqdir = require('require-dir');

// Require all tasks from 'gulp/tasks' including subfolders
reqdir('./gulp/tasks', {
    recurse: true
});
