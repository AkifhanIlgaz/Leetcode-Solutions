struct Solution;

use std::cmp::Ordering;

impl Solution {
    pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut nums = nums;
        nums.sort();

        let mut result = Vec::new();
        for (i, a) in nums.iter().enumerate() {
            if i > 0 && *a == nums[i - 1] {
                continue;
            }

            let (mut left, mut right) = (i + 1, nums.len() - 1);

            while left < right {
                let three_sum = *a + nums[left] + nums[right];
                match three_sum.cmp(&0) {
                    Ordering::Greater => right -= 1,
                    Ordering::Less => left += 1,
                    Ordering::Equal => {
                        result.push(vec![*a, nums[left], nums[right]]);
                        left += 1;
                        while nums[left] == nums[left - 1] && left < right {
                            left += 1;
                        }
                    }
                }
            }
        }
        result
    }
}

fn main() {}
