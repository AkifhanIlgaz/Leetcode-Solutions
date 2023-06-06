package main

import "sort"

func threeSum(nums []int) [][]int {
	sort.Ints(nums)

	var result [][]int

	for index, val := range nums {
		if index > 0 && nums[index] == nums[index-1] {
			continue

			left, right := index+1, len(nums)-1
			for left < right {
				threeSum := val + nums[left] + nums[right]
				if threeSum < 0 {
					left++
				} else if threeSum > 0 {
					right--
				} else {
					result = append(result, []int{val, nums[left], nums[right]})
					left++
					for nums[left] == nums[left-1] && left < right {
						left++
					}
				}
			}
		}
	}
	return result
}
