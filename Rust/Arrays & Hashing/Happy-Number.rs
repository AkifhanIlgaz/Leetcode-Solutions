pub struct Solution;

use std::collections::HashSet;

impl Solution {
    pub fn is_happy(n: i32) -> bool {
        let mut set = HashSet::new();
        let mut n = n;

        while n != 1 {
            if set.contains(&n) {
                return false;
            }
            set.insert(n);
            n = Self::new_number(n);
        }
        true
    }

    pub fn new_number(mut n: i32) -> i32 {
        let mut new = 0;

        while n >= 1 {
            new += (n % 10).pow(2);
            n /= 10;
        }

        new
    }
}
fn main() {}
