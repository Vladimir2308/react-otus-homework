import { parser } from './parser'

import { bracketExprCalc, calcWithPriorities } from './engine'

export const runner = (line: string): number => {
  const stack = parser(line)

  if (stack === null) {
    throw new TypeError('Unexpected string')
  }

  const bracketExprRes = bracketExprCalc(stack)
  if (bracketExprRes.length === 1) {
    return Number(bracketExprRes[0])
  }

  return calcWithPriorities(bracketExprRes)
}
