struct Solution;

impl Solution {
    pub fn can_visit_all_rooms(rooms: Vec<Vec<i32>>) -> bool {
        let mut count = 1;
        let mut keys: Vec<usize> = vec![0];
        let mut visited: Vec<bool> = vec![false; rooms.len()];

        visited[0] = true;

        while let Some(room) = keys.pop() {
            for key in rooms[room].iter().map(|key| *key as usize) {
                if !visited[key] {
                    count += 1;
                    if count == rooms.len() {
                        return true;
                    }
                    visited[key] = true;
                    keys.push(key);
                }
            }
        }
        false
    }
}
fn main() {}
