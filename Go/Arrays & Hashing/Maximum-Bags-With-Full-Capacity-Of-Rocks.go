package main

import "sort"

func main() {
	
}

func maximumBags(capacity []int, rocks []int, additionalRocks int) int {
	differences := []int{}
    for i, val := range capacity {
		differences = append(differences, val - rocks[i]) 
	}
	sort.Ints(differences)
	count := 0
	for _, diff := range differences {
		if diff <= additionalRocks {
			count++
			additionalRocks -= diff
		}
	}
	return count
}