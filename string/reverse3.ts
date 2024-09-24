export function reverse3(inputs: string[]): string {
  let [kStr, s] = inputs;
    const len = s.length - 1;
    const k = parseInt(kStr);
    let str = s.split('');
    
    // 先局部翻转，再整体翻转
    str = reverseStr(str, 0, len - k)
    str = reverseStr(str, len - k + 1, len)
    str = reverseStr(str, 0, len)

    return str.join('');
}

// 根据提供的范围进行翻转
function reverseStr(s: string[], start: number, end: number) {
    
  while (start < end) {
      [s[start], s[end]] = [s[end], s[start]]
      
      start++;
      end--;
  }

  return s;
}