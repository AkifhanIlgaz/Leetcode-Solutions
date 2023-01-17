package main

func main() {}

func isSubsequence(s string, t string) bool {
	sPointer, tPointer := 0, 0

	for tPointer < len(t) && sPointer < len(s) && tPointer < len(t) {
		if s[sPointer] == t[tPointer] {
			sPointer++
		}
		tPointer++
	}

	return sPointer >= len(s)
}