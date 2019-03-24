# ソースマップを追加する

(1)webpack.config.jsに以下内容を追加する

```
module.exports = {
  mode: "development",
  devtool: "sourcemap",
  //
}
```

(2)以下コマンドでビルドをする

```
# ゴミを削除
npm celan

# build/bundle.js.mapというファイルが新たに生成される
# これこそがソースマップ
npm build
```

(3)ブラウザでも動作確認をする

```
npm start

# ブラウザでlocalhost:8080を開く
```
(4)ブラウザの開発者モードを開く
(5)以下方法で、ビルド前のコードでデバッグができるようになる
https://qiita.com/pegass85/items/b9aae1adf51646707486