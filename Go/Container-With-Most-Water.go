package main

import "math"

func main() {

}

func maxArea(height []int) int {
	result, left, right := 0, 0, len(height)-1

	for left < right {
		container := int(math.Min(float64(height[left]), float64(height[right])) * (float64(right) - float64(left)))

		result = int(math.Max(float64(container), float64(result)))

		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}
	return result
}