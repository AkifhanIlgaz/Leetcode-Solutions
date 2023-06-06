package main

func countOdds(low int, high int) int {
	result := (high - low) / 2

	if low%2 != 0 || high%2 != 0 {
		result++
	}
	return result
}
