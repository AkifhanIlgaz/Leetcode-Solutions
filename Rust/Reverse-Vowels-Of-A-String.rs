struct Solution;

use std::collections::HashSet;

impl Solution {
    pub fn reverse_vowels(s: String) -> String {
        let (mut left, mut right) = (0, s.len() - 1);
        let mut s: Vec<char> = s.chars().collect();
        while left < right {
            while left < s.len() && !Self::is_vowel(s[left]) {
                left += 1;
            }

            while right > 0 && !Self::is_vowel(s[right]) {
                right -= 1;
            }

            if left < right {
                s.swap(left, right);
                left += 1;

                right -= 1;
            }
        }

        return s.into_iter().collect::<String>();
    }

    pub fn is_vowel(ch: char) -> bool {
        let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        let mut set = HashSet::from(vowels);

        set.contains(&ch)
    }
}

fn main() {}
