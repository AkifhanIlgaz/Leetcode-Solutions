struct Solution;

impl Solution {
    pub fn can_jump(nums: Vec<i32>) -> bool {
        let mut goal = nums.len() - 1;
        for (i, val) in nums.iter().enumerate().rev() {
            if i + *val as usize >= goal {
                goal = i;
            }
        }
        goal == 0
    }
}

fn main() {}
