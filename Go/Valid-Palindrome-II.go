package main


func validPalindrome(s string) bool {
	if len(s) == 1 {
		return true

	left, right := 0, len(s)-1

	for left < right {
		if s[left] != s[right] {
			return isPalindrome(s[left+1:right+1]) || isPalindrome(s[left:right])
		}

		left++
		right--
	}
	return true
}

func isPalindrome(s string) bool {
	if len(s) == 1 {
		return true
	}

	left, right := 0, len(s)-1

	for left < right {
		if s[left] != s[right] {
			return false
		}
		left++
		right--
	}

	return true
}