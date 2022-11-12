use std::collections::HashMap;

struct Solution {};

impl Solution {
    pub fn group_anagrams(strs: Vec<String>)->Vec<Vec<String>> {
        let mut group_anagrams = HashMap::new();

        for s in strs {
            let mut counter = [0u8; 26];

            for &byte in s.as_bytes() {
                counter[(byte - b'a') as usize] +=1;
            }

            group_anagrams.entry(counter).or_insert_with(Vec::new).push(s);
        }

        group_anagrams.into_values().collect()

    }
}

fn main() {
    


}
