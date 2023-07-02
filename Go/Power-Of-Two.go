package main

func isPowerOfTwo(n int) bool {
	if n == 0 {
		return false
	}

	for n%2 == 0 {
		n = n >> 1
	}

	return n == 1
}
