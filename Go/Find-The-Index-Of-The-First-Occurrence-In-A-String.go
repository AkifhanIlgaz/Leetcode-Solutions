package main

func strStr(haystack string, needle string) int {
	//  strings.Index(haystack, needle)
	lenNeedle := len(needle)
	firstLetter := needle[0]

	for i := 0; i <= len(haystack)-lenNeedle; i++ {
		if haystack[i] == firstLetter && haystack[i:i+lenNeedle] == needle {
			return i
		}
	}

	return -1
}
