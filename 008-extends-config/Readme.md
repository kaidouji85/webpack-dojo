# 既存webpack.config.jsを拡張する

(1)webpack.develop.config.jsを以下内容に変更する

```
const path = require('path');
const config = require('./webpack.config');

module.exports = {
  ...config,
  mode: "development",
  devtool: "sourcemap",
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/js/'
  }
};

```

(2)開発用サーバで動作確認する

```
npm run start:dev
```