pub struct Solution {}

impl Solution {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        let mut res = nums.len();
        for (i, &val) in nums.iter().enumerate() {
            res += i - val as usize;
        }
        res as i32
        // (1..=nums.len() as i32).sum::<i32>() - nums.iter().sum::<i32>()
    }
}
fn main() {}
