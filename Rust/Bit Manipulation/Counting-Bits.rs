pub struct Solution {}

impl Solution {
    pub fn count_bits(n: i32) -> Vec<i32> {
        (0..=n)
            .map(|num| num.count_ones() as i32)
            .collect::<Vec<i32>>()
    }
}

fn main() {}
