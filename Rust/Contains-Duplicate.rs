use std::collections::HashSet;
pub struct Solution {}

impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        let mut set: HashSet<i32> = HashSet::new();

        for num in nums {
            match set.get(&num) {
                Some(_T) => return true,
                None => set.insert(num),
            };
        }
        false
    }

    /*
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        let mut set: HashSet<i32> = HashSet::new();

        for num in nums {
            if set.contains(&num) {
                return true;
            }

            set.insert(num);
        }
        false
    }
    */
}

fn main() {}
