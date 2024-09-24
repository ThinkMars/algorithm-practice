// 是否是一对括号
type BracketMap = Record<string, string>
export function isValid(s: string): boolean {
  const helpStack: string[] = [];
  const bracketMap: BracketMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  // 先把左括号入栈，遇到右括号，判断栈顶是否匹配
  for (const i of s) {
    if (bracketMap[i]) {
      helpStack.push(i);
    } else if (i !== helpStack.pop()) {
      return false;
    }
  }

  // 栈为空则说明全部匹配
  return helpStack.length === 0
}