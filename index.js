/**
 * Returns true if the `text` contains at least one Burmese characters;
 * false otherwise.
 * @param {string} text - The text to be checked for Burmese.
 * @returns {boolean}
 */
function containsBurmese(text) {
  /** 
   * Unicode chart: https://www.unicode.org/charts/PDF/U1000.pdf 
   */
  const REGEX = /[\u1000-\u1009\u100A-\u100F\u1010-\u1019\u101A-\u1020\u1021-\u1029\u102A-\u102F\u1030-\u1039\u103A-\u103F\u1040-\u1049\u104A-\u104F\u1050-\u1059\u105A-\u105F\u1061-\u1069\u106A-\u106F\u1070-\u1079\u107A-\u107F\u1080-\u1089\u108A-\u108F\u1090-\u1099\u109A-\u109F]/;

  if (text === null || text === undefined || text === '') { return false; }

  if (typeof text !== 'string') text = text.toString();

  return !!text.match(REGEX);
}

module.exports = containsBurmese
