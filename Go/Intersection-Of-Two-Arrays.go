package main

func intersection(nums1 []int, nums2 []int) []int {
	numsMap := map[int]bool{}
	intersectionNums := []int{}

	for _, num := range nums1 {
		numsMap[num] = true
	}

	for _, num := range nums2 {
		if numsMap[num] == true {
			intersectionNums = append(intersectionNums, num)
			numsMap[num] = false
		}
	}

	return intersectionNums

}

