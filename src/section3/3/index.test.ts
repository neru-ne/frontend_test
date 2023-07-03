const str ="こんにちは世界";
const obj = { status: 200, message: str };


test('検証値は期待値と等しい',() => {
  expect(str).toBe('こんにちは世界');
  expect(str).toEqual('こんにちは世界');
});
test('文字の部分一致',() => {
  expect(str).toContain("世界");
  expect(str).not.toContain("さようなら");
});
test('正規表現',() => {
  expect(str).toMatch(/世界/);
  expect(str).not.toMatch(/さようなら/);
});
test('文字列の長さ',() => {
  expect(str).toHaveLength(7);
  expect(str).not.toHaveLength(8);
});

test('オブジェクトに含まれる文字列の検証。stringContaining',() => {
  expect(obj).toEqual({
    status:200,
    message:expect.stringContaining('世界'),
  });
})
test('オブジェクトに含まれる文字列の検証。stringMatching', () => {
  expect(obj).toEqual({
    status: 200,
    message: expect.stringMatching(/世界/),
  })
});

const tags = ["Jest", "Storybook","Playwright", "React", "Next.js" ];

test('配列の検証',() => {
  expect(tags).toContain('Jest');
  expect(tags).toHaveLength(5);
})

describe("オブジェクトの検証", () => {
  const author = { name: "taroyamada", age: 38 };
  const article = {
    title: "Testing with Jest",
    author,
  };
  test("toMatchObject", () => {
    expect(author).toMatchObject({ name: "taroyamada", age: 38 });
    expect(author).toMatchObject({ name: "taroyamada" });
    expect(author).not.toMatchObject({ gender: "man" });
  });
  test("toHaveProperty", () => {
    expect(author).toHaveProperty("name");
    expect(author).toHaveProperty("age");
  });
  test("objectContaining", () => {
    expect(article).toEqual({
      title: "Testing with Jest",
      author: expect.objectContaining({ name: "taroyamada" }),
    });
    expect(article).toEqual({
      title: "Testing with Jest",
      author: expect.not.objectContaining({ gender: "man" }),
    });
  });
});
