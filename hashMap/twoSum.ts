// 两数之和
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  let res: number[] = [];

  // 遍历数组，判断map中是否存在target - nums[i]的值
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      res = [map.get(target - nums[i]), i];
      break;
    } else {
      // 把每个数字的索引存下
      map.set(nums[i], i);
    }
  }

  return res;
}