'use strict';

/**
 * Copies multiple files from templatePath to destination Path
 * @param {object} generator - Generator calling this function. This is needed
 *      to get yeoman file system functions
 * @param {array} paths - Array of files to be copied. The elements on the array
 *      can be:
 *      String - The origin path is the same as the destination
 *      Array - The first element is the origin and the second is the destination
 */
exports.copyFiles = function(generator, paths) {
  var key;
  var val;

  for (key in paths) {
    val = paths[key];
    if (typeof val === 'string') {
      val = [val, val];
    }

    generator.fs.copy(
      generator.templatePath(val[0]),
      generator.destinationPath(val[1])
    );
  }
};
