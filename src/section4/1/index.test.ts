// スタブ/スパイの作成

import { greet, sayGoodBye } from "./greet";

jest.mock("./greet", () => ({
  // requireActualでモジュール本来の実装をimportする。
  // 未実装のsayGoodByeのみスタブに置きかえる
  ...jest.requireActual("./greet"),
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

test("挨拶を返す（本来の実装どおり）", () => {
  expect(greet("Taro")).toBe("Hello! Taro.");
});

test("さよならを返す（本来の実装ではない）", () => {
  const message = `${sayGoodBye("Taro")} See you.`;
  expect(message).toBe("Good bye, Taro. See you.");
});
