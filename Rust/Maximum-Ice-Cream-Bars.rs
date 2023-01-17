pub struct Solution;

impl Solution {
    pub fn max_ice_cream(costs: Vec<i32>, coins: i32) -> i32 {
        let mut costs: Vec<i32> = costs;
        costs.sort();
        let mut coins = coins;
        let mut round = 0;

        for cost in costs {
            if coins < cost {
                break;
            }
            round += 1;
            coins -= cost;
        }
        round
    }
}
fn main() {}
