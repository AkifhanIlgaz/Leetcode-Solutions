struct Solution;

impl Solution {
    pub fn sort_by_bits(arr: Vec<i32>) -> Vec<i32> {
        let mut arr = arr;
        arr.sort_by(|a, b| {
            if a.count_ones() == b.count_ones() {
                return a.partial_cmp(b).unwrap();
            } else {
                return a.count_ones().partial_cmp(&b.count_ones()).unwrap();
            }
        });
        arr
    }
}

fn main() {}
