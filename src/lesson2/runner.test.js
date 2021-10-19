'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const runner_1 = require('./runner')
describe('Runner simple cases', function () {
  it('1 * 32', function () {
    expect(runner_1.runner('1 * 32')).toEqual(32)
  })
  it('2 * 32', function () {
    expect(runner_1.runner('2 * 32')).toEqual(64)
  })
  it('2 + 32', function () {
    expect(runner_1.runner('2 + 32')).toEqual(34)
  })
})
describe('Runner tripled/mixed cases', function () {
  it('2 * 2 * 3', function () {
    expect(runner_1.runner('2 * 2 * 3')).toEqual(12)
  })
  it('2 * 2 + 3', function () {
    expect(runner_1.runner('2 * 2 + 3')).toEqual(7)
  })
  it('2 + 2 * 3', function () {
    expect(runner_1.runner('2 + 2 * 3')).toEqual(8)
  })
})
describe('Runner long cases', function () {
  it('20 + 1 * 10 - 5 * 3', function () {
    expect(runner_1.runner('20 + 1 * 10 - 5 * 3')).toEqual(15)
  })
  it('20 - 10 * 10 / 5 - 3', function () {
    expect(runner_1.runner('20 - 10 * 10 / 5 - 3')).toEqual(-3)
  })
})
describe('Runner cases with brackets', function () {
  it('(20 + 1) * 10 - 5 * 3', function () {
    expect(runner_1.runner('(20 + 1) * 10 - 5 * 3')).toEqual(195)
  })
  it('(20 ) * 10 - 5 * 3', function () {
    expect(runner_1.runner('(20 ) * 10 - 5 * 3')).toEqual(185)
  })
  it('(20 + 1) * (10 - 5) * 3', function () {
    expect(runner_1.runner('(20 + 1) * (10 - 5) * 3')).toEqual(315)
  })
  it('((20 + 1) *2 - (10 - 5)) * 3', function () {
    expect(runner_1.runner('((20 + 1) *2 - (10 - 5)) * 3')).toEqual(111)
  })
})
describe('Runner cases with power and brackets', function () {
  it('(20 ^ 2) ** 2 - 5 * 3^2', function () {
    expect(runner_1.runner('(20 ^ 2) ^ 2 - 5 * 3^2')).toEqual(159955)
  })
  it('(20 **) ^ 3 - 5 * 3^9', function () {
    expect(runner_1.runner('(20 ^ 2) ^ 3 - 5 * 3^9')).toEqual(63901585)
  })
})
describe('Runner cases with factorial', function () {
  it('4!', function () {
    expect(runner_1.runner('4!')).toEqual(24)
  })
  it('(3! + 3!)!', function () {
    expect(runner_1.runner('(3! + 3!)!')).toEqual(479001600)
  })
})
describe('Runner full operations', function () {
  it('(((20 - 6!)**)/2+45^3)*12- (2^3)! ', function () {
    expect(runner_1.runner('(((20 - 6!)**)/2+45^3)*12- (2^3)! ')).toEqual(3993180)
  })
})
// # sourceMappingURL=runner.test.js.map
