package main

import "math"

func rearrangeCharacters(s string, target string) int {
	targetMap := initMap(target)
	sMap := initMap(s)
	count := math.MaxInt

	for c, occ := range targetMap {
		count = min(sMap[c]/occ, count)
	}

	return count
}

func initMap(s string) map[rune]int {
	sMap := map[rune]int{}

	for _, c := range s {
		sMap[c]++
	}

	return sMap
}
