package main

func main() {
	reverseVowels("hello")
}

func reverseVowels(s string) string {
	left, right := 0, len(s)-1

	sample := []rune(s)

	for left < right {
		for left < len(s) && !isVowel(sample[left]) {
			left++
		}
		for right >= 0 && !isVowel(sample[right]) {
			right--
		}

		if left < right {
			sample[left], sample[right] = sample[right], sample[left]
			left++
			right--
		}
	}
	return string(sample)
}

func isVowel(s rune) bool {
	vowels := []rune{'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}

	for _, vowel := range vowels {
		if vowel == s {
			return true
		}
	}

	return false
}