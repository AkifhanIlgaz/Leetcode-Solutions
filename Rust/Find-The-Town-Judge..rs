pub struct Solution {}

impl Solution {
    pub fn find_judge(n: i32, trust: Vec<Vec<i32>>) -> i32 {
        if n == 1 {
            return n;
        }
        let mut trusted_by = std::collections::HashMap::new();

        for t in trust {
            let (a, b) = (t[0], t[1]);
            *trusted_by.entry(a).or_insert(0) -= 1;
            *trusted_by.entry(b).or_insert(0) += 1;
        }

        trusted_by
            .into_iter()
            .find(|&(_, count)| count == n - 1)
            .map_or(-1, |(i, _)| i)
    }
}

fn main() {}
