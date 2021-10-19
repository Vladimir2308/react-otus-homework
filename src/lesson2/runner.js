'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.runner = void 0
const parser_1 = require('./parser')
const engine_1 = require('./engine')
exports.runner = function (line) {
  const stack = parser_1.parser(line)
  if (stack === null) {
    throw new TypeError('Unexpected string')
  }
  const bracketExprRes = engine_1.bracketExprCalc(stack)
  if (bracketExprRes.length === 1) {
    return Number(bracketExprRes[0])
  }
  return engine_1.calcWithPriorities(bracketExprRes)
}
// # sourceMappingURL=runner.js.map
