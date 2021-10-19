'use strict'
const __spreadArrays = (this && this.__spreadArrays) || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length
  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (let a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) { r[k] = a[j] }
  }
  return r
}
Object.defineProperty(exports, '__esModule', { value: true })
exports.thirdPrioritiesCalc = exports.secondPrioritiesCalc = exports.firstPrioritiesCalc = exports.calcWithPriorities = exports.bracketExprCalc = void 0
const helpers_1 = require('./helpers')
const mathOperators_1 = require('./mathOperators')
const FIRST = mathOperators_1.mathPriorities[0]; const SECOND = mathOperators_1.mathPriorities[1]; const THIRD = mathOperators_1.mathPriorities[2]
exports.bracketExprCalc = function (stack) {
  const result = []
  const listInnerBrackets = []
  const openBracketStack = []
  let temp
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
        const valueInBracket = exports.calcWithPriorities(exprInBracket)
        if (listInnerBrackets.length === 0) {
          result.push(valueInBracket)
        } else {
          var outerBracketExpr = listInnerBrackets[listInnerBrackets.length - 1]
          if (outerBracketExpr !== undefined) {
            outerBracketExpr.push(valueInBracket)
          }
        }
      }
    } else if (openBracketStack.length > 0) {
      var outerBracketExpr = listInnerBrackets[listInnerBrackets.length - 1]
      if (outerBracketExpr !== undefined) {
        outerBracketExpr.push(stack[i])
      }
    } else {
      result.push(stack[i])
    }
  }
  return result
}
exports.calcWithPriorities = function (bracketExprRes) {
  const firstPrioritiesRes = exports.firstPrioritiesCalc(bracketExprRes)
  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0])
  }
  const secondPrioritiesRes = exports.secondPrioritiesCalc(firstPrioritiesRes)
  if (secondPrioritiesRes.length === 1) {
    return Number(secondPrioritiesRes[0])
  }
  return exports.thirdPrioritiesCalc(secondPrioritiesRes)
}
exports.firstPrioritiesCalc = function (stack) {
  return stack.reduce(function (result, nextItem) {
    const prevItem = result[result.length - 2]
    const item = result[result.length - 1]
    if ((!helpers_1.isNumber(String(item)) && mathOperators_1.mathOperatorsPriorities[item] === FIRST) ||
            (helpers_1.isNumber(String(item)) && (mathOperators_1.mathOperatorsPriorities[nextItem] === FIRST) &&
                (nextItem === '**' || nextItem === '!'))) {
      if (nextItem === '**' || nextItem === '!') {
        result = __spreadArrays(result.slice(0, -1), [
          mathOperators_1.mathOperators[nextItem](Number(item), Number(item))
        ])
      } else {
        result = __spreadArrays(result.slice(0, -2), [
          mathOperators_1.mathOperators[item](Number(prevItem), Number(nextItem))
        ])
      }
    } else {
      result.push(nextItem)
    }
    return result
  }, [])
}
exports.secondPrioritiesCalc = function (stack) {
  return stack.reduce(function (result, nextItem) {
    const prevItem = result[result.length - 2]
    const item = result[result.length - 1]
    if (!helpers_1.isNumber(String(item)) && mathOperators_1.mathOperatorsPriorities[item] === SECOND) {
      if (!mathOperators_1.mathOperators[item]) {
        throw new TypeError('Unexpected stack!')
      }
      result = __spreadArrays(result.slice(0, -2), [
        mathOperators_1.mathOperators[item](Number(prevItem), Number(nextItem))
      ])
    } else {
      result.push(nextItem)
    }
    return result
  }, [])
}
exports.thirdPrioritiesCalc = function (stack) {
  return stack.reduce(function (result, nextItem, key) {
    const item = stack[key - 1]
    if (mathOperators_1.mathOperatorsPriorities[item] === FIRST || mathOperators_1.mathOperatorsPriorities[item] === SECOND) {
      throw new TypeError('Unexpected stack!')
    }
    if (!helpers_1.isNumber(String(item)) && mathOperators_1.mathOperatorsPriorities[item] === THIRD) {
      result = mathOperators_1.mathOperators[item](Number(result), Number(nextItem))
    }
    return result
  }, Number(stack[0]))
}
// # sourceMappingURL=engine.js.map
