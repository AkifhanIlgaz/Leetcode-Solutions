pub struct Solution {}

impl Solution {
    pub fn reverse_bits(x: u32) -> u32 {
        let mut res = 0;
        for i in 0..32 {
            let bit = (x >> i) & 1;
            res += bit << (31 - i)
        }
        res
        //x.reverse_bits()
    }
}

fn main() {}
