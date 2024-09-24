// 花式翻转字符串
// 给定一个字符串 s 和一个整数 k，从字符串开头算起, 每计数至 2k 个字符，就反转这 2k 个字符中的前 k 个字符。
export function reverse2(str: string, k: number): string {
  let arr = str.split('');
  let left = 0;
  let right = arr.length - 1;

  let temp = '';

  for (let i = 0; i < arr.length; i += 2 * k) {
    left = i;
    // 这里是关键，如果剩余的字符小于k，则right指向最后一个字符
    right = i + k - 1 < arr.length ? i + k - 1 : arr.length - 1;
    
    while (left < right) {
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return arr.join('');
}

console.log(reverse2('abcdefg', 2)); // 'bacdfeg'