struct Solution;

impl Solution {
    pub fn move_zeroes(nums: &mut Vec<i32>) {
        let mut left = 0;

        for index in 0..nums.len() {
            if nums[index] != 0 {
                nums.swap(left, index);
                left += 1;
            }
        }

        /*
          let len = nums.len();
        nums.retain(|num| *num != 0);

        for _ in 0..(len - nums.len()) {
            nums.push(0);
        }
        */
    }
}

fn main() {}
