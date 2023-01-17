struct Solution;

impl Solution {
    pub fn is_subsequence(s: String, t: String) -> bool {
        let (mut s_pointer, mut t_pointer) = (0, 0);

        let s = s.as_bytes();
        let t = t.as_bytes();

        while t_pointer < t.len() && s_pointer < s.len() && t_pointer < t.len() {
            if s[s_pointer] == t[t_pointer] {
                s_pointer += 1;
            }

            t_pointer += 1;
        }

        s_pointer >= s.len()
    }
}

fn main() {}
