pub struct Solution;

struct StockSpanner {
    stack: Vec<(i32, i32)>, // (price, span)
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl StockSpanner {
    fn new() -> Self {
        Self { stack: vec![] }
    }

    fn next(&mut self, price: i32) -> i32 {
        let mut span = 1;

        while !self.stack.is_empty() && self.stack.last().unwrap().0 <= price {
            span += self.stack.pop().unwrap().1;
        }
        self.stack.push((price, span));
        span
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * let obj = StockSpanner::new();
 * let ret_1: i32 = obj.next(price);
 */
fn main() {}
