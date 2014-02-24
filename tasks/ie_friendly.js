/*
 * grunt-ie-friendly
 * https://github.com/grahamlicence/ie-friendly
 *
 * Copyright (c) 2014 Graham Licence
 * Licensed under the MIT license.
 */

'use strict';
var fs = require ('fs'),
    path = require('path'),
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

      var input = fs.readFileSync(src[0], {encoding: 'utf-8'}),
            ruleCount = parse(input).stylesheet.rules.length;

      // import additional stylesheet if over 4096 rule limit
      var importRule = { type: 'import', import: 'url("split.css")' };

      function remove (css, split, startAt, endAt, resultImport) {
        
        var expanded = parse(css),
            styles,
            result = [];

        // add import 
        if (split) {
          result.push(resultImport);
        }
            // console.log(expanded)
            // console.log(expanded.stylesheet.rules[0])
            // console.log(f.dest)
            // console.log(expanded.stylesheet.rules[12])
        
        expanded.stylesheet.rules.forEach(function (rule, ind) {
          // console.log(rule.type)
          // console.log(ind)
          // console.log(expanded.stylesheet.rules)
          if (ind === endAt) {
            // stop
            return;
          }
          if (ind < startAt) {
            // already added
            return;
          }
          if (rule.type === 'rule') {
            result.push(rule);
          } else if (rule.media === 'print') {
            // console.log(rule)
            result.push(rule);
          } else if (rule.type === 'media') {
            rule.rules.forEach(function (rule) {
              // console.log(rule)
              // console.log(rule.type)
              if (rule.type === 'rule') {
                result.push(rule);
              }
            });
          }
        });

        styles = { type: 'stylesheet', stylesheet: { rules: result } };
        return stringify(styles);
      }
      // console.log(path.basename(f.dest).replace('.css', ''))
      // console.log(path.dirname(f.dest))
      grunt.log.writeln('Rule count: ' + ruleCount);
      if (ruleCount < 4090) {
        input = remove(input, false, 0);
        
        // Write the destination file.
        grunt.file.write(f.dest, input);
        // Print a success message.
        grunt.log.writeln('File "' + f.dest + '" created.');
      } else {
        var input1 = remove(input, false, 0, 4000);
        var importName = path.basename(f.dest).replace('.css', '') + '-import.css'
        grunt.file.write(path.dirname(f.dest) + '/' + importName, input1);
        grunt.log.writeln('File "' + path.dirname(f.dest) + '/' + importName +'" created.');
        var result = { type: 'import', import: 'url(\'' + importName + '\')' };
        var input2 = remove(input, true, 4000, ruleCount, result);
        grunt.file.write(f.dest, input2);
        grunt.log.writeln('File "' + f.dest + '" created.');
        // split the stylesheet
      }

    });
  });

};
