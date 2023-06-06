package main



func findJudge(n int, trust [][]int) int {
	if n == 1 {
		return 1
	}
	
	trustedBy := make([]int, n+1)

	for _, tru := range trust {
		a, b := tru[0], tru[1]
		trustedBy[a] -= 1
		trustedBy[b] += 1
	}

	for i, v := range trustedBy {
		if v == n-1 {
			return i
		}
	}
	return -1
}
