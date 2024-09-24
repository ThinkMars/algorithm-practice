// 反转字符串
export function reverse(str: string[]): void {
  let len = str.length;
  let left: number = 0;
  let right: number = len - 1;

  // 用一个临时变量存储
  let temp = ''

  while (left < right) {
    temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++;
    right--;
  }
}