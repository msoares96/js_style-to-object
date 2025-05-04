'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');
  const finalObject = {};

  for (const line of lines) {
    if (line.trim() !== '') {
      const splitLine = line.split(':');

      if (line[0] !== undefined && line[1] !== undefined) {
        finalObject[splitLine[0].trim()] = splitLine[1].trim();
      }
    }
  }

  return finalObject;
}

module.exports = convertToObject;
