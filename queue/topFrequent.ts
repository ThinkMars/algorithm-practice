// 出现频次最高的前k个

export function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  return Array.from(map).sort((a, b) => b[1] - a[1]).slice(0, k).map(item => item[0]);
}