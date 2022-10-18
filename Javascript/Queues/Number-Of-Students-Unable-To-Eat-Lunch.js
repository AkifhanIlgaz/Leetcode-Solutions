/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

const countStudents = function (students, sandwiches) {
  let studentPreference = new Array(2).fill(0);
  students.forEach((student) => studentPreference[student]++);

  for (let i = 0; i < sandwiches.length; i++) {
    if (studentPreference[sandwiches[i]]) {
      studentPreference[sandwiches[i]]--;
    } else {
      return sandwiches.length - i;
    }
  }
  return 0;

  /*

let skip = 0; // join back count

  while (students.length) { // Students have to eat
    if (sandwiches[0] === students[0]) { // Student prefers this sandwich
      sandwiches.shift(); // eat 
      students.shift(); // leave
      skip = 0; // reset join back count ( A student can skip all sandwiches again)
    } else {
      students.push(students.shift());
      skip++;
      if (skip == sandwiches.length) {
        break;
      }
    }
  }

  return skip;

  */
};
