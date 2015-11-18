/*jshint node:true*/
/* global require, module */
var Funnel = require('broccoli-funnel');
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('ember-cli/node_modules/broccoli-merge-trees');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/Materialize/dist/css/materialize.min.css');
  app.import('bower_components/Materialize/dist/js/materialize.min.js');

  app.import('bower_components/font-awesome/css/font-awesome.min.css');
  // app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2');

  app.import('bower_components/Materialize/dist/js/materialize.min.js');

  var fontawesomeTree = new Funnel('bower_components/font-awesome/fonts', {
    srcDir: '/',
    destDir: 'fonts'
  });

  var materializeTree = new Funnel('bower_components/Materialize/dist/font', {
    srcDir: '/',
    destDir: 'font'
  });

  return app.toTree(mergeTrees([app.toTree(), fontawesomeTree, materializeTree], {
    overwrite: true
  }));
};