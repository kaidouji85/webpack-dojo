# 開発、プロダクションでビルド設定を分ける~~~~

(1)webpack.config.jsをリネームして、開発用ビルド設定にする

```
mv webpack.config.js webpack.develop.config.js
```

(2)以下内容でwebpack.config.jsというファイルを作る

```
const path = require('path');

module.exports = {
  mode: "production",
  entry: ["./src/app.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'public/js')
  }
};
```

(3)package.jsonのscriptsを以下内容に書き直す

```
  "scripts": {
    "start": "npm-run-all clean build serve",
    "start:dev": "npm-run-all clean serve:dev",
    "serve": "http-server public",
    "serve:dev": "webpack-dev-server --config webpack.develop.config.js",
    "build": "webpack --configure webpack.config.js",
    "clean": "rimraf public/js"
  }
```

(4)以下コマンドで開発用サーバを起動する

```
npm run start:dev
```

(5)以下コマンドでプロダクション確認用サーバを起動する

```
npm start
```