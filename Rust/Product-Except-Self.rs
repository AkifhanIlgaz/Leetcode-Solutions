struct Solution {}

impl Solution {
    pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
        let mut result = vec![1; nums.len()];

        let mut prefix: i32 = 1;

        for i in 0..result.len() {
            result[i] = prefix;
            prefix *= nums[i];
        }

        let mut postfix = 1;

        for i in (0..result.len()).rev() {
            result[i] *= postfix;
            postfix *= nums[i];
        }

        result
    }
}

fn main() {
    let x = [1, 2, 3, 4].to_vec();

    dbg!(Solution::product_except_self(x));
}
