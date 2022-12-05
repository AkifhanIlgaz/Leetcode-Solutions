pub struct Solution {}

impl Solution {
    pub fn average(salary: Vec<i32>) -> f64 {
        let (mut min, mut max, mut sum) = (i32::MAX, 0, 0);

        for sal in salary.iter() {
            sum += sal;
            min = min.min(*sal);
            max = max.max(*sal);
        }

        (sum - min - max) as f64 / (salary.len() as f64 - 2.)
    }
}

fn main() {}
