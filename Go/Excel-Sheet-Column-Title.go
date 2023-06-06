package main



func convertToTitle(columnNumber int) string {
	var result string

	for columnNumber > 0 {
		columnNumber--
		result = string((columnNumber%26)+'A') + result
		columnNumber /= 26
	}

	return result
}