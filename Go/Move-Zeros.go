package main

func main() {
	moveZeroes([]int{0, 1, 0, 3, 12})
}

func moveZeroes(nums []int) {
	left := 0

	for index := range nums {
		if nums[index] != 0 {
			nums[left], nums[index] = nums[index], nums[left]
			left++
		}
	}
}
