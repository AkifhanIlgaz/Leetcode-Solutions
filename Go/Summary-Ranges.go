package main

import "fmt"

func summaryRanges(nums []int) []string {
	ranges := []string{}

	start := 0
	for i := 1; i < len(nums); i++ {
		if nums[i-1]+1 != nums[i] {
			ranges = append(ranges, rangeString(nums[start], nums[i-1]))
			start = i
		}
	}

	if len(nums) > 0 {
		ranges = append(ranges, rangeString(nums[start], nums[len(nums)-1]))
	}

	return ranges
}

func rangeString(start, end int) string {
	if start == end {
		return fmt.Sprint(start)
	}
	return fmt.Sprintf("%d->%d", start, end)
}
