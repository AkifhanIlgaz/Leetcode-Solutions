class Solution {
  List<List<String>> groupAnagrams(List<String> strs) {
    var map = Map<String, List<String>>();
    final a = "a".codeUnitAt(0);

    for (String str in strs) {
      var count = List.filled(26, 0);
      for (int i = 0; i < str.length; i++) {
        count[str[i].codeUnitAt(0) - a]++;
      }

      var key = count.join("#");
      if (map.containsKey(key)) {
        map[key]!.add(str);
        continue;
      }

      map[key] = [str];
    }

    return List.from(map.values);
  }
}
