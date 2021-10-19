import { ParsedLineType } from './parser'
import { isNumber } from './helpers'
import { mathOperators, mathOperatorsPriorities, mathPriorities } from './mathOperators'

const [FIRST, SECOND, THIRD] = mathPriorities

export const bracketExprCalc = (stack: ParsedLineType): ParsedLineType => {
  const result: ParsedLineType = []
  const listInnerBrackets: ParsedLineType[] = []
  const openBracketStack: number[] = []
  let temp: ParsedLineType | undefined
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === '(') {
      openBracketStack.push(i)
      temp = []
      listInnerBrackets.push(temp)
    } else if (stack[i] === ')') {
      const positionLastOpenBracket = openBracketStack.pop()
      if (positionLastOpenBracket == null) {
        throw new TypeError('Unexpected stack! Unexpected Bracket!')
      }
      const exprInBracket = listInnerBrackets.pop()
      if (exprInBracket !== undefined) {
        const valueInBracket = calcWithPriorities(exprInBracket)
        if (listInnerBrackets.length === 0) {
          result.push(valueInBracket)
        } else {
          const outerBracketExpr = listInnerBrackets[listInnerBrackets.length - 1]
          if (outerBracketExpr !== undefined) {
            outerBracketExpr.push(valueInBracket)
          }
        }
      }
    } else if (openBracketStack.length > 0) {
      const outerBracketExpr = listInnerBrackets[listInnerBrackets.length - 1]
      if (outerBracketExpr !== undefined) {
        outerBracketExpr.push(stack[i])
      }
    } else {
      result.push(stack[i])
    }
  }
  return result
}

export const calcWithPriorities = (bracketExprRes: ParsedLineType) => {
  const firstPrioritiesRes = firstPrioritiesCalc(bracketExprRes)

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0])
  }

  const secondPrioritiesRes = secondPrioritiesCalc(firstPrioritiesRes)
  if (secondPrioritiesRes.length === 1) {
    return Number(secondPrioritiesRes[0])
  }
  return thirdPrioritiesCalc(secondPrioritiesRes)
}

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2]
    const item = result[result.length - 1]

    if ((!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) ||
            (isNumber(String(item)) && (mathOperatorsPriorities[nextItem] === FIRST) &&
                (nextItem === '**' || nextItem === '!'))) {
      if (nextItem === '**' || nextItem === '!') {
        result = [
          ...result.slice(0, -1),
          mathOperators[nextItem](Number(item), Number(item))
        ]
      } else {
        result = [
          ...result.slice(0, -2),
          mathOperators[item](Number(prevItem), Number(nextItem))
        ]
      }
    } else {
      result.push(nextItem)
    }
    return result
  }, [])

export const secondPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2]
    const item = result[result.length - 1]

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      if (!mathOperators[item]) {
        throw new TypeError('Unexpected stack!')
      }
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem))
      ]
    } else {
      result.push(nextItem)
    }
    return result
  }, [])

export const thirdPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1]

    if (mathOperatorsPriorities[item] === FIRST || mathOperatorsPriorities[item] === SECOND) {
      throw new TypeError('Unexpected stack!')
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === THIRD) {
      result = mathOperators[item](Number(result), Number(nextItem))
    }
    return result
  }, Number(stack[0]))
