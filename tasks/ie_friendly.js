/*
 * grunt-ie-friendly
 * https://github.com/grahamlicence/ie-friendly
 *
 * Copyright (c) 2014 Graham Licence
 * Licensed under the MIT license.
 */

'use strict';
var fs = require ('fs'),
    parse = require('css-parse'),
    stringify = require('css-stringify');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('ie_friendly', 'Remove media queries for IE desktop styles', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      var input = fs.readFileSync(src[0], {encoding: 'utf-8'});

      function remove (css) {
        
        var expanded = parse(css),
            styles,
            result = [];
            // result = '{type: "stylesheet",stylesheet:{rules:[',
            // end = '] } }';
            // console.log(expanded)
            // console.log(expanded.stylesheet.rules[1])
            console.log(expanded.stylesheet.rules[12])
        
        expanded.stylesheet.rules.forEach(function (rule, ind) {
          console.log(rule.type)
          // console.log(ind)
          // console.log(expanded.stylesheet.rules)
          if (rule.type === 'rule') {
            result.push(rule);
          } else if (rule.media === 'print') {
            console.log('rule!!')
            console.log(rule)
            result.push(rule)
          } else if (rule.type === 'media') {
            rule.rules.forEach(function (rule) {
              // console.log(rule)
              // console.log(rule.type)
              if (rule.type === 'rule') {
                result.push(rule)
              }
            })
          }
        });

        styles = { type: 'stylesheet', stylesheet: { rules: result } };
        // return result;
        return stringify(styles);
      }
      input = remove(input);

      // console.log(input.type)
      // console.log(input.stylesheet.rules.length)
      // console.log(input.stylesheet.rules[0])
      
      // Write the destination file.
      grunt.file.write(f.dest, input);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
