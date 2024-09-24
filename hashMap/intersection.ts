// 求两个数组的交集

export function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1)
  const resSet: Set<number> = new Set()

  for (const num of nums2) {
    if (set1.has(num)) {
      resSet.add(num)
    }
  }

  return [...resSet]
}