impl Solution {
    pub fn largest_altitude(gain: Vec<i32>) -> i32 {
        let mut current_altitude = 0;
        let mut max_altitude = 0;

        for change in gain {
            current_altitude += change;
            max_altitude = std::cmp::max(max_altitude, current_altitude)
        }

        max_altitude
    }
}

// 28.06.2023