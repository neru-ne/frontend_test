// booleanのテスト
import { setBoolean } from ".";

describe('setBoolean',() => {
  test("引数が正数のとき、戻り値はtrueである",() => {
    expect(setBoolean(1)).toBeTruthy();
    expect(setBoolean(0)).toBeTruthy();
    expect(setBoolean(10)).not.toBeFalsy();//notつけることもできる
  });

  test('引数が負数のとき、戻り値はfalseである',() => {
    expect(setBoolean(-1)).toBeFalsy();
    expect(setBoolean(-10)).not.toBeTruthy();
  })
});
describe('特殊な検証',() => {
  test("null,undefindの検証",() => {
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(null).toBeNull;
    expect(undefined).toBeUndefined();
    expect(undefined).not.toBeDefined();

  })
})
describe('数値の検証',() => {
  const value = 2 + 2;
  test('検証値は 期待値 と等しい',() => {
    expect(value).toBe(4);
    expect(value).toEqual(4);
    //toBe と toEqual の使い所
    // number, string の比較ならどちらでも良さそう。
    // object を比較する場合は、 toEqual 。
  });
  test('検証値　は　期待値　より大きい',() => {
    expect(value).toBeGreaterThan(3);// 4 > 3 を検証
    expect(value).toBeGreaterThanOrEqual(4); // 4 >= 4を検証
  })
  test('検証値　は　期待値　より小さい',() => {
    expect(value).toBeLessThan(5); // 4 < 5を検証
    expect(value).toBeLessThanOrEqual(4); // 4 <= 4を検証
  })
})
//jsは少数の計算に誤差が生じる。これは10進数の少数を2進数に変換するときに生じてしまう症状。
//少数の正確な計算ができるライブラリを入れていない場合、toBeCloseToマッチャーを使用する。
describe('少数計算',() => {
  test('少数計算は正確でない',() => {
    // expect(0.1 + 0.2).toBe(0.3); えらーになる
    expect(0.1 + 0.2).not.toBe(0.3);
  })
  test('指定の小数点以下n桁までを比較する',() => {
    // 第一引数に結果となる小数を指定し、第二引数の小数桁を指定する。
    expect(0.1 + 0.2).toBeCloseTo(0.3);//デフォルトは小数点以下2桁
    expect(0.1 + 0.2).toBeCloseTo(0.3,15);
    expect(0.1 + 0.2).not.toBeCloseTo(0.3,16);
  })
})
