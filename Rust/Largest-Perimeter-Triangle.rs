pub struct Solution;

impl Solution {
    pub fn largest_perimeter(nums: Vec<i32>) -> i32 {
        let mut nums = nums;
        nums.sort_by(|a, b| b.partial_cmp(a).unwrap());

        let mut max_perimeter = 0;

        for (index, length) in nums.iter().enumerate() {
            if index < nums.len() - 2 && *length < nums[index + 1] + nums[index + 2] {
                max_perimeter = max_perimeter.max(*length + nums[index + 1] + nums[index + 2]);
                break;
            }
        }

        max_perimeter
    }
}

fn main() {}
