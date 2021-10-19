'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const mathOperators_1 = require('./mathOperators')
describe('mathOperators test cases', function () {
  it('mul 1 * 2 to equal 2', function () {
    expect(mathOperators_1.mul(1, 2)).toBe(2)
  })
  it('mul 2 * 2 to equal 4', function () {
    expect(mathOperators_1.mul(2, 2)).toBe(4)
  })
  it('div 2 / 2 to equal 1', function () {
    expect(mathOperators_1.div(2, 2)).toBe(1)
  })
  it('div 4 / 2 to equal 2', function () {
    expect(mathOperators_1.div(4, 2)).toBe(2)
  })
  it('add 4 + 2 to equal 6', function () {
    expect(mathOperators_1.add(4, 2)).toBe(6)
  })
  it('minus 4 - 2 to equal 2', function () {
    expect(mathOperators_1.minus(4, 2)).toBe(2)
  })
  it('squar 1  to equal 1', function () {
    expect(mathOperators_1.squar(1)).toBe(1)
  })
  it('squar 5  to equal 25', function () {
    expect(mathOperators_1.squar(5)).toBe(25)
  })
  it('2 to the power of 3  to equal 8', function () {
    expect(mathOperators_1.pow(2, 3)).toBe(8)
  })
  it('100 to the power of 3  to equal 1000000', function () {
    expect(mathOperators_1.pow(100, 3)).toBe(1000000)
  })
  it('factor of 0 to equal 1', function () {
    expect(mathOperators_1.fac(0)).toBe(1)
  })
  it('factor of 1 to equal 1', function () {
    expect(mathOperators_1.fac(1)).toBe(1)
  })
  it('factor of 5 to equal 120', function () {
    expect(mathOperators_1.fac(5)).toBe(120)
  })
})
// # sourceMappingURL=mathOperators.test.js.map
