import { bracketExprCalc, firstPrioritiesCalc, secondPrioritiesCalc, thirdPrioritiesCalc } from './engine'

describe('firstPrioritiesCalc simple cases', () => {
  it('[2, "!"]', () => {
    expect(firstPrioritiesCalc([2, '**'])).toEqual([4])
  })

  it('[5, "!"]', () => {
    expect(firstPrioritiesCalc([5, '**'])).toEqual([25])
  })

  it('[1, "!"]', () => {
    expect(firstPrioritiesCalc([1, '!'])).toEqual([1])
  })

  it('[0, "!"]', () => {
    expect(firstPrioritiesCalc([0, '!'])).toEqual([1])
  })

  it('[5, "!"]', () => {
    expect(firstPrioritiesCalc([5, '!'])).toEqual([120])
  })

  it('[5, "^",3]', () => {
    expect(firstPrioritiesCalc([5, '^', 3])).toEqual([125])
  })

  it('[6, "^",6]', () => {
    expect(firstPrioritiesCalc([6, '^', 6])).toEqual([46656])
  })
})

describe('secondPrioritiesCalc simple cases', () => {
  it('[1, * 32]', () => {
    expect(secondPrioritiesCalc([1, '*', 32])).toEqual([32])
  })

  it('[32, /, 32]', () => {
    expect(secondPrioritiesCalc([32, '/', 32])).toEqual([1])
  })

  it('[32, + 32]', () => {
    expect(secondPrioritiesCalc([32, '+', 32])).toEqual([32, '+', 32])
  })
})

describe('secondPrioritiesCalc mixed with second priorities cases', () => {
  it('[32, /, 32, +, 10, *, 10]', () => {
    expect(secondPrioritiesCalc([32, '/', 32, '+', 10, '*', 10])).toEqual([
      1,
      '+',
      100
    ])
  })
})

describe('thirdPrioritiesCalc invalid cases', () => {
  it('[32, / 32]', () => {
    expect(() => thirdPrioritiesCalc([32, '/', 32])).toThrow(
      TypeError('Unexpected stack!')
    )
  })
})

describe('thirdPrioritiesCalc simple cases', () => {
  it('[32, + 32]', () => {
    expect(thirdPrioritiesCalc([32, '+', 32])).toEqual(64)
  })

  it('[32, - 32]', () => {
    expect(thirdPrioritiesCalc([32, '-', 32])).toEqual(0)
  })

  it('[32, - 32, +, 10]', () => {
    expect(thirdPrioritiesCalc([32, '-', 32, '+', 10])).toEqual(10)
  })

  it('[32, - 32, +, 10]', () => {
    expect(thirdPrioritiesCalc([32, '-', 32, '+', 10])).toEqual(10)
  })

  it('[32, - 32, +, 10]', () => {
    expect(thirdPrioritiesCalc([32, '-', 32, '+', 10])).toEqual(10)
  })
})

describe('bracketExprCalc invalid cases', () => {
  it(') (', () => {
    expect(() => bracketExprCalc([')', '('])).toThrow(
      TypeError('Unexpected stack! Unexpected Bracket!')
    )
  })
  it('( ) (', () => {
    expect(() => bracketExprCalc(['(', ')', ')'])).toThrow(
      TypeError('Unexpected stack! Unexpected Bracket!')
    )
  })
  it('( ) ( ) )', () => {
    expect(() => bracketExprCalc(['(', ')', ')', ')', ')'])).toThrow(
      TypeError('Unexpected stack! Unexpected Bracket!')
    )
  })
})
