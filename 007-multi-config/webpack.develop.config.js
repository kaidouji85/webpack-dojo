const path = require('path');

module.exports = {
  mode: "development",
  devtool: "sourcemap",
  entry: ["./src/app.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'public/js')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/js/'
  }
};