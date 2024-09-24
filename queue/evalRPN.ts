// 波兰表达式求值
// 输入: ["4", "13", "5", "/", "+"]
// 输出: 6
// 解释: 该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
type Operator = Record<string, (a: number, b: number) => number>;

export function evalRPN(tokens: string[]): number {
  const stack = [];
  const operatorMap: Operator = {
    '+': (a, b) => a+b,
    '-': (a, b) => a-b,
    '*': (a, b) => a*b,
    '/': (a, b) => Math.trunc(a/b),
  };

  let a: number = 0;
  let b: number = 0;

  for (const t of tokens) {
    // 如果是运算符，则从栈中取出两个数进行运算，并将结果入栈
    if (operatorMap[t]) {
      b = stack.pop()!;
      a = stack.pop()!;
      stack.push(operatorMap[t](a, b));
    } else {
      stack.push(Number(t));
    }
  }
  return stack.pop()!;
}