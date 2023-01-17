pub struct Solution;

use std::cmp::Ordering;

impl Solution {
    pub fn array_sign(nums: Vec<i32>) -> i32 {
        nums.into_iter()
            .try_fold(1, |acc, n| match n.cmp(&0) {
                Ordering::Less => Some(-acc),
                Ordering::Equal => None,
                Ordering::Greater => Some(acc),
            })
            .unwrap_or(0)
    }
}
fn main() {}
