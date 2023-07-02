package main

func isPowerOfFour(n int) bool {
	if n == 0 {
		return false
	}

	for n%4 == 0 {
		n = n >> 2
	}

	return n == 1
}
