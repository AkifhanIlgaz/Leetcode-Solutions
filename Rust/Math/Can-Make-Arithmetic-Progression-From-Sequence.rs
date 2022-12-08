pub struct Solution;

impl Solution {
    pub fn can_make_arithmetic_progression(arr: Vec<i32>) -> bool {
        if arr.len() == 2 {
            return true;
        }

        let mut arr = arr;
        arr.sort();

        let difference = arr[1] - arr[0];
        arr.iter().enumerate().all(|(index, val)| {
            if index <= arr.len() - 2 && arr[index + 1] - *val != difference {
                return false;
            }
            true
        })
    }
}
fn main() {}
