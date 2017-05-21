(function () {
  'use strict';

  var gulp = require('gulp');
  var yaml = require('js-yaml');
  var fs = require('fs');
  var assign = require('lodash.assign');
  var backstopConfig  = require('./backstop.json');
  var argv = require('yargs').argv;
  var runSequence = require('gulp-run-sequence');

  // read default config settings
  var config = yaml.safeLoad(fs.readFileSync('default.gulpfile.yml', 'utf8'), {json: true});
  try {
    // override default config settings
    var customConfig = yaml.safeLoad(fs.readFileSync('gulpfile.yml', 'utf8'), {json: true});
    config = assign(config, customConfig);
  } catch (e) {
    console.log('No custom config found! Proceeding with default config only.');
  }

  //  should we build sourcemaps? "gulp build --sourcemaps"
  var buildSourceMaps = !!argv.sourcemaps;
  config.buildSourceMaps = buildSourceMaps;

  var gulpRequireTasks = require('gulp-require-tasks');
  gulpRequireTasks({
    path: process.cwd() + '/gulp-tasks',
    arguments: [config]
  });

  var patternLabTasks = require('./gulp-tasks/patternLab.js');
  patternLabTasks(gulp, config);

  var backstopTasks = require('./gulp-tasks/backstop.js');
  backstopTasks(gulp, config);

  var renameTasks = require('./gulp-tasks/rename/rename.js');
  renameTasks(gulp, config);

  gulp.task('default', ['watch']);
  gulp.task('watch', function(cb) {
    runSequence('pl:build', ['serve', 'styles:watch', 'scripts:watch', 'pl:watch']);
  });
  gulp.task('build', function(cb) {
    runSequence('styles:build', 'pl:build', 'favicons:build', 'images:build');
  });
  gulp.task('favicons:build', function(cb) {
    runSequence('favicons:generate', 'favicons:inject');
  });

}());
