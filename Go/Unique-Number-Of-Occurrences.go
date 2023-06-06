package main



func uniqueOccurrences(arr []int) bool {
	occurrences := map[int]int{}

	for _, val := range arr {
		occurrences[val]++
	}

	values := []int{}
	for _, value := range occurrences {
		values = append(values, value)
	}

	return !containsDuplicate(values)
}

func containsDuplicate(nums []int) bool {
	set := map[int]int{}

	for _, num := range nums {
		if set[num] != 0 {
			return true
		} else {
			set[num] = 1
		}
	}

	return false
}