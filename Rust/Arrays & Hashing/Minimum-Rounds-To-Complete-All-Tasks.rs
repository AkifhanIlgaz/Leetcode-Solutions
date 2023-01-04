pub struct Solution;

use std::collections::HashMap;

impl Solution {
    pub fn minimum_rounds(tasks: Vec<i32>) -> i32 {
        let mut map = HashMap::new();
        let mut res = 0.;

        for task in tasks {
            *map.entry(task).or_insert(0) += 1;
        }

        for (_, count) in map {
            if count <= 1 {
                return -1;
            }

            res += (count as f64 / 3.).ceil();
        }
        res as i32
    }
}
fn main() {}
