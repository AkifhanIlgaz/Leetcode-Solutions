package main

func addDigits(num int) int {
	if num < 10 {
		return num
	}

	num = sumOfDigits(num)

	return addDigits(num)

}

func sumOfDigits(num int) int {
	sum := 0

	for num > 0 {
		sum += num % 10
		num = num / 10
	}

	return sum
}
