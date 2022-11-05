/**
 * @param {string} command
 * @return {string}
 */
const interpret = (command) => {
  let result = "";

  for (let i = 0; i < command.length; i++) {
    let char = command[i];

    if (char == "G") result += "G";

    if (char == "(") result += command[i + 1] == ")" ? "o" : "al";
  }

  return result;
};

/**
 * @param {string} command
 * @return {string}
 */
const interpret = (command) => {
  return command.replaceAll("()", "o").replaceAll("(al)", "al");
};
