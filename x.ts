function minTime(n: number, edges: number[][], hasApple: boolean[]): number {
  let adj = new Map();

  for (let [parent, child] of edges) {
    let parentList = adj.get(parent) || [];
    let childList = adj.get(child) || [];

    parentList.push(child);
    childList.push(parent);

    adj.set(parent, parentList);
    adj.set(child, childList);
  }

  function dfs(current: number, parent: number): number {
    let time = 0;

    for (let child of adj.get(current)) {
      if (child == parent) {
        continue;
      }

      let childTime = dfs(child, current);

      if (childTime != 0 || hasApple[child]) {
        time += childTime + 2;
      }
    }
    return time;
  }

  return dfs(0, -1);
}
