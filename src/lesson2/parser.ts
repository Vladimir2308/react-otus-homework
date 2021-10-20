import { isNumber } from './helpers'
import { mathOperators } from './mathOperators'

export type ParsedLineType = (number | string)[];

const isSpace = (str: string) => str.trim() === ''

export const parser = function (line: string) {
  let temp: string | undefined
  const stack: string[] = []

  function isNum (char: string) {
    return isNumber(char) || char === '.' || char === ','
  }

  for (let i = 0; i < line.length; i++) {
    if (isSpace(line[i])) {
      if (temp) {
        stack.push(temp)
        temp = undefined
      }
    } else if (!isNum(line[i])) {
      if (temp && isNum(temp)) {
        stack.push(temp)
        temp = line[i]
      } else {
        if (temp) {
          if (temp === '*' && line[i] === '*') {
            temp = '**'
          } else {
            stack.push(temp)
            temp = line[i]
          }
        } else {
          temp = line[i]
        }
      }
    } else if (isNum(line[i])) {
      if (temp) {
        if (isNum(temp)) {
          temp = '' + temp + line[i]
        } else {
          stack.push(temp)
          temp = line[i]
        }
      } else {
        temp = line[i]
      }
    }
  }
  if (temp) {
    stack.push(temp)
  }

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1]

    const isValidNumberPush =
      !isNumber(prevItem) && isNumber(item) && prevItem !== '!'
    const isValidOperatorPush =
      (isNumber(prevItem) &&
        !isNumber(item) &&
        mathOperators.hasOwnProperty(item)) ||
      ((prevItem === '**' || prevItem === '!' || prevItem === ')') &&
        !isNumber(item) &&
        mathOperators.hasOwnProperty(item)) ||
      item === '(' ||
      item === ')'

    if (isValidNumberPush) {
      result.push(Number(item))
    } else if (isValidOperatorPush) {
      result.push(item)
    } else {
      throw new TypeError('Unexpected string')
    }
    return result
  }, [])
}
