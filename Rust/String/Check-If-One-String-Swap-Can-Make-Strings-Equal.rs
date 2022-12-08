pub struct Solution;

impl Solution {
    pub fn are_almost_equal(s1: String, s2: String) -> bool {
        let vec: Vec<_> = s1
            .chars()
            .zip(s2.chars())
            .filter(|(c1, c2)| c1 != c2)
            .collect();

        match vec.len() {
            0 => true,
            2 => vec[0].0 == vec[1].1 && vec[0].1 == vec[1].0,
            _ => false,
        }

        // let mut s1_array: [u8; 26] = [0; 26];
        // let mut s2_array: [u8; 26] = [0; 26];

        // let mut counter = 0;

        // let s1 = s1.as_bytes();
        // let s2 = s2.as_bytes();

        // for index in 0..s1.len() {
        //     let char1 = s1[index];
        //     let char2 = s2[index];

        //     if char1 != char2 {
        //         counter += 1;
        //     }

        //     if counter > 2 {
        //         return false;
        //     }

        //     s1_array[(char1 - b'a') as usize] += 1;
        //     s2_array[(char2 - b'a') as usize] += 1;
        // }

        // s1_array
        //     .iter()
        //     .enumerate()
        //     .all(|(index, val)| *val == s2_array[index])
    }
}
fn main() {}
