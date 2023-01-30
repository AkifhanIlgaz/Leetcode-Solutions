pub struct Solution {}

// impl Solution {
//     pub fn tribonacci(n: i32) -> i32 {
//         let mut tribonacci = vec![0, 1, 1];

//         while (n as usize) >= tribonacci.len() - 1 {
//             tribonacci.push(tribonacci.iter().rev().take(3).sum::<i32>());
//         }

//         tribonacci[n as usize]
//     }
// }

impl Solution {
    pub fn tribonacci(n: i32) -> i32 {
        let mut t = [0, 1, 1];

        if n <= 2 {
            return t[n as usize];
        }

        for i in 3..(n + 1) as usize {
            t.swap(0, 1);
            t.swap(1, 2);
            t[2] = t.iter().sum();
        }

        t[2]
    }
}

fn main() {}
