'use strict';

var grunt = require('grunt');
var fs = require ('fs'),
    parse = require('css-parse');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.ie_friendly = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    // var actual = grunt.file.read('tmp/ie.css');
    // var expected = grunt.file.read('test/expected/ie.css');

    var actual = fs.readFileSync('tmp/ie.css', {encoding: 'utf-8'});
    var expected = fs.readFileSync('test/expected/ie.css', {encoding: 'utf-8'});
    // odd thing with different line endings coming out of the exact same file so replacing all
    actual = actual.replace(/\r\n/g, '').replace(/\n/g, '');
    expected = expected.replace(/\r\n/g, '').replace(/\n/g, '');

    test.equal(actual, expected, 'Files should match when removed media queries.');

    test.done();
  },
};
