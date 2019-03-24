# 作業内容

## 1 webpackインストール

```
# package.jsonを生成するコマンド
# 質問内容はすべてyesでOK
npm init

npm install --save-dev webpack
npm install --save-dev webpack-cli
```

## 2 ソースフォルダ作成

```
mkdir src
mv app.js src/app.js
mv reverse.js src/reverse.js
```

## 3 webpack.config.jsの追加

```
module.exports = {
  entry: ["./src/app.js"],
  output: {
    filename: "bundle.js",
    path: __dirname + '/build'
  }
};
```


## 4 ESモジュール化

### reverse.js
createReverseResultの前にexportを追加する

```
export function createReverseResult(originText) {
  //...
}
```

### app.js
先頭行に以下文言を追加

```
import {createReverseResult} from './reverse';
```

## 5 ビルドコマンド追加
package.jsonのscriptに以下を追加

```
  "scripts": {
    "build": "webpack --configure webpack.config.js"
  },
```

## 6 フロントエンドのビルド

```
npm run build
```

## 7 JavaScriptの読込先を変更
既存のscriptタグを全て削除して、以下内容に置き換える。

```
<script src="build/bundle.js"></script>
```

## 8 確認
index.htmlをブラウザで開く