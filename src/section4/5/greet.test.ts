import { greet } from "./greet";

// モックを使ったテスト

// スパイを実装する手法。
// スパイとは->テスト対象にどのような入出力が生じたか？ を記録するオブジェクト。記録された値を検証することで、意図通りの挙動となっているか確認できる。

// モック関数を使ったスパイが活躍するのは、
// テスト対象の引数に「関数」があるとき。

test("モック関数は実行された", () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toBeCalled();
});

test("モック関数は実行されていない", () => {
  const mockFn = jest.fn();
  expect(mockFn).not.toBeCalled();
});

test("モック関数は実行された回数を記録している", () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalledTimes(1);
  mockFn();
  expect(mockFn).toHaveBeenCalledTimes(2);
});

test("モック関数は関数の中でも実行できる", () => {
  const mockFn = jest.fn();
  function greet() {
    mockFn();
  }
  greet();
  expect(mockFn).toHaveBeenCalledTimes(1);
});

test("モック関数は実行時の引数を記録している", () => {
  const mockFn = jest.fn();
  function greet(message: string) {
    mockFn(message);
  }
  greet("hello");
  expect(mockFn).toHaveBeenCalledWith("hello");
});

test("モック関数はテスト対象の引数として使用できる", () => {
  const mockFn = jest.fn();
  greet("Jiro", mockFn);
  expect(mockFn).toHaveBeenCalledWith("Hello! Jiro");
});
