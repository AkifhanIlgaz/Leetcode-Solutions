/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let result = "";

  let base = 65; // "A" => 65

  while (columnNumber > 0) {
    columnNumber--;
    result = String.fromCharCode(base + (columnNumber % 26)) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
};
