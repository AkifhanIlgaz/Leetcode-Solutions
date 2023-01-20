package main

func main() {

}

func mySqrt(x int) int {
	if x == 0 || x == 1 {
		return x
	}

	i, result := 1, 1

	for result <= x {
		i++
		result = i * i
	}

	return i - 1
}