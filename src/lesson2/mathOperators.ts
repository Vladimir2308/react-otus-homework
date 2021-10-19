export type ScalarOperationType = (first: number, second: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second

export const squar = (first: number): number => first * first

export const pow: ScalarOperationType = (
  first: number,
  second: number
): number => Math.pow(first, second)

export const fac = function (first: number): number {
  let factor = 1
  for (let i = 1; i <= first; i++) {
    factor = factor * i
  }
  return factor
}

export const mathOperators: { [key: string]: ScalarOperationType } = {
  '*': mul,
  '/': div,
  '+': add,
  '-': minus,
  '**': squar,
  '^': pow,
  '!': fac
}

export const mathPriorities: number[] = [1, 2, 3]

const [FIRST, SECOND, THIRD] = mathPriorities

export const mathOperatorsPriorities: { [key: string]: number } = {
  '**': FIRST,
  '^': FIRST,
  '!': FIRST,
  '*': SECOND,
  '/': SECOND,
  '+': THIRD,
  '-': THIRD
}
