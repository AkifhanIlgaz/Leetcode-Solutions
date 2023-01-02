pub struct Solution;

impl Solution {
    pub fn detect_capital_use(word: String) -> bool {
        word.chars().skip(1).all(|x| x.is_lowercase()) || // For lowercase, first letter doesn't matter
                 word.chars().all(|x| x.is_uppercase())
    }
}
fn main() {}
