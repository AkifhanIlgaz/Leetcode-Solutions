package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Println(encode([]string{"neet", "co#de", "is", "awesome"})) 

	fmt.Println(decode("4#neet5#co#de2#is7#awesome"))
}

func encode(strs []string) string {
	result := ""
	for _, str := range strs {
		result += fmt.Sprint(len(str), "#", str)
	}
	return result
}

func decode(str string) []string {
	decodedWords := []string{}
	i := 0
	for i < len(str) {
		j := i
		for string(str[j]) != "#" {
			j++
		}
		len, _ := strconv.Atoi(str[i:j])
		word := str[j +1:j +1 +len]
		decodedWords = append(decodedWords, word)
		i = j +1 +len
	}
	return decodedWords
}