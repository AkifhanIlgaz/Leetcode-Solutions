package main

func countNegatives(grid [][]int) int {
	var count int

	for _, inner := range grid {
		for i := len(inner) - 1; i >= 0; i-- {
			if inner[i] >= 0 {
				break
			}
			count++
		}
	}
	return count
}
