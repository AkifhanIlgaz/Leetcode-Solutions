pub struct Solution {}

use std::collections::HashSet;
impl Solution {
    pub fn halves_are_alike(s: String) -> bool {
        let middle = s.len() / 2;

        Self::count_vowels(&s[..middle]) == Self::count_vowels(&s[middle..])
    }

    pub fn count_vowels(s: &str) -> i32 {
        let mut set = HashSet::new();
        for ch in vec!['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'] {
            set.insert(ch);
        }

        let mut count = 0;

        for letter in s.chars() {
            if set.contains(&letter) {
                count += 1;
            }
        }

        count
    }
}

fn main() {}
