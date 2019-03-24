# Webpack-dev-server導入

(1)webpack-dev-serverをインストールする

```
npm install --save-dev webpack-dev-server
```

(2)以下のように静的ファイルのフォルダ構成を変更する

```
mkdir public
mv index.html public/index.html
```

(3)index.htmlのscriptタグを以下のように変更する
```
<script src="js/bundle.js"></script>
```

(4)webpack.config.jsを以下のように書き換える

```
// 追加
const path = require('path');

  output: {
    // 変更
    path: path.resolve(__dirname, 'public/js')
  },
  // 追加
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/js/'
  }
```

(5)package.json scripts serveを以下のように書き換える

```
"scripts": {
    "start": "npm-run-all clean serve",
    "serve": "webpack-dev-server",
    "clean": "rimraf public/js"
  }
```

(6)以下コマンドで動作確認を行う

```
npm start
# ブラウザでlocalhost:8080を開く
```

(7)public/js配下に何もファイルがないことを確認する