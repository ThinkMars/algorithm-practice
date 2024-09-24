// 赎金贴，给一个单词，一个杂志，判断是否可以用杂志中的单词组成赎金贴
export function canConstruct(ransomNote: string, magazine: string): boolean {
  const strArr = new Array(26).fill(0)
  const base = 'a'.charCodeAt(0)

  for (const s of magazine) {
    strArr[s.charCodeAt(0) - base] ++
  }

  for (const s of ransomNote) {
    // 没有对应的字符可以匹配
    if (strArr[s.charCodeAt(0) - base] === 0) {
      return false
    } else {
      strArr[s.charCodeAt(0) - base] --
    }
  }
  return true
}