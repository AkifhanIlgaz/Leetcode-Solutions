package main

import "strconv"

func main() {

}

func subtractProductAndSum(n int) int {
	sum, product := 0, 1

	for _, digit := range strconv.Itoa(n) {
		val, _ := strconv.Atoi(string(digit))
		sum += val
		product *= val
	}

	return product -sum
}