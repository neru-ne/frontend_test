# storybook起動
```
npm run stroybook
```

# Jest + Testing Library 
```
npm run test
```

# snapshot撮る
1. スナップショットを撮る
```
npm run storybook:build
npm run snapshot

// 期待値としてディレクトリを改名
mv __screenshots__ __snapshot/expected
```

2. 意図的にビジュアルリグレッションを作る  
/src/components/atoms/Button/index.ts
```
const ModuleStyle = css`
  display: inline-block;
  padding: 0.5em 2em;
  border-radius: 1em;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition-duration: 0.2s;

&[data-variant="small"] {
  font-size: 1.2rem;
  color: red !important; // <-追記
}
```

3. もう一度snapshopを撮る
```
npm run storybook:build
npm run snapshot

// ディレクトリを改名
mv __screenshots__ __snapshot/actual
```
4. reg-cliで画像差分を抽出する
```
npx reg-cli __snapshot/actual __snapshot/expected diff -R __snapshot/diff.html
```

# playwright
1. playwrightでスクリーンショットを撮る
```
// localhostを立ち上げてから
npm run dev

npm run e2e-test

// 期待値としてディレクトリを改名
mv __e2etest/screenshot __e2etest/expected
```

2. 意図的にビジュアルリグレッションを作る  
/src/components/atoms/Button/index.ts
```
const ModuleStyle = css`
  display: inline-block;
  padding: 0.5em 2em;
  border-radius: 1em;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition-duration: 0.2s;

&[data-variant="small"] {
  font-size: 1.2rem;
  color: red !important; // <-追記
}
```

3. 再度playwrightでスクリーンショットを撮る
```
npm run e2e-test

// ディレクトリを改名
mv __e2etest/screenshot __e2etest/actual
```

4. reg-cliで画像差分を抽出する
```
npx reg-cli __e2etest/actual __e2etest/expected diff -R __e2etest/e2e-diff.html
```
