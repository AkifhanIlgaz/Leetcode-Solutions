pub struct Solution;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    pub fn leaf_similar(
        root1: Option<Rc<RefCell<TreeNode>>>,
        root2: Option<Rc<RefCell<TreeNode>>>,
    ) -> bool {
        fn found_leaves(root: &Option<Rc<RefCell<TreeNode>>>, vec: &mut Vec<i32>) {
            if let Some(current) = root {
                let current = current.borrow();
                if current.left.is_none() && current.right.is_none() {
                    vec.push(current.val);
                } else {
                    found_leaves(&current.left, vec);
                    found_leaves(&current.right, vec);
                }
            }
        }

        let (mut leaves1, mut leaves2) = (vec![], vec![]);
        found_leaves(&root1, &mut leaves1);
        found_leaves(&root2, &mut leaves2);

        leaves1.eq(&leaves2)
    }
}
fn main() {}
