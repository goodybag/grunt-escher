/*
 * grunt-escher
 * https://github.com/goodybag/grunt-escher
 *
 * Copyright (c) 2013 John Fawcett
 * Licensed under the MIT license.
 */

var escher = require('escher');

module.exports = function(grunt){
  grunt.registerTask('escher', 'Compile Escher project', function(){
    var done = this.async();

    escher({
      appPath:    this.appPath
    , outputDir:  this.outputDir
    , silent:     this.silent === "undefined" ? true : this.silent
    , optimize:   true
    }, function(error){
      // Done is passed a boolean indicating whether or not the task was successful
      done(!error);
    });
  });
};
