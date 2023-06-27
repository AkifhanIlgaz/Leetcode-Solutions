package main

func largestAltitude(gain []int) int {

	currentAltitude, maxAltitude := 0, 0

	for _, change := range gain {
		currentAltitude += change
		maxAltitude = max(maxAltitude, currentAltitude)
	}

	return maxAltitude
}
