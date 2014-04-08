var fs     = require('fs');
var spawn  = require('../');
var path   = require('path');
var assert = require('assert');

describe('language-spawn', function () {
  describe('language exists', function () {
    it('should spawn the file', function (done) {
      var file = path.join(__dirname, 'fixtures', 'CoffeeScript.coffee');
      var test = spawn('CoffeeScript', file);
      var data = '';

      test.stderr.on('data', done);

      test.stdout.on('data', function (chunk) {
        data += chunk;
      });

      test.on('close', function (code) {
        assert.equal(code, 0);
        assert.equal(data, 'Hello, world!\n');

        return done();
      });
    });
  });

  describe('language missing', function () {
    it('should throw an error', function (done) {
      var file = path.join(__dirname, 'test.fl');
      var test = spawn('FairyLand', file);

      test.on('error', function (err) {
        assert.ok(err);
      });

      test.on('close', function (code) {
        assert.notEqual(code, 0);

        return done();
      });
    });
  });

  describe('file missing', function () {
    it('language should throw an error', function (done) {
      var file = path.join(__dirname, 'test.js');
      var test = spawn('JavaScript', file);
      var err  = '';

      test.stderr.on('data', function (chunk) {
        err += chunk;
      });

      test.on('close', function (code) {
        assert.ok(err);
        assert.notEqual(code, 0);

        return done();
      });
    });
  });

  describe('arguments', function () {
    it('should pass through command line arguments', function (done) {
      var file  = path.join(__dirname, 'fixtures', 'C.c');
      var value = Math.random();
      var test  = spawn('C', file, value);
      var data  = '';

      test.stdout.on('data', function (chunk) {
        data += chunk;
      });

      test.on('close', function (code) {
        assert.equal(code, 0);
        assert.equal(data, value);

        return done();
      });
    });
  });

  describe('options', function () {
    it('should spawn with an options object', function (done) {
      var cwd  = path.join(__dirname, '..');
      var file = path.join(__dirname, 'fixtures', 'JavaScript.js');
      var test = spawn('JavaScript', file, null, { cwd: cwd });
      var data = '';

      test.stdout.on('data', function (chunk) {
        data += chunk;
      });

      test.on('close', function (code) {
        assert.equal(code, 0);
        assert.equal(data, cwd + '\n');

        return done();
      });
    });
  });
});
