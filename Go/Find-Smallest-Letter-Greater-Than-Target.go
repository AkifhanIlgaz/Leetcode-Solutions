package main

func nextGreatestLetter(letters []byte, target byte) byte {
	result := letters[0]

	for _, letter := range letters {
		if letter > target {
			result = letter
			break
		}
	}

	return result

}
