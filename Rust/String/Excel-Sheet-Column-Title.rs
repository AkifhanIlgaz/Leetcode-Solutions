pub struct Solution {}

impl Solution {
    pub fn convert_to_title(mut column_number: i32) -> String {
        let mut result = String::new();
        while column_number > 0 {
            column_number -= 1;
            result.insert(0, (65 + (column_number % 26) as u8) as char);
            column_number /= 26;
        }

        result
    }
}
fn main() {}
