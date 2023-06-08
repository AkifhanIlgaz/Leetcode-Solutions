impl Solution {
    pub fn count_negatives(grid: Vec<Vec<i32>>) -> i32 {
        let mut count = 0;

        for outer in grid {
            for num in outer {
                if num.is_negative() {
                    count += 1
                }
            }
        }
        count
    }
}
