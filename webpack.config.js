const path = require("path");

const cliant = {
  mode: "development",
  target: "node",
  // エントリポイントの定義
  entry: {
    app: ["@babel/polyfill", path.join(__dirname, "cliant/src/index.js")],
  },
  // 出力先の定義
  output: {
    path: path.join(__dirname, "cliant"),
    filename: "[name].js",
  },
  resolve: {
    // モジュール解決定義
    modules: ["node_modules", path.resolve(__dirname, "src")],
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env","@babel/preset-react"],
              plugins: [
                ["@babel/plugin-proposal-class-properties", { loose: true }],
              ],
            },
          },
        ],
      },
    ],
  },
};

const server = {
  mode: "development",
  // node_moduleを使うために必要(クライアントは必要なさそう。)
  target: "node",
  // エントリポイントの定義
  entry: {
    app: ["@babel/polyfill", path.join(__dirname, "server/src/index.js")],
  },
  externals: ["pg-native"],
  // 出力先の定義
  output: {
    path: path.join(__dirname, "server"),
    filename: "[name].js",
  },
  resolve: {
    // モジュール解決定義
    modules: ["node_modules", path.resolve(__dirname, "src")],
  },
  devtool: "inline-source-map",
  module: {
    // babel の実行定義
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
};

module.exports = [server, cliant];
