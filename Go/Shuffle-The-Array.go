package main



func shuffle(nums []int, n int) []int {
	first, second := nums[:n], nums[n:]
	result := []int{}

	for i := range first {
		result = append(result, first[i], second[i])
	}

	return result
}