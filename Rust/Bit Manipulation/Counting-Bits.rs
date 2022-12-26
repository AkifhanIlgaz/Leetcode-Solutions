pub struct Solution {}

impl Solution {
    pub fn count_bits(n: i32) -> Vec<i32> {
        let mut dp = vec![0; n as usize + 1];
        let mut offset = 1;

        for i in 1..n as usize + 1 {
            if offset * 2 == i {
                offset = i;
            }
            dp[i] = 1 + dp[i - offset]
        }
        dp
        
        // (0..=n)
        //     .map(|num| num.count_ones() as i32)
        //     .collect::<Vec<i32>>()
    }
}

fn main() {}
