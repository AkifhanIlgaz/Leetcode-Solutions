pub struct Solution;

impl Solution {
    pub fn rob(nums: Vec<i32>) -> i32 {
        let (mut rob1, mut rob2) = (0, 0);
        for num in nums {
            let temp = rob2.max(rob1 + num);
            rob1 = rob2;
            rob2 = temp;
        }
        rob2
    }
}

fn main() {}
