/**
 * @param {string} path
 * @return {string}
 */

const simpliyfPath = (path) => {
  let stack = []; // Stack will store the directory names
  let curr = ""; // It will be used for directory names

  for (let character of path + "/") {
    if (character == "/") {
      if (curr == ".." && stack) {
        stack.pop();
      } else if (curr !== "" && curr !== ".") {
        stack.push(curr);
      }
      curr = "";
    } else {
      curr += character;
    }
  }

  return "/" + stack.join("/");
};

console.log(simpliyfPath("/home/"));
