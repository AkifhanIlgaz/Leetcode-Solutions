pub struct Solution {}

impl Solution {
    pub fn to_lower_case(s: String) -> String {
        // String::from_utf8(
        //     s.as_bytes()
        //         .iter()
        //         .map(|&c| c + if c >= b'A' && c <= b'Z' { 32 } else { 0 })
        //         .collect(),
        // )
        // .unwrap()

        s.chars()
            .map(|ch| ch.to_ascii_lowercase())
            .collect::<String>()

        // s.to_ascii_lowercase()
    }
}
fn main() {}
