use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn preorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
           fn preorder(node: &Option<Rc<RefCell<TreeNode>>>, result: &mut Vec<i32>) {
            if let Some(v) = node {
                let v = v.borrow();
                 result.push(v.val);
                preorder(&v.left, result);    
                preorder(&v.right, result);
            }
        }

        let mut result = vec![];
        if let Some(v) = root {
            preorder(&Some(v), &mut result);
        }
        result  
    }
}