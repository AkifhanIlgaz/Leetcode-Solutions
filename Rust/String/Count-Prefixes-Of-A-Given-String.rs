pub struct Solution {}

impl Solution {
    pub fn count_prefixes(words: Vec<String>, s: String) -> i32 {
        words.iter().filter(|&word| s.starts_with(word)).count() as i32
    }
}
fn main() {}
