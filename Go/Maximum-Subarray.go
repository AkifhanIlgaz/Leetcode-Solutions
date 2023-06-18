package main



func maxSubArray(nums []int) int {
	currentSum, maxSum := 0, nums[0]

	for _, num := range nums {
		if currentSum < 0 {
			currentSum = 0
		}
		currentSum += num
		maxSum = max(currentSum, maxSum)
	}

	return maxSum
}

