struct Solution {}

use std::collections::{HashMap, HashSet};

impl Solution {
    pub fn unique_occurrences(arr: Vec<i32>) -> bool {
        let mut occurrences = HashMap::new();

        for num in arr {
            *occurrences.entry(num).or_insert(0) += 1;
        }

        let values: Vec<i32> = occurrences.into_values().collect();

        !Self::contains_duplicate(values)
    }

    pub fn contains_duplicate(arr: Vec<i32>) -> bool {
        let mut set = HashSet::new();

        for num in arr {
            match set.get(&num) {
                Some(_T) => return true,
                None => set.insert(num),
            };
        }

        false
    }
}

fn main() {}
