pub struct Solution {}

impl Solution {
    pub fn interpret(command: String) -> String {
        let mut result = String::new();
        let mut i = 0;

        let chars: Vec<char> = command.chars().collect();

        while i < command.len() {
            if chars[i] == 'G' {
                result.push_str("G");
            }

            if chars[i] == '(' {
                let x = if chars[i + 1] == ')' { "o" } else { "al" };

                result.push_str(x);
            }
            i += 1;
        }

        result
    }

    pub fn interpret_replace(command: String) -> String {
        command.replace("()", "o").replace("(al)", "al")
    }
}

fn main() {}
