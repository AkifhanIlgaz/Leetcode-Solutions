package main

import "strconv"

func main() {

}

func evalRPN(tokens []string) int {
	stack := []int{}

	for _, token := range tokens {
		var firstOperand int
		var secondOperand int
		number, err := strconv.Atoi(token)
		if err == nil {
			stack = append(stack, number)
		} else {
			secondOperand, stack = pop(stack)
			firstOperand, stack = pop(stack)
			if token == "+" {
				stack = append(stack, firstOperand + secondOperand)
			} else if token == "-" {
				stack = append(stack, firstOperand - secondOperand)
			} else if token == "*" {
				stack = append(stack, firstOperand * secondOperand)
			} else if token == "/" {
				stack = append(stack, firstOperand / secondOperand)
			}
			
		}
	}

	return stack[0]
}

func pop(arr []int) (int, []int) {
	removed:= arr[len(arr)-1]
	idx := len(arr) - 1
	arr = append(arr[:idx], arr[idx+1:]...)
	return removed, arr
}