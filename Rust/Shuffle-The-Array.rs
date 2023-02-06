pub struct Solution {}

impl Solution {
    pub fn shuffle(nums: Vec<i32>, n: i32) -> Vec<i32> {
        let (first, second) = nums.split_at(n as usize);

        first
            .into_iter()
            .zip(second.into_iter())
            .flat_map(|(&x, &y)| vec![x, y])
            .collect()
    }

    pub fn shuffle_extend(nums: Vec<i32>, n: i32) -> Vec<i32> {
        let mut result = Vec::new();

        for i in 0..n {
            result.extend([nums[i as usize], nums[(i + n) as usize]])
        }

        result
    }
}
fn main() {}
