const calculate = function (s) {
  const isDigit = (ch) => ch >= "0" && ch <= "9";

  let ans = 0, // ans starts with 0,
    sign = 1, // and sign starts with 1
    n = s.length;
  const stk = []; // record current ans when meet left paren
  for (let i = 0; i < n; i += 1) {
    const ch = s[i];
    if (isDigit(ch)) {
      // get the current number
      let num = 0;
      while (i < n && isDigit(s[i])) {
        num = num * 10 + (s[i] - "0");
        i += 1;
      }
      ans += sign * num; // directly adding to result
      i -= 1; // i passed the last digit above, go back
    } else if (ch == "+") {
      sign = 1;
    } else if (ch == "-") {
      sign = -1;
    } else if (ch == "(") {
      // meet a left paren,
      stk.push(ans); // push tmp result and
      stk.push(sign); // sign to stack,
      ans = 0; // also, reset result and
      sign = 1; // sign, so a new "scope" starts
    } else if (ch == ")") {
      // update result when coming out of a scope
      ans *= stk.pop(); // by setting the sign first, then
      ans += stk.pop(); // add previous result
    }
  }
  return ans;
};
