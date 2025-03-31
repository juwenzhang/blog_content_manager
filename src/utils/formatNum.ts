// src/utils/formatNum.ts
export class FormatNum {
  constructor() {}
  #formatNumBySign(num: number | string): string {
    if (typeof num === 'number') num = num.toString()
    const stack: string[] = []
    const newNum = num.split('').reverse()
    for (let i = 0; i < newNum.length; i++) {
      if (i % 3 === 0 && i !== 0) {
        stack.push(',')
      }
      stack.push(newNum[i])
    }
    return stack.reverse().join('')
  }

  #formatNumByDecimal(num: number | string, decimal: number): string {
    if (typeof num === 'number') num = num.toString()
    const stack: string[] = []
    for (let i = 0; i < decimal; i++) {
      if (num.length - i - 1 < 0) {
        stack.push('0')
      } else {
        stack.push(num[num.length - i - 1])
      }
    }
    return num.slice(0, num.length - decimal) + '.' + stack.reverse().join('')
  }

  #formatNumWithUnit(num: number | string, decimal: number = 4): string {
    if (typeof num === 'string') {
      num = parseFloat(num)
    }
    if (num >= 100000000) {
      const formattedNum = (num / 100000000).toFixed(decimal)
      return `${formattedNum} 亿`
    } else if (num >= 10000) {
      const formattedNum = (num / 10000).toFixed(decimal)
      return `${formattedNum} 万`
    } else {
      return num.toString()
    }
  }

  render(
    symbol: 'sign' | 'decimal' | 'unit',
    num: number | string,
    decimal: number = 4,
  ): string | number {
    switch (symbol) {
      case 'sign':
        return this.#formatNumBySign(num)
      case 'decimal':
        return this.#formatNumByDecimal(num, decimal)
      case 'unit':
        return this.#formatNumWithUnit(num, decimal)
      default:
        return num
    }
  }
}

const formatNumInstance = new FormatNum()
export default formatNumInstance

/**
 * 书写一个工具函数话，如果你是使用的是的 js 进行自定义书写的话，就可以考虑使用我们的原型，函数式编程实现封装
 * 但是如果说我们使用的是 ts，这个时候还是使用 class 进行实现封装吧，否则就会有一定问题
 * 同时每个团队一个规范吧
 *  class 使用 export 导出
 *  instance 使用 export default 导出
 *  可以互换吧，根据团队开发规范来转换吧
 */
