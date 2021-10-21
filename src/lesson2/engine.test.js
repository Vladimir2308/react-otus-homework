'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const engine_1 = require('./engine')
describe('firstPrioritiesCalc simple cases', function () {
  it('[2, "!"]', function () {
    expect(engine_1.firstPrioritiesCalc([2, '**'])).toEqual([4])
  })
  it('[5, "!"]', function () {
    expect(engine_1.firstPrioritiesCalc([5, '**'])).toEqual([25])
  })
  it('[1, "!"]', function () {
    expect(engine_1.firstPrioritiesCalc([1, '!'])).toEqual([1])
  })
  it('[0, "!"]', function () {
    expect(engine_1.firstPrioritiesCalc([0, '!'])).toEqual([1])
  })
  it('[5, "!"]', function () {
    expect(engine_1.firstPrioritiesCalc([5, '!'])).toEqual([120])
  })
  it('[5, "^",3]', function () {
    expect(engine_1.firstPrioritiesCalc([5, '^', 3])).toEqual([125])
  })
  it('[6, "^",6]', function () {
    expect(engine_1.firstPrioritiesCalc([6, '^', 6])).toEqual([46656])
  })
})
describe('secondPrioritiesCalc simple cases', function () {
  it('[1, * 32]', function () {
    expect(engine_1.secondPrioritiesCalc([1, '*', 32])).toEqual([32])
  })
  it('[32, /, 32]', function () {
    expect(engine_1.secondPrioritiesCalc([32, '/', 32])).toEqual([1])
  })
  it('[32, + 32]', function () {
    expect(engine_1.secondPrioritiesCalc([32, '+', 32])).toEqual([32, '+', 32])
  })
})
describe('secondPrioritiesCalc mixed with second priorities cases', function () {
  it('[32, /, 32, +, 10, *, 10]', function () {
    expect(engine_1.secondPrioritiesCalc([32, '/', 32, '+', 10, '*', 10])).toEqual([
      1,
      '+',
      100
    ])
  })
})
describe('thirdPrioritiesCalc invalid cases', function () {
  it('[32, / 32]', function () {
    expect(function () { return engine_1.thirdPrioritiesCalc([32, '/', 32]) }).toThrow(TypeError('Unexpected stack!'))
  })
})
describe('thirdPrioritiesCalc simple cases', function () {
  it('[32, + 32]', function () {
    expect(engine_1.thirdPrioritiesCalc([32, '+', 32])).toEqual(64)
  })
  it('[32, - 32]', function () {
    expect(engine_1.thirdPrioritiesCalc([32, '-', 32])).toEqual(0)
  })
  it('[32, - 32, +, 10]', function () {
    expect(engine_1.thirdPrioritiesCalc([32, '-', 32, '+', 10])).toEqual(10)
  })
  it('[32, - 32, +, 10]', function () {
    expect(engine_1.thirdPrioritiesCalc([32, '-', 32, '+', 10])).toEqual(10)
  })
  it('[32, - 32, +, 10]', function () {
    expect(engine_1.thirdPrioritiesCalc([32, '-', 32, '+', 10])).toEqual(10)
  })
})
describe('bracketExprCalc invalid cases', function () {
  it(') (', function () {
    expect(function () { return engine_1.bracketExprCalc([')', '(']) }).toThrow(TypeError('Unexpected stack! Unexpected Bracket!'))
  })
  it('( ) (', function () {
    expect(function () { return engine_1.bracketExprCalc(['(', ')', ')']) }).toThrow(TypeError('Unexpected stack! Unexpected Bracket!'))
  })
  it('( ) ( ) )', function () {
    expect(function () { return engine_1.bracketExprCalc(['(', ')', ')', ')', ')']) }).toThrow(TypeError('Unexpected stack! Unexpected Bracket!'))
  })
})
// # sourceMappingURL=engine.test.js.map
