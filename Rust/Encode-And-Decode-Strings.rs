struct Solution;

impl Solution {
    pub fn encode(strs: Vec<String>) -> String {
        strs.iter()
            .map(|str| format!("{}#{}", str.len(), str))
            .collect()
    }

    pub fn decode(str: String) -> Vec<String> {
        let mut decoded_words = vec![];
        let str_as_bytes = str.as_bytes();
        let mut i = 0;
        while i < str.len() {
            let mut j = i;
            while str_as_bytes[j] != b'#' {
                j += 1;
            }
            let len = &str[i..j].to_string().parse().unwrap();

            let word = &str[j + 1..j + len + 1].to_string();
            decoded_words.push(word.clone());
            i = j + 1 + len;
        }

        decoded_words
    }
}

fn main() {}
