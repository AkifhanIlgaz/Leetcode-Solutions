class Solution {
  List<int> twoSum(List<int> nums, int target) {
    var numsMap = Map<int, int>();

    for (int i = 0; i < nums.length; i++) {
      var diff = target - nums[i];
      if (numsMap.containsKey(diff)) return [numsMap[diff]!, i];
      numsMap[nums[i]] = i;
    }

    throw "";
  }
}
