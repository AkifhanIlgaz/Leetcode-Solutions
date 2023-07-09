package main

func intersection(nums1 []int, nums2 []int) []int {
	numsMap := map[int]bool{}
	intersectionMap := map[int]bool{}

	for _, num := range nums1 {
		numsMap[num] = true
	}

	for _, num := range nums2 {
		if _, ok := numsMap[num]; ok {
			intersectionMap[num] = true
		}
	}

	return mapToSlice(intersectionMap)

}

func mapToSlice(numsMap map[int]bool) []int {
	arr := []int{}

	for num, _ := range numsMap {
		arr = append(arr, num)
	}

	return arr
}
