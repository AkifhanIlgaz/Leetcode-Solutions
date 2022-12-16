struct NumArray {
    nums: Vec<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl NumArray {
    fn new(nums: Vec<i32>) -> Self {
        let mut prefix_sum = vec![0; nums.len()];
        prefix_sum[0] = nums[0];

        for (index, _) in nums.iter().enumerate().skip(1) {
            prefix_sum[index] = nums[index] + prefix_sum[index - 1];
        }
        Self { nums: prefix_sum }
    }

    fn sum_range(&self, left: i32, right: i32) -> i32 {
        self.nums[right as usize] - self.nums.get((left - 1) as usize).unwrap_or(&0)
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * let obj = NumArray::new(nums);
 * let ret_1: i32 = obj.sum_range(left, right);
 */
fn main() {}
