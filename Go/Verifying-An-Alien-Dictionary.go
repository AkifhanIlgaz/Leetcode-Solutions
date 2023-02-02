package main

func main() {

}

func isAlienSorted(words []string, order string) bool {
	orderMap := map[byte]int{}

	for i, val := range order {
		orderMap[byte(val)] = i
	}

	for i := 0; i < len(words)-1; i++ {
		word1, word2 := words[i], words[i+1]

		for j := range word1 {
			if j == len(word2) {
				return false
			}

			if word1[j] != word2[j] {
				if orderMap[word2[j]] < orderMap[word1[j]] {
					return false
				}
				break
			}
		}
	}

	return true
}