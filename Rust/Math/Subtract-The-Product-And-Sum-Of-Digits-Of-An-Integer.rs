pub struct Solution {}

impl Solution {
    pub fn subtract_product_and_sum(n: i32) -> i32 {
        let n = n.to_string();
        let (mut sum, mut product) = (0, 1);
        for number in n.chars() {
            let num = number.to_digit(10).unwrap();
            sum += num;
            product *= num;
        }

        (product - sum) as i32
    }
}
fn main() {}
