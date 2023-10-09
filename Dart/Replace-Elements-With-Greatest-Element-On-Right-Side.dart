import 'dart:math';

class Solution {
  List<int> replaceElements(List<int> arr) {
    int currentMax = -1;
    for (int i = arr.length - 1; i > -1; i--) {
      int newMax = max(currentMax, arr[i]);
      arr[i] = currentMax;
      currentMax = newMax;
    }

    return arr;
  }
}
