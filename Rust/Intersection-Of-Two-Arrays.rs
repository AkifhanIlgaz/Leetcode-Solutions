impl Solution {
    pub fn intersection(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        let mut nums_map = HashSet::new();
        let mut intersection_of_nums = Vec::new();

        for num in nums1 {
            nums_map.insert(num);
        }

        for num in nums2 {
            if nums_map.contains(&num) {
                intersection_of_nums.push(num);
                nums_map.remove(&num);
            }
        }

        intersection_of_nums
    }
}
