# react-redux-node-postgresql

以下を使用している。

- react
- redux
- node
- postgresql

## 起動方法

- クローンする
- フォルダ移動

```
$ cd react-redux-node-postgresql
```

- ビルド & バンドルする

```
$ npm run build
```

- サーバ起動する

```
$ node server/app
```

- ブラウザで以下にアクセスする
  > http://localhost:8080/

## 補足

- 構成
  DB アクセスが起きた時に DB からデータを取得し、dispach 時に store のデータを更新することで表示データとの整合性を取っている
