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
/*
struct Solution;

impl Solution {
    pub fn can_visit_all_rooms(rooms: Vec<Vec<i32>>) -> bool {
        let mut keys: Vec<usize> = vec![0];
        let mut visited: Vec<bool> = vec![false; rooms.len()];
        let mut rooms: Vec<Vec<usize>> = rooms
            .iter()
            .map(|room| room.iter().map(|x| *x as usize).collect::<Vec<usize>>())
            .collect();
        while let Some(room) = keys.pop() {
            if !visited[room] {
                visited[room] = true;
                keys.append(&mut rooms[room]);
            }
        }
        visited.iter().all(|x| *x == true)
    }
}
fn main() {}


*/
