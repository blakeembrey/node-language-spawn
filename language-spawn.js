var os      = require('os');
var path    = require('path');
var spawn   = require('child_process').spawn;
var extend  = require('xtend');
var command = require('language-command');
var isWin   = os.platform() === 'win32';

/**
 * Spawn a file process in any programming language.
 *
 * @param {String} language
 * @param {String} file
 * @param {String} args
 * @param {Object} opts
 */
module.exports = function (language, file, args, opts) {
  var cmd = command(language, file, args);

  var exec = spawn(isWin ? 'cmd' : 'sh', [isWin ? '/c' : '-c', cmd], extend({
    cwd: path.dirname(file)
  }, opts));

  if (cmd == null) {
    process.nextTick(function () {
      exec.emit('error', new Error('Language is not supported'));
    });
  }

  return exec;
};
