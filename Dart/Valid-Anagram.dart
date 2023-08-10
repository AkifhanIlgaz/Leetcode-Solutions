class Solution {
  bool isAnagram(String s, String t) {
    if (s.length != t.length) {
      return false;
    }

    final List<int> frequency = List.filled(26, 0);
    final int a = "a".codeUnitAt(0);

    for (var i = 0; i < s.length; i++) {
      final sChar = s[i].codeUnitAt(0);
      frequency[sChar - a]++;
    }

    for (var i = 0; i < t.length; i++) {
      final tChar = t[i].codeUnitAt(0);
      frequency[tChar - a]--;
    }

    return frequency.every((element) => element == 0);
  }
}
