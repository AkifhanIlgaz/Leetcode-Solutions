pub struct Solution {}

impl Solution {
    pub fn maximum_bags(capacity: Vec<i32>, rocks: Vec<i32>, additional_rocks: i32) -> i32 {
        let mut difference: Vec<i32> = capacity
            .iter()
            .zip(rocks.iter())
            .map(|(a, b)| a - b)
            .collect();

        difference.sort();
        let mut count = 0;
        let mut additional_rocks = additional_rocks;
        for diff in difference {
            if diff <= additional_rocks {
                count += 1;
                additional_rocks -= diff
            }
        }
        count
    }
}
fn main() {}
