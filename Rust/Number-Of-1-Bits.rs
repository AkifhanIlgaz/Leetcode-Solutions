pub struct Solution {}

impl Solution {
    pub fn hammingWeight(n: u32) -> i32 {
        let mut result = 0;
        let mut n = n;

        for _ in 0..32 {
            result += (n % 2) as i32;
            n >>= 1;
        }

        result

        //  n.count_ones() as i32
    }
}

fn main() {}
