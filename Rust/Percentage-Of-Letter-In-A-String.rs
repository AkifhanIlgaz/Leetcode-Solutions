pub struct Solution {}

impl Solution {
    pub fn percentage_letter(s: String, letter: char) -> i32 {
        let mut count = 0;

        for ch in s.chars() {
            if ch == letter {
                count += 1;
            }
        }

        ((count * 100) / s.len()) as i32
    }
}
fn main() {}
