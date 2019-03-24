# ソースマップを追加する

(1)webpack.config.jsに以下内容を追加する

```
module.exports = {
  mode: "development",
  devtool: "sourcemap",
  //
}
```

(2)開発用サーバをスタートする

```
npm start
```

(3)ブラウザの開発者ツールを開く
(4)webpack://配下にビルド前のソースコードが見える