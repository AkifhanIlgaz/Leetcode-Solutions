pub struct Solution {}

impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        let mut chars_of_s = s.as_bytes().to_vec();
        chars_of_s.sort();

        let mut chars_of_t = t.as_bytes().to_vec();
        chars_of_t.sort();

        String::from_utf8(chars_of_s).eq(&String::from_utf8(chars_of_t))
    }
}

fn main() {
    println!(
        "{}",
        Solution::is_anagram("asd".to_string(), "dsa".to_string())
    );
}
