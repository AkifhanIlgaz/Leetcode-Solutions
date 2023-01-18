pub struct Solution {}

impl Solution {
    pub fn max_sub_array(nums: Vec<i32>) -> i32 {
        let mut current_sum = 0;
        let mut max_sum = nums[0];

        for num in nums {
            if current_sum < 0 {
                current_sum = 0
            }
            current_sum += num;
            max_sum = i32::max(max_sum, current_sum)
        }

        max_sum
    }
}
fn main() {}
