pub struct Solution;

impl Solution {
    pub fn min_deletion_size(strs: Vec<String>) -> i32 {
        let mut count = 0;

        for i in 0..strs[0].len() {
            if !strs
                .iter()
                .map(|s| s.as_bytes()[i])
                .collect::<Vec<u8>>()
                .windows(2)
                .all(|pair| pair[0] <= pair[1])
            {
                count += 1
            }
        }

        count
    }

    /*
    impl Solution {
        pub fn min_deletion_size(strs: Vec<String>) -> i32 {
            let mut count = 0;

            for index in 0..strs[0].len() {
                for i in 1..strs.len() {
                    if strs[i].as_bytes()[index] < strs[i - 1].as_bytes()[index] {
                        count += 1;
                        break;
                    }
                }
            }
            count
        }
    }
    */
}
fn main() {}
