package main

import "math"



func average(salary []int) float64 {
	var min float64 = float64(salary[0])
	var max float64 = 0;
	var sum float64 = 0

	for _, sal := range salary {
		sum += float64(sal)
		max = math.Max(float64(max), float64(sal));
		min = math.Min(min, float64(sal))
	}

	return (sum - min-max) / float64(len(salary) - 2)
}