struct Solution;

impl Solution {
    pub fn sum_odd_length_subarrays(arr: Vec<i32>) -> i32 {
        let prefix_sum_array = Self::prefix_sum(&arr);

        let mut result = 0;
        for start in 0..prefix_sum_array.len() {
            let mut end = start;
            while end < prefix_sum_array.len() {
                result += Self::sum_between(start, end, &prefix_sum_array);
                end += 2;
            }
        }
        result
    }

    pub fn prefix_sum(vec: &Vec<i32>) -> Vec<i32> {
        let mut result = vec![0; vec.len()];
        result[0] = vec[0];

        for i in 1..vec.len() {
            result[i] = result[i - 1] + vec[i];
        }

        result
    }

    pub fn sum_between(start: usize, end: usize, prefix_sum_arr: &Vec<i32>) -> i32 {
        prefix_sum_arr[end] - prefix_sum_arr.get(start - 1).unwrap_or(&0)
    }
}
fn main() {}
