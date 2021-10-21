'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const parser_1 = require('./parser')
describe('Parser correct cases', function () {
  it('1 + 32', function () {
    expect(parser_1.parser('1 + 32')).toEqual([1, '+', 32])
  })
  it('11 + 3 * 22', function () {
    expect(parser_1.parser('11 + 3 * 22')).toEqual([11, '+', 3, '*', 22])
  })
  it('1 + 32 - 2 + 2', function () {
    expect(parser_1.parser('1 + 32 - 2 + 2')).toEqual([1, '+', 32, '-', 2, '+', 2])
  })
})
describe('Parser invalid cases', function () {
  it('1 + + 33 - 2', function () {
    expect(function () { return parser_1.parser('1 + + 33 - 2') }).toThrow(TypeError('Unexpected string'))
  })
  it('1 ! 33 - 2', function () {
    expect(function () { return parser_1.parser('1 ! 33 - 2') }).toThrow(TypeError('Unexpected string'))
  })
})
describe('Parser correct cases without space', function () {
  it('1+32', function () {
    expect(parser_1.parser('1 + 32')).toEqual([1, '+', 32])
  })
  it('11+3*22', function () {
    expect(parser_1.parser('11 + 3 * 22')).toEqual([11, '+', 3, '*', 22])
  })
  it('1+32-2 + 2', function () {
    expect(parser_1.parser('1 + 32 - 2 + 2')).toEqual([1, '+', 32, '-', 2, '+', 2])
  })
  it('1 +32-2  + 2', function () {
    expect(parser_1.parser('1 + 32 - 2 + 2')).toEqual([1, '+', 32, '-', 2, '+', 2])
  })
})
// # sourceMappingURL=parser.test.js.map
