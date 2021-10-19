'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.mathOperatorsPriorities = exports.mathPriorities = exports.mathOperators = exports.fac = exports.pow = exports.squar = exports.minus = exports.add = exports.div = exports.mul = void 0
exports.mul = function (first, second) { return first * second }
exports.div = function (first, second) { return first / second }
exports.add = function (first, second) { return first + second }
exports.minus = function (first, second) { return first - second }
exports.squar = function (first) { return first * first }
exports.pow = function (first, second) { return Math.pow(first, second) }
exports.fac = function (first) {
  let factor = 1
  for (let i = 1; i <= first; i++) {
    factor = factor * i
  }
  return factor
}
exports.mathOperators = {
  '*': exports.mul,
  '/': exports.div,
  '+': exports.add,
  '-': exports.minus,
  '**': exports.squar,
  '^': exports.pow,
  '!': exports.fac
}
exports.mathPriorities = [1, 2, 3]
const FIRST = exports.mathPriorities[0]; const SECOND = exports.mathPriorities[1]; const THIRD = exports.mathPriorities[2]
exports.mathOperatorsPriorities = {
  '**': FIRST,
  '^': FIRST,
  '!': FIRST,
  '*': SECOND,
  '/': SECOND,
  '+': THIRD,
  '-': THIRD
}
// # sourceMappingURL=mathOperators.js.map
