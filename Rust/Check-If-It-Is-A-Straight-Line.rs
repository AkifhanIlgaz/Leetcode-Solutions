struct Solution;

use std::f64::{INFINITY, NEG_INFINITY};

impl Solution {
    pub fn check_straight_line(coordinates: Vec<Vec<i32>>) -> bool {
        let slope = Self::calculate_slope(
            &coordinates[coordinates.len() - 2],
            coordinates.last().unwrap(),
        );
        dbg!(slope);

        for index in 0..(coordinates.len() - 1) {
            dbg!(index);
            let point = &coordinates[index];
            let point2 = &coordinates[index + 1];

            if Self::calculate_slope(point, point2) != slope {
                return false;
            }
        }
        true
    }

    pub fn another_check_straight_line(coordinates: Vec<Vec<i32>>) -> bool {
        coordinates.len() < 3 || {
            let x0 = coordinates[0][0];
            let y0 = coordinates[0][1];
            let dx = coordinates[1][0] - x0;
            let dy = coordinates[1][1] - y0;
            // Checking (yi - y0)/(xi - x0) == (y1 - y0)/(x1 - x0)
            // => (yi - y0)*(x1 - x0) == (y1 - y0)*(xi - x0)
            coordinates[2..]
                .iter()
                .all(|c| (c[1] - y0) * dx == dy * (c[0] - x0))
        }
    }

    pub fn calculate_slope(point1: &Vec<i32>, point2: &Vec<i32>) -> f64 {
        let y = point2[1] - point1[1];
        let x = point2[0] - point1[0];

        match y as f64 / x as f64 {
            INFINITY | NEG_INFINITY => INFINITY,
            value => value,
        }
    }
}
fn main() {}
