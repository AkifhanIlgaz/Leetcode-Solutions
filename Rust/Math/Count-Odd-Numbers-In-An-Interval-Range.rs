pub struct Solution;

impl Solution {
    pub fn count_odds(low: i32, high: i32) -> i32 {
        let mut result = (high - low) / 2;

        if low % 2 != 0 || high % 2 != 0 {
            result += 1;
        }

        result
    }
}

fn main() {}
