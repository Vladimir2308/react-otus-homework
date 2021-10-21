'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.parser = void 0
const helpers_1 = require('./helpers')
const mathOperators_1 = require('./mathOperators')
const isSpace = function (str) {
  return str.trim() == ''
}
exports.parser = function (line) {
  let temp
  const stack = []
  function isNum (char) {
    return helpers_1.isNumber(char) || char === '.' || char === ','
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
          if (temp === '*' && (line[i] === '*')) {
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
  // console.log("Result: "+ stack);
  // const stack = line.split(" ");
  return stack.reduce(function (result, item, key) {
    const prevItem = stack[key - 1]
    const isValidNumberPush = !helpers_1.isNumber(prevItem) && helpers_1.isNumber(item) && prevItem !== '!'
    const isValidOperatorPush = (helpers_1.isNumber(prevItem) && !helpers_1.isNumber(item) && mathOperators_1.mathOperators.hasOwnProperty(item)) ||
            ((prevItem === '**' || prevItem === '!' || prevItem === ')') && !helpers_1.isNumber(item) &&
                mathOperators_1.mathOperators.hasOwnProperty(item)) ||
            (item === '(' || item === ')')
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
// # sourceMappingURL=parser.js.map
