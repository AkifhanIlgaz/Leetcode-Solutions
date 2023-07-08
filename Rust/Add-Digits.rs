impl Solution {
    pub fn add_digits(num: i32) -> i32 {
        if num < 10 {
            return num;
        }

        Solution::add_digits(Solution::sum_of_digits(num))
    }

    pub fn sum_of_digits(mut num: i32) -> i32 {
        let mut sum = 0;

        while num > 0 {
            sum += num % 10;
            num /= 10;
        }

        sum
    }
}
