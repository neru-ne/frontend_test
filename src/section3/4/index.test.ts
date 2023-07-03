import { timeout, wait } from ".";

// 非同期通信をテストする

// テスト関数が非同期の場合、アサーションをretrunする必要がある。
// async/awaitを使うとreturnいらなくなるので、使った方がいい。
//
// - 非同期処理を含むテストは、テスト関数をasync関数で書く
// - .resolveや、.rejectsを含むアサーションはawaitする
// - try...catch文による例外スローを検証する場合、expact.assertionsを書く


describe('非同期処理をテストする', () => {
  describe('wait', () => {
    test('指定時間待つと、経過時間をもって resolve される', () => {
      return wait(50).then((duration) => {
        expect(duration).toBe(50);
      })
    });
    // wait関数がresolveした時の値を検証したいなら、この書き方シンプル
    test("指定時間待つと、経過時間をもって resolve される", () => {
      return expect(wait(50)).resolves.toBe(50);
    });
    // async/awaitを使った書き方1
    test('指定時間待つと、経過時間をもって resolve される', async () => {
      await expect(wait(50)).resolves.toBe(50)
    })
    test('指定時間待つと、経過時間をもって resolve される', async () => {
      expect(await wait(50)).toBe(50);
    })
  });
  describe('timeout', () => {
    test('指定時間待つと、経過時間をもって rejectされる', () => {
      return timeout(50).catch((duration) => {
        expect(duration).toBe(50);
      });
    });

    // rejectマッチャーを使ったパターン２つ
    test('指定時間待つと、経過時間をもって rejectされる',() => {
      return expect(timeout(50)).rejects.toBe(50);
    })
    test('指定時間待つと、経過時間をもって rejectされる', async () => {
      await expect(timeout(50)).rejects.toBe(50);
    })
    test("指定時間待つと、経過時間をもって reject される", async () => {

      //expect.assertions(1) -> 「アサーションが実行されること」そのものを検証し、引数は実行される回数の期待値を指定する
      expect.assertions(1);

      try {
        // await wait(50);
        // アサーションが一度も実行されないまま終了するので、テストは失敗する

        await timeout(50);

      } catch (err) {
        // アサーションは実行されない
        expect(err).toBe(50);
      }
    });

    test("return していないため、Promise が解決する前にテストが終了してしまう", () => {
      // 失敗を期待して書かれたアサーション
      expect(wait(2000)).resolves.toBe(3000);
      // 正しくはアサーションを return する
      // return expect(wait(2000)).resolves.toBe(3000);
    });
  })
})
