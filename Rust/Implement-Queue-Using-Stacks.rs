struct MyQueue {
    input_stack: Vec<i32>,
    output_stack: Vec<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MyQueue {
    fn new() -> Self {
        Self {
            input_stack: Vec::new(),
            output_stack: Vec::new(),
        }
    }

    fn push(&mut self, x: i32) {
        self.input_stack.push(x);
    }

    fn pop(&mut self) -> i32 {
        if self.output_stack.is_empty() {
            while let Some(x) = self.input_stack.pop() {
                self.output_stack.push(x);
            }
        }

        self.output_stack.pop().unwrap()
    }

    fn peek(&self) -> i32 {
        if !self.output_stack.is_empty() {
            return self.output_stack.last().cloned().unwrap();
        } else {
            return self.input_stack.first().cloned().unwrap();
        }
    }

    fn empty(&self) -> bool {
        self.input_stack.is_empty() && self.output_stack.is_empty()
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * let obj = MyQueue::new();
 * obj.push(x);
 * let ret_2: i32 = obj.pop();
 * let ret_3: i32 = obj.peek();
 * let ret_4: bool = obj.empty();
 */

fn main() {}
