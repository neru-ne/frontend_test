import { add, RangeError } from '.';

describe('add', () => {
  test('返り値は第一引数と第二引数の和である', () => {
    expect(add(50, 50)).toBe(100);
    expect(add(0, 50)).toBe(50);
  });

  test('引数が負数の時、例外をスローする', () => {
    expect(() => add(-10, 10)).toThrow(RangeError);
    expect(() => add(10, -10)).toThrow(RangeError);
  })
})
