package main

func main() {

}

func halvesAreAlike(s string) bool {
	middle := len(s) / 2

	return countVowels(s[:middle]) == countVowels(s[middle:])
}

func countVowels(s string) int {
	vowels := []rune{'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}

	count := 0

	for _, letter := range s {
		if contains(vowels, letter) {
			count++
		}
	}

	return count
}

func contains(s []rune, ch rune) bool {
	for _, vowel := range s {
		if vowel == ch {
			return true
		}
	}

	return false
}