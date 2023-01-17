pub struct Solution;

#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

impl Solution {
    pub fn get_decimal_value(head: Option<Box<ListNode>>) -> i32 {
        let mut result = String::new();
        let mut head = head;
        while head.as_ref().is_some() {
            result += &head.as_ref().unwrap().val.to_string();
            head = head.unwrap().next;
        }

        i32::from_str_radix(&result, 2).unwrap()
    }
}

fn main() {}
