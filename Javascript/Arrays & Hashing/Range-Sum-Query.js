/**
 * @param {number[]} nums
 */
class NumArray {
  constructor(nums) {
    this.prefixSum = new Array(nums.length);
    this.prefixSum[0] = nums[0];

    for (let i = 1; i < this.prefixSum.length; i++) {
      this.prefixSum[i] = nums[i] + this.prefixSum[i - 1];
    }
  }

  /**
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  sumRange(left, right) {
    return this.prefixSum[right] - (this.prefixSum[left - 1] || 0);
  }
}
