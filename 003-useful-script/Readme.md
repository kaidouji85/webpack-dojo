# 便利なスクリプト

## 1 開発用Webサーバ

(1)http-serverをインストール
  
```
npm install --save-dev http-server
```
  
(2)package.jsonのscriptsに以下を追加

```
"scripts": {
   "serve": "http-server"
 },
```

(3)以下コマンドでローカルサーバを起動する

```
npm run serve
```

(4)localhost:8080をブラウザで開く

## 2 ビルド生成物の削除

(1)rimrafをインストール

```
npm install --save-dev rimraf
```

(2)package.jsonのscriptsに以下を追加

```
"scripts": {
   "clean": "rimraf build"
 },
```

(3)ビルド生成物を削除

```
npm run clean
```

## startスクリプト

(1)npm-run-allをインストール
  
```
npm install --save-dev npm-run-all
```
  
(2)package.jsonのscriptsに以下を追加

```
"scripts": {
   "start": "npm-run-all clean build serve"
 },
```

(3)以下コマンドを実行する

```
# ビルド生成物の削除、ビルド、ローカルサーバ起動が順番に実行される
npm start
```