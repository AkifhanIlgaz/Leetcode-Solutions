pub struct Solution;

impl Solution {
    pub fn min_deletion_size(strs: Vec<String>) -> i32 {
        let mut count = 0;

        for i in 0..strs[0].len() {
            if !strs
                .iter()
                .map(|s| s.as_bytes()[i])
                .collect::<Vec<u8>>()
                .windows(2)
                .all(|pair| pair[0] <= pair[1])
            {
                count += 1
            }
        }

        count
    }
}
fn main() {}
