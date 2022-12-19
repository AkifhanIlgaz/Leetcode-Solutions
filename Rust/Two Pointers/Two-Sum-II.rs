struct Solution;

impl Solution {
    pub fn two_sum(numbers: Vec<i32>, target: i32) -> Vec<i32> {
        let (mut left, mut right) = (0, numbers.len() - 1);
        loop {
            let sum = numbers[left] + numbers[right];
            if sum < target {
                left += 1;
            } else if sum > target {
                right -= 1;
            } else {
                return vec![(left + 1) as i32, (right + 1) as i32];
            }
        }
    }
}

fn main() {}
