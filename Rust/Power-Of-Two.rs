impl Solution {
    pub fn is_power_of_two(n: i32) -> bool {
        if n == 0 {
            return false;
        }

        let mut n = n;

        while n % 2 == 0 {
            n = n >> 1;
        }

        n == 1
    }
}
