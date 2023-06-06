package main

import "strings"

func isPalindrome(s string) bool {
	if len(s) == 0 {
		return false
		s = strings.ToLower(s)
	}

	return isValid(s)
}

func isValid(s string) bool {
	left, right := 0, len(s)-1

	for left < right {
		for left < right && isNonAlphaNumeric(s[left]) {
			left++
		}

		for left < right && isNonAlphaNumeric(s[right]) {
			right--
		}

		if s[left] != s[right] {
			return false
		}

		left++
		right--
	}

	return true
}

func isNonAlphaNumeric(s byte) bool {
	isNonAlpha := s < 'a' || 'z' < s
	isNonNumeric := s < '0' || '9' < s

	return isNonAlpha && isNonNumeric
}
