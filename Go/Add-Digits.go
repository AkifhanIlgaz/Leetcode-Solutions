package main

func addDigits(num int) int {
	if num < 10 {
		return num
	}

	num = parseNum(num)

	return addDigits(num)

}

func parseNum(num int) int {
	sumOfDigits := 0

	for num > 0 {
		sumOfDigits += num % 10
		num = num / 10
	}

	return sumOfDigits
}
