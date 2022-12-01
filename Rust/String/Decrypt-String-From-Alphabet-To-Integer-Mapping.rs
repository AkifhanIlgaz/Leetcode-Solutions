pub struct Solution {}

impl Solution {
    pub fn freq_alphabets(s: String) -> String {
        let s = s.as_bytes();

        let n = s.len();

        let mut result = String::new();

        let mut i = 0;

        while i < n {
            let code: u8;

            if s.get(i + 2).is_some() && s[i + 2] == b'#' {
                println!("{}   {}", s[i], b'0');
                code = ((s[i] - b'0') * 10) + s[i + 1];
                i += 3;
            } else {
                code = s[i];
                i += 1
            }

            result.push(char::from(97 + code - b'1'));
        }
        result
    }
}

fn main() {
    Solution::freq_alphabets("10#11#12".to_string());
}
