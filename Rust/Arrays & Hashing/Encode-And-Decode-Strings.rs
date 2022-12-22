struct Solution;

impl Solution {
    pub fn encode(strs: Vec<String>) -> String {
        strs.iter()
            .map(|str| format!("{}#{}", str.len(), str))
            .collect()
    }

    pub fn decode(str: String) -> Vec<String> {
        let mut decoded_words = vec![];
        let str = str.as_bytes().to_vec();
        let mut i = 0;
        while i < str.len() {
            let mut j = i;
            while str[j] != b'#' {
                j += 1;
            }
            let len: usize = String::from_utf8_lossy(&str[i..j])
                .to_string()
                .parse()
                .unwrap();

            let word = &str[j + 1..j + len + 1];
            decoded_words.push(word);
            i = j + 1 + len
        }

        decoded_words
            .iter()
            .map(|word| String::from_utf8(word.to_vec()).unwrap())
            .collect()
    }
}

fn main() {}
