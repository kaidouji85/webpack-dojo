# npmライブラリを利用する

(1)文字反転ライブラリ(sudenona)をインストールする

```
npm install sudenona
```

(2)文字反転処理をnpmライブラリを使うように書き換える

reverse.js

```
// 追加
import {sudenona} from 'sudenona';

export function createReverseResult(originText) {
  //
  
  // return を以下に置き換える
  return `反転結果: ${sudenona(originText)}`;
}

// reverseStringはもう使わないので削除する
```

(3)以下コマンドで動作確認する

```
npm start
# localhost:8080をブラウザで開く
```