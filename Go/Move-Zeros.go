package main

func moveZeroes(nums []int) {
	left := 0

	for index := range nums {
		if nums[index] != 0 {
			nums[left], nums[index] = nums[index], nums[left]
			left++
		}
	}
}
