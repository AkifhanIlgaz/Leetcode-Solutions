impl Solution {
    pub fn is_power_of_four(n: i32) -> bool {
        if n == 0 {
            return false;
        }

        let mut n = n;

        while n % 4 == 0 {
            n = n >> 2;
        }

        n == 1
    }
}
