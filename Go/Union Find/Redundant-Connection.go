package main

func main() {

}

func findRedundantConnection(edges [][]int) []int {
	parent := make([]int, len(edges)+1)
	rank := make([]int, len(edges)+1)

	for i := 0; i < len(edges)+1; i++ {
		parent[i] = i
		rank[i] = 1
	}

	find := func(n int) int {
		p := parent[n]

		for p != parent[p] {
			parent[p] = parent[parent[p]]
			p = parent[p]
		}

		return p
	}

	union := func(n1, n2 int) bool {
		p1, p2 := find(n1), find(n2)

		if p1 == p2 {
			return false
		}

		if rank[p1] > rank[p2] {
			parent[p2] = p1
			rank[p1] += rank[p2]
		} else {
			parent[p1] = p2
			rank[p2] += rank[p1]
		}
		return true
	}

	for _, edge := range edges {
		n1, n2 := edge[0], edge[1]

		if !union(n1, n2) {
			return edge
		}
	}

	return []int{}
}