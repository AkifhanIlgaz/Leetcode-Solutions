pub struct Solution;

impl Solution {
    pub fn nearest_valid_point(x: i32, y: i32, points: Vec<Vec<i32>>) -> i32 {
        let mut valid_points: Vec<Vec<i32>> = points
            .iter()
            .filter(|&point| point[0] == x || point[1] == y)
            .cloned()
            .collect();

        if valid_points.is_empty() {
            return -1;
        }

        // valid_points.sort_by(|point1, point2| {
        //     let manhattan1 = Self::manhattan_distance(x, y, point1);
        //     let manhattan2 = Self::manhattan_distance(x, y, point2);
        //     manhattan1.cmp(&manhattan2)
        // });

        valid_points.sort_by_key(|point| Self::manhattan_distance(x, y, point));

        println!("{:?}", valid_points);
        points.iter().position(|x| x.eq(&valid_points[0])).unwrap() as i32
    }

    pub fn manhattan_distance(x: i32, y: i32, point: &Vec<i32>) -> i32 {
        (x - point[0]).abs() + (y - point[1]).abs()
    }
}
fn main() {
    let result =
        Solution::nearest_valid_point(5, 1, vec![vec![1, 1], vec![6, 2], vec![1, 5], vec![3, 1]]);

    let x = Solution::nearest_valid_point(
        3,
        4,
        vec![vec![1, 2], vec![3, 1], vec![2, 4], vec![2, 3], vec![4, 4]],
    );
    dbg!(result);
    dbg!(x);
}
