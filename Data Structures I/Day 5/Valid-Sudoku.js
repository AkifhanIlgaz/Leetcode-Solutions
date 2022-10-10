/**
 * @param {character[][]} board
 * @return {boolean}
 */

const isValidSudoku = (board) => {
  const boards = 3;

  const [boxes, cols, rows] = getBoards(boards);

  
  return searchGrid(board, boxes, cols, rows);
};

const initBoard = (rows, cols) => {
  return new Array(rows).fill().map(() => new Array(cols).fill(false));
};

const getBoards = (boards) => {
  const [rows, cols] = [9, 9];
  return new Array(boards).fill().map(() => initBoard(rows, cols));
};

const searchGrid = (board, boxes, cols, rows) => {
  const [_rows, _cols] = [9, 9];

  for (let row = 0; row < _rows; row++) {
    for (let column = 0; column < _cols; column++) {
      const char = board[row][column];
      const index = Math.floor(row / 3) * 3 + Math.floor(column / 3);

      const isEmpty = char === ".";
      if (isEmpty) continue;

      const hasMoved =
        boxes[index][char] || cols[column][char] || rows[row][char];
      if (hasMoved) return false;

      rows[row][char] = true;
      cols[column][char] = true;
      boxes[index][char] = true;
    }
  }

  return true;
};

isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
