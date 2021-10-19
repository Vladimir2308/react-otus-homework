import { mul, div, add, minus, squar, pow, fac } from './mathOperators'

describe('mathOperators test cases', () => {
  it('mul 1 * 2 to equal 2', () => {
    expect(mul(1, 2)).toBe(2)
  })

  it('mul 2 * 2 to equal 4', () => {
    expect(mul(2, 2)).toBe(4)
  })

  it('div 2 / 2 to equal 1', () => {
    expect(div(2, 2)).toBe(1)
  })

  it('div 4 / 2 to equal 2', () => {
    expect(div(4, 2)).toBe(2)
  })

  it('add 4 + 2 to equal 6', () => {
    expect(add(4, 2)).toBe(6)
  })

  it('minus 4 - 2 to equal 2', () => {
    expect(minus(4, 2)).toBe(2)
  })

  it('squar 1  to equal 1', () => {
    expect(squar(1)).toBe(1)
  })

  it('squar 5  to equal 25', () => {
    expect(squar(5)).toBe(25)
  })

  it('2 to the power of 3  to equal 8', () => {
    expect(pow(2, 3)).toBe(8)
  })

  it('100 to the power of 3  to equal 1000000', () => {
    expect(pow(100, 3)).toBe(1000000)
  })

  it('factor of 0 to equal 1', () => {
    expect(fac(0)).toBe(1)
  })

  it('factor of 1 to equal 1', () => {
    expect(fac(1)).toBe(1)
  })

  it('factor of 5 to equal 120', () => {
    expect(fac(5)).toBe(120)
  })
})
