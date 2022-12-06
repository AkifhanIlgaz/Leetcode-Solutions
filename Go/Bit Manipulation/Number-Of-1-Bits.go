package main

func main() {

}

func hammingWeight(num uint32) int {
	result := 0

	for i := 0; i < 32; i++ {
		result += int(num % 2)
		num >>= 1
	}

	return result
}