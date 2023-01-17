pub struct Solution {}

impl Solution {
    pub fn merge_alternately(word1: String, word2: String) -> String {
        let mut result = String::new();
        let (mut word1_count, mut word2_count) = (0, 0);
        word1
            .chars()
            .into_iter()
            .zip(word2.chars().into_iter())
            .for_each(|(first, second)| {
                word1_count += 1;
                word2_count += 1;
                result.push(first);
                result.push(second);
            });

        if word1_count < word1.len() {
            result.push_str(&word1[word1_count..]);
        }

        if word2_count < word2.len() {
            result.push_str(&word2[word2_count..]);
        }
        result
    }
}
fn main() {}
