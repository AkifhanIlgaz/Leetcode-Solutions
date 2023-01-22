package main

func main() {

}

func partition(s string) [][]string {
	res, part := [][]string{}, []string{}

	var dfs func(i int)

	dfs = func(i int) {
		if i >= len(s) {
			res = append(res, append([]string{}, part...))
			return
		}

		for j := i; j < len(s); j++ {
			if isPalindrome(s, i, j) {
				part = append(part, s[i:j+1])
				dfs(j + 1)
				part = part[:len(part)-1]
			}
		}
	}

	dfs(0)
	return res
}

func isPalindrome(s string, left, right int) bool {
	for left < right {
		if s[left] != s[right] {
			return false
		}
		left++
		right--
	}
	return true
}
