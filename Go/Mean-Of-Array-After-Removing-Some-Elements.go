package main

import "sort"

func mean(arr []int) float64 {
	sum := 0
	n := len(arr)
	for _, num := range arr {
		sum += num
	}

	return float64(sum) / float64(n)
}

func trimMean(arr []int) float64 {
	n := len(arr)
	deleteN := int(float64(n) / 20.0)

	sort.Ints(arr)

	return mean(arr[deleteN : n-deleteN])
}
