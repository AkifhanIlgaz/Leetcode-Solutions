use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn postorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        fn postorder(node: &Option<Rc<RefCell<TreeNode>>>, result: &mut Vec<i32>) {
            if let Some(v) = node {
                let v = v.borrow();               
                postorder(&v.left, result);    
                postorder(&v.right, result);
                result.push(v.val);
            }
        }

        let mut result = vec![];
        if let Some(v) = root {
            postorder(&Some(v), &mut result);
        }
        result  
    }
}