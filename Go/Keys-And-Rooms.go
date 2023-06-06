package main



func canVisitAllRooms(rooms [][]int) bool {
	if len(rooms) == 0 {
		return true
	}

	visited := make([]bool, len(rooms))
	visited[0] = true
	keys := rooms[0]

	for len(keys) != 0 {
		newKeys := []int{}

		for _, k := range keys {
			if !visited[k] {
				visited[k] = true
				newKeys = append(newKeys, rooms[k]...)
			}
		}
		keys = newKeys
	}

	for _, v := range visited {
		if v == false {
			return false
		}
	}

	return true

}
