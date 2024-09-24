// 快乐树，对数字上的每一位进行平方求和，如果最终结果等于1，则为快乐数，否则不是

export function isHappy(n: number): boolean {
  function calcSum(val: number) {
    return String(val).split('').reduce((pre, cur) => pre + Number(cur) ** 2, 0)
  }

  let set = new Set<number>()
  while(n!== 1 && !set.has(n)) {
    set.add(n)
    n = calcSum(n)
  }

  return n === 1
}