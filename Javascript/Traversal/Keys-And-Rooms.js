/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = (rooms) => {
  let keys = [0];
  let visited = new Set();

  while (keys.length > 0) {
    const room = keys.pop();

    if (!visited.has(room)) {
      visited.add(room);
      keys.push(...rooms[room]);
    }
  }
  if (visited.size == rooms.length) return true;

  return false;
};
