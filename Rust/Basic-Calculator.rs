pub struct Solution {}

impl Solution {
    pub fn calculate(s: String) -> i32 {
        let (mut ans, mut sign, n) = (0i32, 1i32, s.len());
        let s: Vec<char> = s.chars().collect();
        let mut stack: Vec<_> = Vec::new();

        let mut i: usize = 0;

        while i < n {
            let ch = s[i];

            if ch.is_digit(10) {
                let mut num: i32 = 0;
                while i < n && s[i].is_digit(10) {
                    num = num * 10 + (s[i] as u8 - b'0') as i32;
                    i += 1;
                }

                ans += sign * num;
                i -= 1;
            } else if ch == '+' {
                sign = 1;
            } else if ch == '-' {
                sign = -1;
            } else if ch == '(' {
                stack.push(ans);
                stack.push(sign);
                ans = 0;
                sign = 1;
            } else if ch == ')' {
                ans *= stack.pop().unwrap();
                ans += stack.pop().unwrap();
            }
            i += 1;
        }
        ans
    }
}
fn main() {}
