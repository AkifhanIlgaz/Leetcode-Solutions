impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        let s_chars: Vec<char> = s
            .chars()
            .filter(|x| x.is_ascii_alphanumeric())
            .map(|x| x.to_ascii_lowercase())
            .collect();

        let compare_1: String = s_chars.iter().collect();
        let compare_2: String = s_chars.iter().rev().collect();

        compare_1 == compare_2

        // if s.len() == 0 {
        //     return false;
        // }

        // let s = s.to_lowercase();
        // let s = s.as_bytes();
        // let n = s.len();

        // let (mut left, mut right) = (0, n - 1);

        // while left < right {
        //     while left < right && !s[left].is_ascii_alphanumeric() {
        //         left += 1;
        //     }

        //     while left < right && !s[right].is_ascii_alphanumeric() {
        //         right -= 1;
        //     }

        //     if s[left] != s[right] {
        //         return false;
        //     }

        //     left += 1;
        //     if right != 0 {
        //         right -= 1;
        //     }
        // }

        // true
    }
}
