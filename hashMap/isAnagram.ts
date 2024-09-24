/**
 * 是否为字符异位词，就是拥有相同的字母组成的不同词汇
 * @param s string
 * @param t string
 */
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }
  let map = new Map()

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1)
  }

  // 遍历t，依次减少字母数量，如果字母数量不一致，则false
  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) {
      return false
    } else {
      map.set(t[i], map.get(t[i]) - 1)
    }
  }
  
  return true
}