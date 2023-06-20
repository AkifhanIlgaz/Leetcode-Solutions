impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        match haystack.find(&needle) {
            None => -1,
            Some(i) => i as i32,
        }
    }
}
