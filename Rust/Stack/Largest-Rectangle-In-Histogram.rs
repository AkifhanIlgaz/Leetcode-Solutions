pub struct Solution;

impl Solution {
    pub fn largest_rectangle_area(heights: Vec<i32>) -> i32 {
        let mut stack: Vec<(usize, i32)> = vec![]; // (index, height)
        let mut max_area = 0;

        for (i, h) in heights.iter().enumerate() {
            let mut start = i;
            while !stack.is_empty() && *h <= stack.last().unwrap().1 {
                let (index, height) = stack.pop().unwrap();
                max_area = max_area.max(height * (i - index) as i32);
                start = index;
            }
            stack.push((start, *h));
        }

        for (i, h) in stack.iter() {
            max_area = max_area.max(h * (heights.len() - i) as i32);
        }

        max_area
    }
}
fn main() {}
