// 删除相邻重复字符串
export function removeDuplicates(s: string, k: number): string {
  let stack: string[] = [];

  let i = 0;
  while (i < s.length) {
    let top = stack[stack.length - 1];
    if (top === s[i]) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
    
    i++
  }

  let res: string = '';

  while (stack.length) {
    res = stack.pop() + res;
  }

  return res
}