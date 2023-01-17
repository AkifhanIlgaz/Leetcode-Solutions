struct Solution;

impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let (mut result, mut left, mut right) = (0, 0, height.len() - 1);

        while left < right {
            let container = height[left].min(height[right]) * (right - left) as i32;
            result = result.max(container);
            if height[left] < height[right] {
                left += 1;
            } else {
                right -= 1;
            }
        }

        result
    }
}
fn main() {}
